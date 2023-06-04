import User from '../models/User.js';

/**
 * @desc    Register user
 * @route   POST /api/v1/auth/register
 * @access  Public
 **/
const register = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: 'Email already exists' });
    }

    // Create a new user and save it to the database
    const user = await User.create({ ...req.body });

    // Create token
    const token = user.generateAuthToken();

    res
      .status(201)
      .cookie('jwt', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24,
      })
      .json({
        success: true,
        message: 'User registered successfully',
        user,
        token,
      });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Error at user registration', error });
  }
};

/**
 * @desc    Login user
 * @route   POST /api/v1/auth/login
 * @access  Public
 **/
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: 'User not found!' });
    }

    // Check if password is correct
    const isValidPassword = await user.isValidPassword(password);
    if (!isValidPassword) {
      return res
        .status(401)
        .json({ success: false, message: 'Invalid credentials!' });
    }

    // Generate a JWT token for the user
    const token = user.generateAuthToken();

    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    });

    res.status(200).json({ success: true, user });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Error at user login', error });
  }
};

/**
 * @desc    Logout user / clear cookie
 * @route   GET /api/v1/auth/login
 * @access  Private
 **/
const logout = async (req, res) => {
  console.log('LOGOUT');
  try {
    // Invalidate the user's JWT token
    res
      .status(200)
      .cookie('token', '', {
        httpOnly: true,
        expires: new Date(0),
      })

      .json({ success: true, message: 'User successfully logged out.' });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Error at user logout', error });
  }
};

export { register, login, logout };
