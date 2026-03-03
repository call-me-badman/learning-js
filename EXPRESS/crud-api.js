const express = require("express")
const app = express()
const port = 8000

app.use(express.json())

let users = ["John Doe" , "kalabao" , "Jade" , "Maxwell" , "Mark"]

// CREATE
app.post("/users", (req, res) => {
    users.push(req.body)
    res.send("User created")
})

// READ
app.get("/users", (req, res) => {
    res.json(users)
})

// UPDATE
app.put("/users/:id", (req, res) => {
    users[req.params.id] = req.body
    res.send("User updated")
})

// DELETE
app.delete("/users/:id", (req, res) => {
    users.splice(req.params.id, 1)
    res.send("User deleted")
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
