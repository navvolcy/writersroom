import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";

/**
 * Generate JWT
 */
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn:'7d',
    });
};

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 */

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // 1. Validate input
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2. Check if user already exists
    const userExists = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // 3. Create user (password hashed in model)
    const user = await User.create({
      username,
      email,
      password,
    });

    // 4. Respond with token
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error("REGISTER ERROR:", error); // ← you will now see real errors in Render logs
    res.status(500).json({ message: error.message });
  }
};

/**
 * @route   POST /api/auth/login
 * @desc    Authenticate user
 */

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};
