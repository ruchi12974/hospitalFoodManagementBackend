const mongoose = require('mongoose');

// Define the patient schema
const patientSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  diseases: [String],
  allergies: [String],
  roomNumber: { type: String, required: true },
  bedNumber: { type: String },
  floorNumber: { type: String },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  contactInfo: {
    phone: { type: String, required: true },
    email: { type: String },
  },
  emergencyContact: {
    name: { type: String, required: true },
    relationship: { type: String },
    phone: { type: String, required: true },
  },
  dietChart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DietChart' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Export the Patient model
module.exports = mongoose.model('Patient', patientSchema);
