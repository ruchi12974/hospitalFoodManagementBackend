const express = require('express');
const router = express.Router();
const {
  getDietCharts,
  addDietChart,
  updateDietChart,
  deleteDietChart,
} = require('../controllers/dietChartController');

// Routes for diet charts
router.get('/', getDietCharts); // List all diet charts
router.post('/', addDietChart); // Add a new diet chart
router.put('/:id', updateDietChart); // Update a diet chart by ID
router.delete('/:id', deleteDietChart); // Delete a diet chart by ID

module.exports = router;
