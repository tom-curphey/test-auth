const express = require('express');
const router = express.Router();

// @route   GET api/recipe/test
// @desc    Test Recipe Route
// @access  Public
router.get('/test', (req, res) =>
  res.status(200).json({ message: 'Testing Recipe Router' })
);

module.exports = router;
