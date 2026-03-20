
require("./mongodb.js")

require("./mongodb.js"); // connect to database

const Book = require("./book.js");
const express = require("express");

const app = express();
const port = 3030;

app.use(express.json());

//create 
app.post("/books" , async (req , res) => {
    try{
// CREATE
app.post("/books", async (req, res) => {
    try {

        const book = new Book(req.body);
        await book.save();

        res.status(201).json(book);

    }catch(error) {
        res.status(500).json({error : error.message});
    }
});
//read all
app.get("/books" , async (req , res) => {
    try{
    const books = await Book.find();
    res.json(books);
    } catch (error) {
        res.status(500).json ({ erro: error.message});
    }
});
//read one
app.get("/books/:id", async(req, res) => {
    const book = await Book.findById (req.params.id);
    res.json(book);
});
//update
app.put("/books/:id" , async (req, res) => {
    const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true }
        );
        res.json(updatedBook);

});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// READ ALL
app.get("/books", async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// READ ONE
app.get("/books/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// UPDATE
app.put("/books/:id", async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(updatedBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE
app.delete("/books/:id", async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.send("Book deleted");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port , () => {
    console.log(`server running on http://localhost:${port}`);
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

// flow
// HTTP Request
//      ↓
// Express Route
//      ↓
// Mongoose Model
//      ↓
// MongoDB Database
//      ↓
// JSON Response

