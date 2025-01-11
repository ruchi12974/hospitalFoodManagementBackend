const express = require('express');
const router = express.Router();
const { getAnalytics, updateAnalytics } = require('../controllers/analyticsController');

// Routes for analytics
router.get('/', getAnalytics); // Get analytics data
router.post('/', updateAnalytics); // Update or create analytics data

module.exports = router;
