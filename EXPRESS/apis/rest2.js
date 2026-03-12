const express = require("express");
const app = express();
const port = 2030;

app.use(express.json());

let books = [
    {id: 1, title: "Clean code" , author: "John Doe"},
    {id: 2, title: "Learn Python" , author: "Kellen"},
    {id: 3, title: "Learn Taiwind CSS" , author: "Bro code"},
    {id: 4, title: "Machine Learning" , author: "Mosh"},
    {id: 5, title: "Learn ReactJS" , author: "Achille"}

];

app.get("/" , (req, res) => {
    res.send("Home page");
});
//to get all books
app.get("/books" , (req, res) => {
    res.json(books);
});
//to get a single book

app.get("/books/:id", (req, res) => {
    const book = books.find(b => b.id === Number(req.params.id));

    if (!book){
        return res.status(404).json({message: "Book not found"});
    }
    res.json(book);
});

// POST create new book
app.post("/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };

  books.push(newBook);

  res.status(201).json(newBook);
});

//to update a book
app.put("books/:id" , (req, res) => {
    const book = books.find(b => b.id === Number(req.params.id));

    if (!book) {
        return res.status(404).json({message: "Book not found"});
    };

    book.title = req.body.title || book.title;
    book.author = req.body.aithor || book.author;

    res.json(book);
});

//to delete a book
app.delete("books/:id" , (req,res) => {
    const book = books.find(b => b.id === Number(req.params.id));

    if(!book) {
        return res.status(404).json({message: "Book not found"});
    };
     books = books.filter(b => b.id !== Number(req.params.id));

     res.json({message : "Book deleted successfully"});
});

app.listen(port , () => {
    console.log(`Server running on http://localhost:${port}`);
});