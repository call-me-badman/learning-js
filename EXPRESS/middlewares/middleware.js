//APPLICATION LEVEL MIDDLEWARE
//Request  ➜  Middleware  ➜  Route  ➜  Response
//for middlewares, == app.use
const express = require("express");
const app = express();//You call the express function
// It returns an application object
const PORT = 1026;

app.use((req, res, next) => {
  //next param: tells express == continue
  console.log("Middleware executed");
  //Prints a message every time a request comes in
  next(); // VERY IMPORTANT, tells our server, go to the next
  //route, or simply; proceed
});
app.use("/about" , (req  ,res , next) => {
  console.log("About middleware route executed ... ");
  next();
});

app.get("/", (req, res) => {
  res.send("Home page");
});
app.listen(PORT , () => {
    console.log(`Server running on http://localhost:${PORT}`);
});