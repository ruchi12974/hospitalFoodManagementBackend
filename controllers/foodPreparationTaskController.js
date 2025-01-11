const FoodPreparationTask = require('../models/FoodPreparationTask');

// Get all food preparation tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await FoodPreparationTask.find()
      .populate('assignedTo', 'name role')
      .populate('patientId', 'name age');
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks', details: error.message });
  }
};

// Assign a new food preparation task
const addTask = async (req, res) => {
  try {
    const task = new FoodPreparationTask(req.body);
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to assign task', details: error.message });
  }
};

// Update task status or details by ID
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedTask = await FoodPreparationTask.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task', details: error.message });
  }
};

// Delete task by ID
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await FoodPreparationTask.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task', details: error.message });
  }
};

module.exports = { getTasks, addTask, updateTask, deleteTask };
