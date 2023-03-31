import User from '../models/User.js';

/**
 * @desc    Register user
 * @route   GET /api/v1/auth/register
 * @access  Public
 **/
const register = async (req, res) => {
  try {
    // Create a new user and save it to the database
    const user = await User.create({ ...req.body });

    res
      .status(201)
      .json({ success: true, message: 'User registered successfully', user });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Error at user registration', error });
  }
};

export { register };
