const express = require("express");
const app = express();
const port = 2020;
app.use((req, res, next) => {
    console.log("Middleware1, let's go!");
    next();
});
app.use((req, res , next)=> {
    console.log("Middleware2, in process!");
    next();
});

app.get("/", (req, res)=> {
    res.send("Let's go express, let's go!!");
});
app.listen(port , () =>{
console.log(`server runnning on http://localhost:${port}`);
});