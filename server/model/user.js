const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true
    },

    photo:{
        type: String,
    },

    password:{
        type: String,
        required: true
    },

    facebook:{
        type: String,
    },

    twitter:{
        type: String,
    },

    linkden:{
        type: String,
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)