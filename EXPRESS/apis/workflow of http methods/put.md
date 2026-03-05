Purpose

Used to modify existing data.

Example request:

PUT /books/2

Body:

{
"title": "Advanced Python",
"author": "Kellen"
}

Server code:

app.put("/books/:id", (req, res) => {

 const book = books.find(b => b.id === Number(req.params.id));

 book.title = req.body.title;
 book.author = req.body.author;

 res.json(book);
});
What happens internally
Client
 ↓
PUT /books/2
 ↓
Server extracts id from URL
 ↓
Server finds book in database/array
 ↓
Server replaces data
 ↓
Server sends updated book