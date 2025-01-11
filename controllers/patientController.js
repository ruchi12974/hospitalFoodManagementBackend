
/* .populate({
      path: 'dietChart',
      options: { strictPopulate: false }, // Allow empty references
    })  */
   
const Patient = require('../models/Patient');
const DietChart = require('../models/DietChart');
const mongoose = require('mongoose');

// List all patients
const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find().populate({
      path: 'dietChart',
      options: { strictPopulate: false }, // Allow empty references
    });
    res.status(200).json(patients);
  } catch (error) {
    console.error('Error fetching patients:', error.message);
    res.status(500).json({ error: 'Failed to fetch patients' });
  }
};


// Get details of a specific patient
const getPatient = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Fetching patient with ID: ${id}`);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log('Invalid patient ID');
      return res.status(400).json({ error: 'Invalid patient ID' });
    }

    const patient = await Patient.findById(id).populate('dietChart');
    if (!patient) {
      console.log('Patient not found');
      return res.status(404).json({ error: 'Patient not found' });
    }

    console.log('Patient found:', patient);
    res.status(200).json(patient);
  } catch (error) {
    console.error('Error in getPatient:', error.message);
    res.status(500).json({ error: 'Failed to fetch patient', details: error.message });
  }
};


// Add a new patient
const addPatient = async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    const savedPatient = await newPatient.save();
    res.status(201).json(savedPatient);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add patient', details: error.message });
  }
};

// Update patient details
const updatePatient = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid patient ID' });
    }

    const updatedPatient = await Patient.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedPatient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    res.status(200).json(updatedPatient);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update patient', details: error.message });
  }
};

// Delete a patient
const deletePatient = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid patient ID' });
    }

    const deletedPatient = await Patient.findByIdAndDelete(id);
    if (!deletedPatient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    res.status(200).json({ message: 'Patient deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete patient' });
  }
};

module.exports = { getPatients, getPatient, addPatient, updatePatient, deletePatient };

/* const Patient = require('../models/Patient');

// Fetch all patients
const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch patients' });
  }
};

const getPatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch patient' });
  }
}

// Add a new patient
const addPatient = async (req, res) => {
  const { name, diseases, roomNumber, age, gender } = req.body;
  try {
    const newPatient = new Patient(req.body);
    const savedPatient = await newPatient.save();
    res.status(201).json(savedPatient);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add patient' });
  }
};

// Update patient details
const updatePatient = async (req, res) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedPatient);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update patient' });
  }
};

// Delete a patient
const deletePatient = async (req, res) => {
  try {
    const patientId = req.params.id;

    // Check if the provided ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(patientId)) {
      return res.status(400).json({ error: 'Invalid patient ID' });
    }

    // Attempt to find and delete the patient by ID
    const patient = await Patient.findByIdAndDelete(patientId);
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    res.status(200).json({ message: 'Patient deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete patient' });
  }
};

module.exports = { getPatients, getPatient, addPatient, updatePatient, deletePatient };
*/