const express = require("express");
const app = express();
const port = 2020;

const logMiddleware = (req, res, next) => {
  console.log(`Visited ${req.url} at ${new Date().toISOString()}`);
  next(); // pass control to the next function
};

app.get("/" , (req, res) => {
  res.send("This is the home page!");
});
app.get("/about", logMiddleware, (req, res) => {
  res.send("This is the About page with logging!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});