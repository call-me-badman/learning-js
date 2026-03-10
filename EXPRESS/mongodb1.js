const mongoose = require ("mongoose");
mongoose.connect("mongodb://127.0.01:25000//school");

const db = mongoose.connect;

db.on("open" , () => {
    console.log("✅Mongodb successfully connected");
});

db.on("error" , (err) => {
    console.log("Database error:", err);
});