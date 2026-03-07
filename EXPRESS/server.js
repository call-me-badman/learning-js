require("./mongodb.js")
const Book = require("./book.js");
const express = require("express");

const app = express();
const port = 3030;

app.use(express.json());
//create 
app.post("/books" , async (req , res) => {
    try{
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