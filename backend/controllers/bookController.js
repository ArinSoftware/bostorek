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
    const books = await Book.find({ user: userId }).populate('user');
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
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    if (!book) {
      return res
        .status(404)
        .json({ success: false, message: 'book not found' });
    }
    return res.json({
      success: true,
      message: 'book info received successfully',
      book,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'error at get a book',
      error,
    });
  }
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
  try {
    const { title, author, description, pageNumber } = req.body;
    const book = req.book;

    book.title = title || book.title;
    book.author = author || book.author;
    book.description = description || book.description;
    book.pageNumber = pageNumber || book.pageNumber;
    await book.save();
    return res.json({
      success: true,
      message: 'Book updated successfully',
      book,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: 'error at book update', error });
  }
};

/**
 * @desc    Delete a book
 * @route   DELETE /api/v1/books/:id
 * @access  Private
 **/
const deleteBook = async (req, res) => {
  try {
    const book = req.book;
    await Book.findByIdAndRemove(book._id);
    return res.json({ success: true, message: 'Book deleted successfully' });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: 'error at book delete', error });
  }
};

export {
  getAllBooks,
  getABook,
  createBook,
  updateBook,
  deleteBook,
  getAllBooksByUser,
};
