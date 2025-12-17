const express = require('express');
const router = express.Router();
const QuizResult = require('../models/QuizResult');
const { protect } = require('../middleware/auth');

// @route   POST /api/quiz-results
// @desc    Submit quiz result
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    const { quizId, quizNumber, moduleName, category, score, totalQuestions, percentage, passed, timeTaken } = req.body;

    // Check if user already has a result for this quiz
    let quizResult = await QuizResult.findOne({ 
      user: req.user.id, 
      quizId 
    });

    if (quizResult) {
      // Update existing result if new score is better
      if (percentage > quizResult.percentage) {
        quizResult.score = score;
        quizResult.percentage = percentage;
        quizResult.passed = passed;
        quizResult.completedAt = Date.now();
        quizResult.timeTaken = timeTaken;
        await quizResult.save();
      }
    } else {
      // Create new result
      quizResult = await QuizResult.create({
        user: req.user.id,
        quizId,
        quizNumber,
        moduleName,
        category,
        score,
        totalQuestions,
        percentage,
        passed,
        timeTaken,
      });
    }

    res.status(201).json({
      success: true,
      data: quizResult,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error saving quiz result',
      error: error.message,
    });
  }
});

// @route   GET /api/quiz-results
// @desc    Get all quiz results for current user
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    const results = await QuizResult.find({ user: req.user.id })
      .sort({ completedAt: -1 });

    res.json({
      success: true,
      count: results.length,
      data: results,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error fetching quiz results',
      error: error.message,
    });
  }
});

// @route   GET /api/quiz-results/:quizId
// @desc    Get specific quiz result
// @access  Private
router.get('/:quizId', protect, async (req, res) => {
  try {
    const result = await QuizResult.findOne({
      user: req.user.id,
      quizId: req.params.quizId,
    });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Quiz result not found',
      });
    }

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error fetching quiz result',
      error: error.message,
    });
  }
});

// @route   GET /api/quiz-results/stats/summary
// @desc    Get quiz statistics summary
// @access  Private
router.get('/stats/summary', protect, async (req, res) => {
  try {
    const results = await QuizResult.find({ user: req.user.id });
    
    const summary = {
      totalQuizzes: results.length,
      passedQuizzes: results.filter(r => r.passed).length,
      averageScore: results.length > 0 
        ? (results.reduce((sum, r) => sum + r.percentage, 0) / results.length).toFixed(2)
        : 0,
      byCategory: {
        Knowledge: results.filter(r => r.category === 'Knowledge').length,
        Attitude: results.filter(r => r.category === 'Attitude').length,
        Behavior: results.filter(r => r.category === 'Behavior').length,
      },
    };

    res.json({
      success: true,
      data: summary,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error fetching quiz statistics',
      error: error.message,
    });
  }
});

module.exports = router;
