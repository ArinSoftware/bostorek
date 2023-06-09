import jwt from 'jsonwebtoken';
import Book from '../models/Book.js';
import Comment from '../models/Comment.js';

const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (token) {
      jwt.verify(token, process.env.JWT_SECRET_KEY, (err) => {
        err ? res.redirect('/login') : next();
      });
    } else {
      res.redirect('/login');
    }
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

const isOwner = async (req, res, next) => {
  try {
    const bookId = req.params.bookId;
    const book = await Book.findById(bookId);
    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: 'book not found' });
    }
    if (book.user.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ success: false, message: 'Not authorized' });
    }
    req.book = book;
    next();
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: 'error at isOwner' });
  }
};

const isCommentator = async (req, res, next) => {
  try {
    const commentId = req.params.commentId;
    const comment = await Comment.findById(commentId);
    if (!comment) {
      return res
        .status(404)
        .json({ success: false, message: 'comment not found' });
    }

    if (comment.creator.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ success: false, message: 'Not authorized' });
    }
    req.comment = comment;
    next();
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: 'error at isCommentator' });
  }
};

export { isLoggedIn, isAdmin, isOwner, isCommentator };
