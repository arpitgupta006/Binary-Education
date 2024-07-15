const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required:false
    },
    cLass:{
        type: String,
        required:false
    },
    school:{
        type: String,
        required:false
    },
    country:{
        type: String,
        required:false
    },
    state:{
        type: String,
        required:false
    },
    city:{
        type: String,
        required:false
    },
    pincode:{
        type: String,
        required:false
    },
});

mongoose.model("UserStudents" , userSchema)
