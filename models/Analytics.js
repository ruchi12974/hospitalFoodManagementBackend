const mongoose = require('mongoose');

// Define the Analytics schema
const analyticsSchema = new mongoose.Schema({
  date: { type: Date, required: true, unique: true },
  totalMealsDelivered: { type: Number, default: 0 },
  morningMeals: { type: Number, default: 0 },
  eveningMeals: { type: Number, default: 0 },
  nightMeals: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Export the Analytics model
module.exports = mongoose.model('Analytics', analyticsSchema);
