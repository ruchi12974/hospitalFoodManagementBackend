const Analytics = require('../models/Analytics');

// Get analytics data
const getAnalytics = async (req, res) => {
  try {
    const analytics = await Analytics.find().sort({ date: -1 });
    res.status(200).json(analytics);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch analytics', details: error.message });
  }
};

// Update or create analytics for a specific date
const updateAnalytics = async (req, res) => {
  try {
    const { date, morningMeals, eveningMeals, nightMeals } = req.body;

    // Calculate total meals delivered
    const totalMeals = (morningMeals || 0) + (eveningMeals || 0) + (nightMeals || 0);

    // Find the analytics for the specified date or create a new one
    const updatedAnalytics = await Analytics.findOneAndUpdate(
      { date: new Date(date).toISOString().split('T')[0] }, // Match by date only
      {
        $set: { 
          morningMeals: morningMeals || 0, 
          eveningMeals: eveningMeals || 0, 
          nightMeals: nightMeals || 0 
        },
        $inc: { totalMealsDelivered: totalMeals },
        updatedAt: Date.now(),
      },
      { new: true, upsert: true }
    );

    res.status(200).json(updatedAnalytics);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update analytics', details: error.message });
  }
};

module.exports = { getAnalytics, updateAnalytics };
