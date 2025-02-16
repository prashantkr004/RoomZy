const User = require("../models/Usermodel");

/**
 * Find a user by their email address.
 * 
 * @param {string} email - The email of the user to find.
 * @returns {Promise<Object|null>} - Returns the user object if found, otherwise null.
 */
const findByEmail = async (email) => {
  try {
    return await User.findOne({ email });
  } catch (error) {
    console.error("Error finding user by email:", error);
    throw new Error("Database query failed");
  }
};

/**
 * Find a user by their email and OTP.
 * 
 * @param {string} email - The email of the user.
 * @param {string} otp - The one-time password (OTP) to verify.
 * @returns {Promise<Object|null>} - Returns the user object if OTP is valid and not expired, otherwise null.
 */
const findByOTP = async (email, otp) => {
  try {
    return await User.findOne({ 
      email, 
      otp, 
      otpExpires: { $gt: Date.now() } // Ensures OTP is not expired
    });
  } catch (error) {
    console.error("Error finding user by OTP:", error);
    throw new Error("Database query failed");
  }
};

/**
 * Create a new user in the database.
 * 
 * @param {Object} userData - The user data containing firstName, lastName, email, password, etc.
 * @returns {Promise<Object>} - Returns the newly created user object.
 */
const createUser = async (userData) => {
  try {
    const newUser = new User(userData);
    return await newUser.save();
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
};

/**
 * Update a user's details by their email.
 * 
 * @param {string} email - The email of the user to update.
 * @param {Object} updateData - The data to update in the user's record.
 * @returns {Promise<Object|null>} - Returns the updated user object if found, otherwise null.
 */
const updateUser = async (email, updateData) => {
  try {
    return await User.findOneAndUpdate(
      { email }, 
      updateData, 
      { new: true } // Returns the updated document
    );
  } catch (error) {
    console.error("Error updating user:", error);
    throw new Error("Failed to update user");
  }
};

module.exports = { findByEmail, findByOTP, createUser, updateUser };
