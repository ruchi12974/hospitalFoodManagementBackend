const DietChart = require('../models/DietChart');

// Get all diet charts
const getDietCharts = async (req, res) => {
  try {
    const dietCharts = await DietChart.find().populate('patientId', 'patientName contactInfo');
    res.status(200).json(dietCharts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch diet charts', details: error.message });
  }
};

// Add a new diet chart
const addDietChart = async (req, res) => {
  try {
    const dietChart = new DietChart(req.body);
    const savedDietChart = await dietChart.save();
    res.status(201).json(savedDietChart);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add diet chart', details: error.message });
  }
};

// Update a diet chart by ID
const updateDietChart = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedDietChart = await DietChart.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedDietChart) {
      return res.status(404).json({ error: 'Diet chart not found' });
    }
    res.status(200).json(updatedDietChart);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update diet chart', details: error.message });
  }
};

// Delete a diet chart by ID
const deleteDietChart = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDietChart = await DietChart.findByIdAndDelete(id);
    if (!deletedDietChart) {
      return res.status(404).json({ error: 'Diet chart not found' });
    }
    res.status(200).json({ message: 'Diet chart deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete diet chart', details: error.message });
  }
};

module.exports = { getDietCharts, addDietChart, updateDietChart, deleteDietChart };
