const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const Progress = require('../models/Progress');

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post(
  '/register',
  [
    body('username').trim().isLength({ min: 3 }).withMessage('Username must be at least 3 characters'),
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  async (req, res) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      // Check if user already exists
      let user = await User.findOne({ $or: [{ email }, { username }] });
      if (user) {
        return res.status(400).json({ 
          success: false, 
          message: 'User already exists with that email or username' 
        });
      }

      // Create new user
      user = await User.create({
        username,
        email,
        password,
      });

      // Create initial progress record
      await Progress.create({
        user: user._id,
        moduleProgress: [],
        quizProgress: [],
      });

      // Generate token
      const token = generateToken(user._id);

      res.status(201).json({
        success: true,
        message: 'User registered successfully',
        data: {
          id: user._id,
          username: user.username,
          email: user.email,
          token,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ 
        success: false, 
        message: 'Server error during registration',
        error: error.message 
      });
    }
  }
);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').exists().withMessage('Password is required'),
  ],
  async (req, res) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // Find user by email (include password for comparison)
      const user = await User.findOne({ email }).select('+password');

      if (!user) {
        return res.status(401).json({ 
          success: false, 
          message: 'Invalid email or password' 
        });
      }

      // Check password
      const isMatch = await user.matchPassword(password);

      if (!isMatch) {
        return res.status(401).json({ 
          success: false, 
          message: 'Invalid email or password' 
        });
      }

      // Generate token
      const token = generateToken(user._id);

      res.json({
        success: true,
        message: 'Login successful',
        data: {
          id: user._id,
          username: user.username,
          email: user.email,
          progress: user.progress,
          token,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ 
        success: false, 
        message: 'Server error during login',
        error: error.message 
      });
    }
  }
);

// @route   GET /api/auth/me
// @desc    Get current user
// @access  Private
router.get('/me', require('../middleware/auth').protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error',
      error: error.message 
    });
  }
});

// @route   PUT /api/auth/profile
// @desc    Update user profile
// @access  Private
router.put(
  '/profile',
  require('../middleware/auth').protect,
  [
    body('username').optional().trim().isLength({ min: 3 }).withMessage('Username must be at least 3 characters'),
    body('email').optional().isEmail().withMessage('Please provide a valid email'),
    body('newPassword').optional().isLength({ min: 6 }).withMessage('New password must be at least 6 characters'),
  ],
  async (req, res) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { username, email, currentPassword, newPassword } = req.body;

    try {
      // Get user with password
      const user = await User.findById(req.user.id).select('+password');

      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }

      // If changing password, verify current password
      if (newPassword) {
        if (!currentPassword) {
          return res.status(400).json({ 
            success: false, 
            message: 'Current password is required to set a new password' 
          });
        }

        const isMatch = await user.matchPassword(currentPassword);
        if (!isMatch) {
          return res.status(401).json({ 
            success: false, 
            message: 'Current password is incorrect' 
          });
        }

        user.password = newPassword;
      }

      // Update username if provided
      if (username && username !== user.username) {
        // Check if username is taken
        const existingUser = await User.findOne({ username, _id: { $ne: user._id } });
        if (existingUser) {
          return res.status(400).json({ 
            success: false, 
            message: 'Username is already taken' 
          });
        }
        user.username = username;
      }

      // Update email if provided
      if (email && email !== user.email) {
        // Check if email is taken
        const existingUser = await User.findOne({ email, _id: { $ne: user._id } });
        if (existingUser) {
          return res.status(400).json({ 
            success: false, 
            message: 'Email is already taken' 
          });
        }
        user.email = email;
      }

      // Save user
      await user.save();

      // Return updated user without password
      const updatedUser = await User.findById(user._id);

      res.json({
        success: true,
        message: 'Profile updated successfully',
        data: updatedUser,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ 
        success: false, 
        message: 'Server error during profile update',
        error: error.message 
      });
    }
  }
);

module.exports = router;
