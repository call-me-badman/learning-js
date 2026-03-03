const express = require("express");
const app = express();
const port = 3000;

app.use(express.json()); // middleware to read JSON body

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }

];

app.get("/" , (req, res) => {
  res.send("Welcome to the home page!");
})
// GET all users
app.get("/users", (req, res) => {
  res.json(users);
});

// GET single user
app.get("/users/:id", (req, res) => {
 const user = users.find(
  u => u.id === Number(req.params.id)//req.params.id == always a string
);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// POST new user
app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
app.put("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.name = req.body.name;
  res.json(user);
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  users = users.filter(u => u.id != req.params.id);
  res.json({ message: "User deleted" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});