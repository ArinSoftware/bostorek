/**
 * @desc    Get all books
 * @route   GET /api/v1/books/
 * @access  Public
 **/
const getAllBooks = async (req, res) => {
  res.send('get all books');
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
  res.send('create book');
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

export { getAllBooks, getABook, createBook, updateBook, deleteBook };
