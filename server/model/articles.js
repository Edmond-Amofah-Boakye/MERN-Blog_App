const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    image:{
        type: String,
        required: true
       
    },
    content:{
        type: String,
        required: true
    },
    
    category:{
        type: String,
        required: true,
        trim: true

    },

    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }]
    
}, {timestamps: true})

module.exports = mongoose.model("Article", articleSchema)


