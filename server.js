const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/patients', require('./routes/patientRoutes'));
app.use('/api/diet-charts', require('./routes/dietChartRoutes'));
app.use('/api/pantry-staff', require('./routes/pantryStaffRoutes'));
app.use('/api/tasks', require('./routes/foodPreparationTaskRoutes'));
app.use('/api/analytics', require('./routes/analyticsRoutes'));
app.use('/api/deliveries', require('./routes/mealDeliveryRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
