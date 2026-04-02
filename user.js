const mongoose= require("mongoose");
const userSchema= new mongoose.Schema({ //defines structure of data
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required: true
    }
});
module.exports = mongoose.model("user", userSchema); //make user module with
//user schema data structure and module.exports means make this model available
//for other files also outside this file
