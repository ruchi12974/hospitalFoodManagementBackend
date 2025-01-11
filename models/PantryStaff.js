const mongoose = require('mongoose');

// Define the PantryStaff schema
const pantryStaffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactInfo: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
  role: { type: String, enum: ['Cook', 'Delivery Personnel'], required: true },
  assignedTasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FoodPreparationTask' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Export the PantryStaff model
module.exports = mongoose.model('PantryStaff', pantryStaffSchema);
