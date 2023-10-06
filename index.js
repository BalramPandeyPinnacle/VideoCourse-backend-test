const express = require("express");
const cors = require("cors");
const mongoose=require("mongoose");
require('./config');
const Student=require('./models/student');
const Course=require('./models/course');
const app = express();
app.use(express.json());

app.use(cors());//to resolve cors error
app.get('/',(req,res,next)=>{
    res.send('it works')})

app.post('/signup', async(req,res)=>{
    let student = new Student(req.body);
    let result = await student.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
});

app.post("/login", async(req, res) =>{

    if (req.body.email && req.body.password){
      let student = await Student.findOne(req.body).select("-password");
      if(student){
        res.send(student);
      }
      else{
        res.send({ message:"No user Found on that Id"});
      }
    } else {
      res.send({ message: "No user Found on that Id" });
    }
  });

  app.post("/add-course",async(req,res)=>{
    let course = new Course(req.body);
    let result = await course.save();
    res.send(result);
    })

  app.get('/api/course', async (req, res) => {
      try {
        const courses = await Course.find();
        res.status(200).json(courses);
      } 
      catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
    });
app.listen(9000);
console.log("server is running on 9000");

