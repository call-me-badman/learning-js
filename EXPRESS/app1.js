 const express = require("express");
 const app = express();
 const port = 2020;

 app.get("/" , (req, res) => {
    res.send("This is my chanele!");
 });

 app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
 });