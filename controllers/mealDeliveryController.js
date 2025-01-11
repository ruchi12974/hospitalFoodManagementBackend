const MealDelivery = require('../models/MealDelivery');

// Get all meal deliveries
const getDeliveries = async (req, res) => {
  try {
    const deliveries = await MealDelivery.find()
      .populate('taskId', 'taskName mealType')
      .populate('assignedTo', 'name role')
      .populate('patientId', 'name age');
    res.status(200).json(deliveries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch deliveries', details: error.message });
  }
};

// Assign a new delivery task
const addDelivery = async (req, res) => {
  try {
    const delivery = new MealDelivery(req.body);
    const savedDelivery = await delivery.save();
    res.status(201).json(savedDelivery);
  } catch (error) {
    res.status(500).json({ error: 'Failed to assign delivery', details: error.message });
  }
};

// Update delivery status or details by ID
const updateDelivery = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDelivery = await MealDelivery.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedDelivery) {
      return res.status(404).json({ error: 'Delivery task not found' });
    }
    res.status(200).json(updatedDelivery);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update delivery', details: error.message });
  }
};

// Delete a delivery task by ID
const deleteDelivery = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDelivery = await MealDelivery.findByIdAndDelete(id);
    if (!deletedDelivery) {
      return res.status(404).json({ error: 'Delivery task not found' });
    }
    res.status(200).json({ message: 'Delivery task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete delivery', details: error.message });
  }
};

module.exports = { getDeliveries, addDelivery, updateDelivery, deleteDelivery };
