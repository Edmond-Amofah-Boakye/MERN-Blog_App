const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const path = require("path")

//requiring routes
const userRoute = require('./route/userRoute')
const categoryRoute = require('./route/categoryRoute')
const commentRoute = require('./route/commentsRoute')
const articleRoute = require('./route/articleRoute')
const loginRoute = require('./route/login')


//requiring express
app.use(express.json())

//serving static files
app.use("/images", express.static(path.join(__dirname, 'images')))

//using cors
app.use(cors())

//routes middleware
app.use(userRoute)
app.use(loginRoute)
app.use(articleRoute)
app.use(categoryRoute)
app.use(commentRoute)



mongoose.connect(process.env.MONGODB_URL, ((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log('database connected succesfully');
    }
   
}))

app.listen(process.env.PORT, (()=>{
    console.log("app has succesfully started on " + process.env.PORT);
}))