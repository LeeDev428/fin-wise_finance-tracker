const express = require('express');
const router = express.Router();
const Progress = require('../models/Progress');
const User = require('../models/User');
const { protect } = require('../middleware/auth');

// @route   GET /api/progress
// @desc    Get user's progress
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    let progress = await Progress.findOne({ user: req.user.id })
      .populate('moduleProgress.module')
      .populate('quizProgress.quiz');
    
    if (!progress) {
      // Create progress if it doesn't exist
      progress = await Progress.create({
        user: req.user.id,
        moduleProgress: [],
        quizProgress: [],
      });
    }

    res.json({
      success: true,
      data: progress,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error fetching progress',
      error: error.message 
    });
  }
});

// @route   POST /api/progress/module/:moduleId
// @desc    Update module progress
// @access  Private
router.post('/module/:moduleId', protect, async (req, res) => {
  try {
    let progress = await Progress.findOne({ user: req.user.id });
    
    if (!progress) {
      progress = await Progress.create({
        user: req.user.id,
        moduleProgress: [],
        quizProgress: [],
      });
    }

    // Check if module already in progress
    const moduleIndex = progress.moduleProgress.findIndex(
      (m) => m.module.toString() === req.params.moduleId
    );

    if (moduleIndex > -1) {
      // Update existing
      progress.moduleProgress[moduleIndex].completed = true;
      progress.moduleProgress[moduleIndex].completedAt = Date.now();
    } else {
      // Add new
      progress.moduleProgress.push({
        module: req.params.moduleId,
        completed: true,
        completedAt: Date.now(),
      });
    }

    progress.lastUpdated = Date.now();
    await progress.save();

    // Update user's completed modules
    await User.findByIdAndUpdate(req.user.id, {
      $addToSet: { 'progress.completedModules': req.params.moduleId }
    });

    res.json({
      success: true,
      message: 'Module progress updated',
      data: progress,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error updating module progress',
      error: error.message 
    });
  }
});

// @route   POST /api/progress/quiz/:quizId
// @desc    Update quiz progress
// @access  Private
router.post('/quiz/:quizId', protect, async (req, res) => {
  try {
    const { score, totalPoints } = req.body;

    let progress = await Progress.findOne({ user: req.user.id });
    
    if (!progress) {
      progress = await Progress.create({
        user: req.user.id,
        moduleProgress: [],
        quizProgress: [],
      });
    }

    // Check if quiz already in progress
    const quizIndex = progress.quizProgress.findIndex(
      (q) => q.quiz.toString() === req.params.quizId
    );

    if (quizIndex > -1) {
      // Update existing
      progress.quizProgress[quizIndex].score = score;
      progress.quizProgress[quizIndex].totalPoints = totalPoints;
      progress.quizProgress[quizIndex].completed = true;
      progress.quizProgress[quizIndex].completedAt = Date.now();
    } else {
      // Add new
      progress.quizProgress.push({
        quiz: req.params.quizId,
        score,
        totalPoints,
        completed: true,
        completedAt: Date.now(),
      });
    }

    progress.lastUpdated = Date.now();
    await progress.save();

    // Update user's completed quizzes
    await User.findByIdAndUpdate(req.user.id, {
      $addToSet: { 'progress.completedQuizzes': req.params.quizId }
    });

    res.json({
      success: true,
      message: 'Quiz progress updated',
      data: progress,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error updating quiz progress',
      error: error.message 
    });
  }
});

module.exports = router;
