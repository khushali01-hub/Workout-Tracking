require('dotenv').config();
const express = require('express');
const router=require("./routes/workouts")
const app = express();
const mongoose = require('mongoose');


app.use((req,res,next)=>{
    // console.log(req.path);
    // console.log(req.method);
    next();
})
app.use(express.json())

app.use('/api/workouts',router);
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("working on port ",process.env.PORT);
    })
})
.catch((error)=>{
    console.log(error);
})
