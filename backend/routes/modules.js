const express = require('express');
const router = express.Router();
const Module = require('../models/Module');
const { protect } = require('../middleware/auth');

// @route   GET /api/modules
// @desc    Get all modules
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    const { category } = req.query;
    
    let query = { isActive: true };
    if (category) {
      query.category = category;
    }

    const modules = await Module.find(query).sort({ moduleNumber: 1 });
    
    res.json({
      success: true,
      count: modules.length,
      data: modules,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error fetching modules',
      error: error.message 
    });
  }
});

// @route   GET /api/modules/:id
// @desc    Get single module
// @access  Private
router.get('/:id', protect, async (req, res) => {
  try {
    const module = await Module.findById(req.params.id);
    
    if (!module) {
      return res.status(404).json({ 
        success: false, 
        message: 'Module not found' 
      });
    }

    res.json({
      success: true,
      data: module,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error fetching module',
      error: error.message 
    });
  }
});

// @route   POST /api/modules (Admin only - for seeding data)
// @desc    Create a module
// @access  Private
router.post('/', async (req, res) => {
  try {
    const module = await Module.create(req.body);
    
    res.status(201).json({
      success: true,
      data: module,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error creating module',
      error: error.message 
    });
  }
});

module.exports = router;
