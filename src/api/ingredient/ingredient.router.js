const express = require('express');
const router = express.Router();

// @route   GET api/ingredient/test
// @desc    Test Ingredient Route
// @access  Public
router.get('/test', (req, res) =>
  res.status(200).json({ message: 'Testing Ingredient Router' })
);

module.exports = router;
