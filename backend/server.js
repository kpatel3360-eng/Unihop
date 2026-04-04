const express = require("express"); //import express in this file 
const mongoose= require("mongoose"); //import mongodb in this file 
require("dotenv").config(); //import env file package
const app = express(); //create app for backend server 

const User = require("./models/user"); //importing user model here

// middleware
app.use(express.json()); //allows backend   for reading data from user requests coming
// from frontend 

mongoose.connect(process.env.MONGO_URI) //connection function for connecting mongo_uri connection string 
  .then(() => console.log("MongoDB Connected ✅")) //runs if connection is successful
  .catch(err => console.log(err)); //prints error if not connected


// test route
app.get("/", (req, res) => {    //"/" means homepage when user is at homepage
  res.send("Backend is running 🚀"); //it will show backend is running
});//so for carpool we will modify routes in that place 

//register user
app.post("/api/auth/register" , async(req,res) => { //async used for operations that take time
try{
    const {name, email, password} = req.body; //destructure body dat into name,email,password
    const newUser= new user({
        name,                  //creates object newUSer for user data 
        email,
        password
    });
    await newuser.save(); //wait till data is saved in db
res.status(201).json({
message:"User Created Successfully"
});
}
catch(error){
res.status(500).json({
error: error.message
});
}
});


// server start
app.listen(5000, () => {
  console.log("Server running on port 5000"); //makes this server running on 5000 port
});