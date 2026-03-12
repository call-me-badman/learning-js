const express = require("express");
const app = express();
const port = 2025;

const logMiddleware = (req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next ();
};
app.use(logMiddleware);
app.get("/" , (req, res) => {
    res.send("Home page");
});

app.get("/about" , (req, res) => {
    res.send("About page");
});

app.get("/login" , (req, res) => {
    res.send("Login page");
});

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});