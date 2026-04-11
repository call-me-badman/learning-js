const express = require("express");
const app = express();
const port = 3030;

let users = [
    {id: 1, name: "Badman"},
     {id: 2, name: "Becker"},
      {id: 3, name: "Akilla"}
    ];
    app.get("/users", (req, res) => {
        res.status(200).json(users);
    });

    app.listen(port, () => {
        console.log(`server running on http://localhost:${port}`);
    });