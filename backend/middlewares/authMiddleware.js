import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const isLoggedIn = async (req, res, next) => {
  try {
    const isTokenAvailable =
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer ');

    if (!isTokenAvailable) {
      return res
        .status(401)
        .json({ success: false, message: 'Unauthorized: No available token' });
    }

    const token = req.headers.authorization.split(' ')[1];

    console.log('DECODED', jwt.verify(token, process.env.JWT_SECRET_KEY));

    req.user = await User.findById(
      jwt.verify(token, process.env.JWT_SECRET_KEY)._id
    );
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: 'Unauthorized: Invalid token' });
  }
};

// Middleware function to check if the authenticated user has an "admin" role
const isAdmin = (req, res, next) => {
  // Check if user is authenticated
  if (!req.user) {
    return res
      .status(401)
      .json({ success: false, message: 'Unauthorized: No available user' });
  }

  // Check if user has "admin" role
  const roles = req.user.roles || [];
  if (!roles.includes('admin')) {
    return res.status(403).json({ success: false, message: 'Forbidden' });
  }

  // User has "admin" role, so continue to the next middleware
  next();
};

export { isLoggedIn, isAdmin };
