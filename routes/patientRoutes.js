const express = require('express');
const router = express.Router();
const { getPatients, getPatient, addPatient, updatePatient, deletePatient } = require('../controllers/patientController');

// Define routes for patients
router.get('/', getPatients); // List all patients
router.get('/:id', getPatient); // Get a specific patient by ID
router.post('/', addPatient); // Add a new patient
router.put('/:id', updatePatient); // Update an existing patient
router.delete('/:id', deletePatient); // Delete a patient by ID

module.exports = router;
