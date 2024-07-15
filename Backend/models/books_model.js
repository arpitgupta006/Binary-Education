const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    image:{
        type: String,
        required:true
    },
    cLass:{
        type: String,
        required:true
    },
    subject:{
        type: String,
        required:true
    },
    author:{
        type:String,
        required:true
    }
});

mongoose.model("Books" , bookSchema)
