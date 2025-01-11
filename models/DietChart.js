const mongoose = require('mongoose');

// Define the diet chart schema
const dietChartSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  morningMeal: [
    {
      mealName: { type: String, required: true },
      ingredients: { type: [String], required: true },
      instructions: { type: String, required: true },
    },
  ],
  eveningMeal: [
    {
      mealName: { type: String, required: true },
      ingredients: { type: [String], required: true },
      instructions: { type: String, required: true },
    },
  ],
  nightMeal: [
    {
      mealName: { type: String, required: true },
      ingredients: { type: [String], required: true },
      instructions: { type: String, required: true },
    },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Export the DietChart model
module.exports = mongoose.model('DietChart', dietChartSchema);
