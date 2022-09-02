// Import express
const express = require('express');
// Import Book Controller
const { getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook } = require('./../controllers/book.controller.js');
// Init express router
const router = express.Router();
// Route get all books
router.get('/book', getBooks);
// Route get book by id
router.get('/book/:id', getBookById);
// Route create a new book
router.post('/book', createBook);
// Route update book by id
router.put('/book/:id', updateBook);
// Route delete book by id
router.delete('/book/:id', deleteBook);
// export router
module.exports = router;