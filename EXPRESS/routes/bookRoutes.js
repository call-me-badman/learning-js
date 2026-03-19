const express = require("express");
const router = express.router();
const bookController = require("../controllers/bookController");

router.post("/books" , bookController.createBook);
router.get("/books" , bookController.getBooks);

module.exports = router;