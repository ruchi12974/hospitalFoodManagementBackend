const express = require('express');
const router = express.Router();
const {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} = require('../controllers/foodPreparationTaskController');

// Routes for food preparation tasks
router.get('/', getTasks); // List all tasks
router.post('/', addTask); // Assign a new task
router.put('/:id', updateTask); // Update task by ID
router.delete('/:id', deleteTask); // Delete task by ID

module.exports = router;
