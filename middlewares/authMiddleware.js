// middlewares/authMiddleware.js
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
const blacklistedTokens = []; // Same storage used in logout

module.exports = (req, res, next) => {
  try {
    // Get Authorization header
    const authHeader = req.header("Authorization");

    // Check if header is missing
    if (!authHeader) {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    // Ensure the token has the Bearer prefix
    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Invalid Authorization format. Expected 'Bearer <token>'" });
    }

    // Extract token and verify
    const token = authHeader.replace("Bearer ", "");
    if (blacklistedTokens.includes(token)) {
      return res.status(401).json({ message: 'Token is invalid. Please log in again.' });
    }
  
    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded; // Add decoded user info to request
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
};