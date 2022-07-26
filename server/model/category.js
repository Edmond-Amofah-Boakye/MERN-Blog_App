const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },

    image:{
        type: String,
    },

    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
    
}, {timestamps: true})


module.exports = mongoose.model("Category", categorySchema)