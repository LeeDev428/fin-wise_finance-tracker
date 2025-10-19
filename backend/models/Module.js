const mongoose = require('mongoose');

const ModuleSchema = new mongoose.Schema({
  moduleNumber: {
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
    default: '✏️', // Emoji or icon identifier
  },
  content: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Module', ModuleSchema);
