const express = require("express");
const app = express();
const port = 2030;
const router = express.Router();

app.use((req, res, next) =>{
    console.log("Middleware1, executed successfully!");
    next();
});
app.use((req, res, next) =>{
    console.log("Middleware2, process executed");
    next();
});
router.use((req , res , next) => {
console.log("Router middleware");
next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));

app.get("/home" , (req , res) =>{
    res.send("This our home page!!");
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});