const getAllBooks = async (req, res) => {
  res.send('get all books');
};
const getABook = async (req, res) => {
  res.send('get a a book');
};
const createBook = async (req, res) => {
  res.send('create book');
};
const updateBook = async (req, res) => {
  res.send('update book');
};
const deleteBook = async (req, res) => {
  res.send('delete book');
};

export { getAllBooks, getABook, createBook, updateBook, updateBook };
