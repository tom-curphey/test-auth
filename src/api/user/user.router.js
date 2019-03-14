const express = require('express');
const router = express.Router();

// @route   GET api/user/test
// @desc    Test User Route
// @access  Public
router.get('/test', (req, res) =>
  res.status(200).json({ message: 'Testing User Router' })
);

module.exports = router;
