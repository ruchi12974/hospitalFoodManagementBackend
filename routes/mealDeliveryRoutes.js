const express = require('express');
const router = express.Router();
const {
  getDeliveries,
  addDelivery,
  updateDelivery,
  deleteDelivery,
} = require('../controllers/mealDeliveryController');

// Routes for meal deliveries
router.get('/', getDeliveries); // List all deliveries
router.post('/', addDelivery); // Assign a new delivery task
router.put('/:id', updateDelivery); // Update delivery status or details by ID
router.delete('/:id', deleteDelivery); // Delete delivery task by ID

module.exports = router;
