const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  quizNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Knowledge', 'Attitude', 'Behavior'],
    required: true,
  },
  icon: {
    type: String,
    default: '✏️',
  },
  questions: [{
    question: {
      type: String,
      required: true,
    },
    options: [{
      type: String,
      required: true,
    }],
    correctAnswer: {
      type: Number, // Index of correct option
      required: true,
    },
    points: {
      type: Number,
      default: 10,
    },
  }],
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Quiz', QuizSchema);
