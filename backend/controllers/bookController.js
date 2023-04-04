import Book from '../models/Book.js';

/**
 * @desc    Get all books
 * @route   GET /api/v1/books/
 * @access  Public
 **/
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().populate('user', 'name email');
    res
      .status(200)
      .json({ success: true, message: 'get all books successfully', books });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'error at get all books', error });
  }
};

/**
 * @desc    Get all books by user
 * @route   GET /api/v1/books/
 * @access  Private
 **/

const getAllBooksByUser = async (req, res) => {
  try {
    const userId = req.user._id;
    console.log('userId', userId);
    const books = await Book.find({ user: userId }).populate('user');
    console.log('books', books);
    res.status(200).json({
      success: true,
      message: 'get all books by user successfully',
      books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'error at get all books by user',
      error,
    });
  }
};

/**
 * @desc    Get a book
 * @route   GET /api/v1/books/:id
 * @access  Public
 **/
const getABook = async (req, res) => {
  res.send('get a a book');
};

/**
 * @desc    Create a book
 * @route   POST /api/v1/books/
 * @access  Private
 **/
const createBook = async (req, res) => {
  try {
    //add user id to req.body
    req.body.user = req.user._id;

    const book = await Book.create({ ...req.body });

    res.status(201).json({
      success: true,
      message: 'Book registered successfully',
      book,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Error at create book', error });
  }
};

/**
 * @desc    Update a book
 * @route   PUT /api/v1/books/:id
 * @access  Private
 **/
const updateBook = async (req, res) => {
  res.send('update book');
};

/**
 * @desc    Delete a book
 * @route   DELETE /api/v1/books/:id
 * @access  Private
 **/
const deleteBook = async (req, res) => {
  res.send('delete book');
};

export {
  getAllBooks,
  getABook,
  createBook,
  updateBook,
  deleteBook,
  getAllBooksByUser,
};
