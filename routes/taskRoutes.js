const express = require('express');
const router = express.Router();
const { 
  getTasks, 
  assignTask, 
  updateTaskStatus 
} = require('../controllers/taskController');

// Routes
router.get('/', getTasks); // Fetch all tasks
router.post('/', assignTask); // Assign a new task
router.put('/:id', updateTaskStatus); // Update task status

module.exports = router;
