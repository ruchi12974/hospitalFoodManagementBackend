const express = require('express');
const router = express.Router();
const {
  getPantryStaff,
  addPantryStaff,
  updatePantryStaff,
  deletePantryStaff,
} = require('../controllers/pantryStaffController');

// Routes for pantry staff
router.get('/', getPantryStaff); // List all pantry staff
router.post('/', addPantryStaff); // Add a new pantry staff member
router.put('/:id', updatePantryStaff); // Update pantry staff by ID
router.delete('/:id', deletePantryStaff); // Delete pantry staff by ID

module.exports = router;
