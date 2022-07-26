const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userModel = require('../model/user')

exports.userLogin = async(req, res)=>{

    const { email, password} = req.body

    try {
        const user = await userModel.findOne({email})
        
        if(!user){

           return res.status(400).json({message: "user not found"})
        }
        if(user && (await bcrypt.compare(password, user.password))){

            const token = jwt.sign({id: user._id}, process.env.SECRET_CODE, {expiresIn: "1hr"})

            res.status(201).json({message: "succesfully signed in", token})
        }else{

            res.status(400).json({message: "invalid credentials"})
        }
    } catch (error) {
        console.log((error));
    }
}