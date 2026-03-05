Purpose

Used to send new data to the server.

Example request:

POST /books

Body sent from client:

{
"title": "NodeJS Guide",
"author": "Olga"
}

Server code:

app.post("/books", (req, res) => {

  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };

  books.push(newBook);

  res.status(201).json(newBook);
});
What happens internally
Client
  ↓
POST /books
  ↓
Server receives data in req.body
  ↓
Server creates new object
  ↓
Server stores it
  ↓
Server returns created resource