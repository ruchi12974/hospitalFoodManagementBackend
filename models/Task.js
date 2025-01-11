const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskType: { type: String, enum: ['preparation', 'delivery'], required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'PantryStaff', required: true },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
  details: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Task', taskSchema);
