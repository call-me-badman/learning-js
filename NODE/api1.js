const express = require("express");
const app = express();
const port = 3030;

//using params
app.get("/search/:keyword", (req, res) => {//search/eyochat
    const keyword = req.params.keyword;
    res.send("You have searched for: "+ keyword );
});

//using query
app.get("/greet", (req, res) => {
    const name = req.query.q;//http://localhost:3000/greet?q=badman
    res.send("Hello "+ name);
});

app.get("/", (req, res) => {
    res.send("the home page");
});

app.post("/user", (req, res) => {
    res.send("User created: " +name);
});

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});