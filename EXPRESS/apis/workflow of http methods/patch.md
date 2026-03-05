PATCH updates only some fields.

Example:

PATCH /books/2

Body:

{
"title": "New Title"
}

Server:

book.title = req.body.title || book.title;

Only the title changes, the author stays the same.