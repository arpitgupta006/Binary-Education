const express = require('express') ;
require("dotenv").config();
const router = express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const BookModel = mongoose.model("Books");
const  JWT_SECRET  = process.env.JWT_SECRET

router.get("/allbooks", (req, res) => {
    BookModel.find()
        .populate("title", "_id title cLass image subject")
        .then((dbBooks) => {
            res.status(200).json({ books: dbBooks })
        })
        .catch((error) => {
            console.log(error);
        })
});


module.exports = router;