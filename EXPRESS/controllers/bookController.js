const Book = require ("../models/Book");

exports.createBook = async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.json(book);
};

exports.getBooks = async (req, res) => {
    const books = await Book.find();
    res.json(books);
};