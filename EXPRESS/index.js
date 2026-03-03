const express = require("express");
const app = express();
const PORT = 1025;

app.get("/" , (req, res) => {
    res.send("Welcome to the world of express!");
});

 app.get("/about" , (req, res) => {
    res.send("This is the about page!");
 });

 app.get("/users" , (req, res) => {
    res.json([
        {id: 1, name : "Donnaruma"},
        {id: 2, name : "Nunes"},
        {id: 3, name : "Khusanov"},
        {id: 4, name : "Guehi"},
        {id: 5, name : "Ait Nouri"},
        {id: 6, name : "Rodri"},
        {id: 7, name : "B. Silva"},
        {id: 8, name : "O' Reilly"},
        {id: 9, name : "A. Semenyo"},
        {id: 10, name : "Marmoush"},
        {id: 11, name : "Haaland"},
    ]);
 });
 app.listen(PORT , () => {
    console.log(`Server running on http://localhost:${PORT}`);
 });