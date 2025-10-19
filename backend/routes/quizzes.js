const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');
const { protect } = require('../middleware/auth');

// @route   GET /api/quizzes
// @desc    Get all quizzes
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    const { category } = req.query;
    
    let query = { isActive: true };
    if (category) {
      query.category = category;
    }

    const quizzes = await Quiz.find(query).sort({ quizNumber: 1 });
    
    res.json({
      success: true,
      count: quizzes.length,
      data: quizzes,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error fetching quizzes',
      error: error.message 
    });
  }
});

// @route   GET /api/quizzes/:id
// @desc    Get single quiz
// @access  Private
router.get('/:id', protect, async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    
    if (!quiz) {
      return res.status(404).json({ 
        success: false, 
        message: 'Quiz not found' 
      });
    }

    res.json({
      success: true,
      data: quiz,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error fetching quiz',
      error: error.message 
    });
  }
});

// @route   POST /api/quizzes (Admin only - for seeding data)
// @desc    Create a quiz
// @access  Private
router.post('/', async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);
    
    res.status(201).json({
      success: true,
      data: quiz,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error creating quiz',
      error: error.message 
    });
  }
});

module.exports = router;
