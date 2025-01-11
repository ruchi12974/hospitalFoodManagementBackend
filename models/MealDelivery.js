const mongoose = require('mongoose');

// Define the MealDelivery schema
const mealDeliverySchema = new mongoose.Schema({
  taskId: { type: mongoose.Schema.Types.ObjectId, ref: 'FoodPreparationTask', required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'PantryStaff', required: true },
  mealBoxId: { type: String, required: true, unique: true },
  deliveryStatus: { 
    type: String, 
    enum: ['Pending', 'In Progress', 'Delivered'], 
    default: 'Pending', 
    required: true 
  },
  deliveryTime: { type: Date },
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  roomNumber: { type: String, required: true },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Export the MealDelivery model
module.exports = mongoose.model('MealDelivery', mealDeliverySchema);
