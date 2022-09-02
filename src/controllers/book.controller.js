const Author = require("../models/author.js");
const Book = require("../models/book.js");

// Get all books
getBooks = async (req, res) => {
    try {
        const book = await Book.findAll({
            include: [{
                model: Author, require: true
            }]
        });
        res.send(book);
    } catch (err) {
        console.log(err);
    }
}
// Get book by id
getBookById = async (req, res) => {
    try {
        const book = await Book.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(book[0]);
    } catch (err) {
        console.log(err);
    }
}
// Create a new book
createBook = async (req, res) => {
    try {
        await Book.create(req.body);
        res.json({
            "message": "Book created"
        });
    } catch (err) {
        console.log(err);
    }
}
// Update book by id
updateBook = async (req, res) => {
    try {
        await Book.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Book Updated"
        });
    } catch (err) {
        console.log(err);
    }
}
// Delete book by id
deleteBook = async (req, res) => {
    try {
        await Book.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Book Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}
module.exports = { getBooks, getBookById, createBook, updateBook, deleteBook };