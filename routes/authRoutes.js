// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const { register, login, getProfile, updateUser, deleteUser, forgotPassword, resetPassword, changePassword, logout  } = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

// Authentication Routes
router.post("/register", register); // Admin only
router.post("/login", login);
router.get("/profile", authMiddleware, getProfile);
router.put("/update/:id", authMiddleware, updateUser); // Admin only
router.delete("/delete/:id", authMiddleware, deleteUser); // Admin only
// Forgot Password
router.post('/forgot-password', forgotPassword);
// Reset Password
router.post('/reset-password/:token', resetPassword);
// Change Password
router.post('/change-password', changePassword);
// Logout
router.post('/logout', logout);

module.exports = router;



