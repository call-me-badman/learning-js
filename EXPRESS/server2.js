require("./mongobd1.js"); //to connect to the DB
const Student = require("./student.js");
const express = require("express");

const app = express();
const port = 4040;

app.use(express.json());

//create student
app.post("/students" , async (req, res) => {
try {
    const student = new Student(req.body);
    await student.save();

    res.status(201).json(student);
}
catch (error) {
    res.status(500).json ({error: error.message });
}
});

// read all students
app/get("/students" , async (req, res) => {
    try{
        const students = await Student.find();
        res.status(200).json(students);
    }
    catch (error){
        res.status(500).json({error: error.message});
    }
});