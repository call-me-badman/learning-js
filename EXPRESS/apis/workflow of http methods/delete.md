Purpose

Used to delete data from the server.

Example request:

DELETE /books/2

Server code:

app.delete("/books/:id", (req,res) => {

 books = books.filter(b => b.id !== Number(req.params.id));

 res.json({message : "Book deleted"});
});
What happens internally
Client
 ↓
DELETE /books/2
 ↓
Server finds resource
 ↓
Server removes it
 ↓
Server confirms deletion