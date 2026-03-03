const express= require("express");
const app = express();
const port = 1029;

app.use((req, res, next) => {
    console.log("Middleware1: Let's go");
    next();
});

app.use((req, res, next) =>{
    console.log("Middleware2: In process");
    next();
})
app.use((req, res, next) => {
    req.time = new Date().toLocaleTimeString();
    next();
});

app.get("/time" , (req, res) => {
    res.send(`Request received at ${req.time}`);
});
app.get("/" , (req, res) => {
    res.send("Here we goooo Express!!");
});
app.get("/location", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  res.json({
    message: "Location based on IP",
    ip: ip
  });
});
app.listen(port , ()=>{
    console.log(`server running on http://localhost:${port}`);
});