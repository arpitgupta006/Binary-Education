const express = require('express');
const PORT = 4000;
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

mongoose.connect("mongodb://127.0.0.1:27017/BinaryEducation");

mongoose.connection.on('connected', () => {
    console.log("DB connected");
})
mongoose.connection.on('error', (error) => {
    console.log("Some error while connecting to DB");
})

require('./models/user_teacher');

app.use(cors());
app.use(express.json());

app.use(require('./routes/teacher_route'));

app.listen(PORT, () => {
    console.log("Server started");
});