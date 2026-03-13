const express = require ("express");
const mongoose = require ("mongoose");
const port = 2025;

 const app = express();
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/database1")

mongoose.connect("mongodb://127.0.0.1:27017/mydatabse")

.then(() => console.log("✅MongoDB connected"))
.catch(err => console.log(err));

app.listen (port , () => {

    // console.log(`Server running on port ${port}`);
});

mongoose.connect("mongodb://127.0.0.1:27017/database1")

module.exprorts = mongoose;

    console.log(`Server running on port ${port}`);

