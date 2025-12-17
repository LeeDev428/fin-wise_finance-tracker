const mongoose = require('mongoose');

const QuizResultSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  quizId: {
    type: String,
    required: true, // e.g., 'quiz1-module1', 'quiz1-module2', etc.
  },
  quizNumber: {
    type: Number,
    required: true,
  },
  moduleName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Knowledge', 'Attitude', 'Behavior'],
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  totalQuestions: {
    type: Number,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
  passed: {
    type: Boolean,
    default: false,
  },
  completedAt: {
    type: Date,
    default: Date.now,
  },
  timeTaken: {
    type: Number, // in seconds
    default: 0,
  },
});

// Compound index to prevent duplicate submissions
QuizResultSchema.index({ user: 1, quizId: 1 });

module.exports = mongoose.model('QuizResult', QuizResultSchema);
