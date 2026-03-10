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
app.get("/students" , async (req, res) => {
    try{
        const students = await Student.find();
        res.status(200).json(students);
    }
    catch (error){
        res.status(500).json({error: error.message});
    }
});

//read one student

app.get("/students/:id" , async(req, res) => {
    try{
        const student = await Student.findById(req.params.id);
        res.json(student);
    }
    catch(error) {
        res.status(500).json({error: error.message});
    }
});

app.put("/students/:id", async(req, res) => {
try{
    const updatedStudent = await Student.findByIdAndUpdate(
        req.params.id,
        req.body.body,
        {new : true}
    );
    res.json(updatedStudent);
}
catch (error) {
    res.status(500).json({error: error.message});
}
});
// DELETE STUDENT
app.delete("/students/:id", async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.send("Student deleted");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});