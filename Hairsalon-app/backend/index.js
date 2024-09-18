const express = require('express');

const app = express();

const cors = require('cors');

const dotenv = require('dotenv').config();

const mongoose = require('mongoose');

//const userRouter = require('./routers/userRouter');

const DB = process.env.DB_URL;

const port = process.env.PORT || 3000;


//Connection to DB:
mongoose.connect(DB).then(() => {
    console.log('Connected to DB succesfully');
});

//Connection to port:
app.listen(port, () => {
    console.log(`Server running in port ${port}`);
});

//Allowing CORS for frontend requests:
app.use(cors(
    {
        origin:["https://naty-salon.vercel.app"],
        methods: ["POST", "GET", "OPTIONS"],
        credentials: true
    }
));


app.use(express.json());

//Paths to routers:

//app.use('/api/v1/users', userRouter);

module.exports = app;