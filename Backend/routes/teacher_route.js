const express = require('express') ;
require("dotenv").config();
const router = express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const UserModel = mongoose.model("UserTeachers");
const  JWT_SECRET  = process.env.JWT_SECRET

router.post("/teachersignup" , (req , res) =>{
    const { fullName, email, password, phone,  school,country,state, city , pincode} = req.body;
    if (!fullName || !password || !email) {
        return res.status(400).json({ error: "One or more mandatory fields are empty" });
    }

    UserModel.findOne({ email: email })
        .then((userInDB) => {
            if (userInDB) {
                return res.status(500).json({ error: "User with this email already registered" });
            }
            bcryptjs.hash(password, 16)
                .then((hashedPassword) => {
                    const user = new UserModel({ fullName, email, password: hashedPassword,  phone, school,country,state, city , pincode });
                    user.save()
                        .then((newUser) => {
                            res.status(201).json({ result: "User Signed up Successfully!" });
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }).catch((err) => {
                    console.log(err);
                })
        })
        .catch((err) => {
            console.log(err);
        })
});

router.post("/teacherlogin", (req, res) => {
    const { email, password } = req.body;
    if (!password || !email) {
        return res.status(400).json({ error: "One or more mandatory fields are empty" });
    }
    UserModel.findOne({ email: email })
        .then((userInDB) => {
            if (!userInDB) {
                return res.status(401).json({ error: "Invalid Credentials" });
            }
            bcryptjs.compare(password, userInDB.password)
                .then((didMatch) => {
                    if (didMatch) {
                        const jwtToken = jwt.sign({ _id: userInDB._id }, JWT_SECRET);
                        const userInfo = { "_id": userInDB._id, "email": userInDB.email, "fullName": userInDB.fullName , 
                            "phone" : userInDB.phone , "country" : userInDB.country , "school" : userInDB.school ,
                            "state" : userInDB.state , "city" : userInDB.city };
                        res.status(200).json({ result: { token: jwtToken, user: userInfo } });
                    } else {
                        return res.status(401).json({ error: "Invalid Credentials" });
                    }
                }).catch((err) => {
                    console.log(err);
                })
        })
        .catch((err) => {
            console.log(err);
        })
});


module.exports = router;