const PantryStaff = require('../models/PantryStaff');

// Get all pantry staff
const getPantryStaff = async (req, res) => {
  try {
    const pantryStaff = await PantryStaff.find().populate('assignedTasks', 'taskName deadline');
    res.status(200).json(pantryStaff);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pantry staff', details: error.message });
  }
};

// Add a new pantry staff member
const addPantryStaff = async (req, res) => {
  try {
    const pantryStaff = new PantryStaff(req.body);
    const savedPantryStaff = await pantryStaff.save();
    res.status(201).json(savedPantryStaff);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add pantry staff', details: error.message });
  }
};

// Update pantry staff details by ID
const updatePantryStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPantryStaff = await PantryStaff.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedPantryStaff) {
      return res.status(404).json({ error: 'Pantry staff member not found' });
    }
    res.status(200).json(updatedPantryStaff);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update pantry staff', details: error.message });
  }
};

// Delete pantry staff by ID
const deletePantryStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPantryStaff = await PantryStaff.findByIdAndDelete(id);
    if (!deletedPantryStaff) {
      return res.status(404).json({ error: 'Pantry staff member not found' });
    }
    res.status(200).json({ message: 'Pantry staff member deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete pantry staff', details: error.message });
  }
};

module.exports = { getPantryStaff, addPantryStaff, updatePantryStaff, deletePantryStaff };
