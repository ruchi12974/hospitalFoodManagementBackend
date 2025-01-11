const mongoose = require('mongoose');

// Define the FoodPreparationTask schema
const foodPreparationTaskSchema = new mongoose.Schema({
  taskName: { type: String, required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'PantryStaff' },
  status: { 
    type: String, 
    enum: ['Pending', 'In Progress', 'Completed'], 
    default: 'Pending',
    required: true 
  },
  mealType: { 
    type: String, 
    enum: ['Morning', 'Evening', 'Night'], 
    required: true 
  },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Export the FoodPreparationTask model
module.exports = mongoose.model('FoodPreparationTask', foodPreparationTaskSchema);
