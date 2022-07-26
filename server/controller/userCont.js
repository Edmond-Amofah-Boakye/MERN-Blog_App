const UserModel = require('../model/user')
const bcrypt = require('bcryptjs')

exports.userSignup = async(req, res )=>{
    const { email } = req.body

    try {
        const user = await UserModel.findOne({email})

        if(user){
            return res.json({message: 'user alreday exist'})
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 12)

        const newUser = new UserModel({
            fullname: req.body.fullname,
            email,
            photo: "",
            password: hashedPassword,
            facebook: "",
            twitter: "",
            linkden: ""
        })

        await newUser.save()

        if(!newUser){
            return res.status(401).json({message: "signup unsuccesful"})
        }

        res.status(201).json({message: "succesfully signedup", newUser})
    } catch (error) {
        console.log(error);
    }

   
}

exports.getAllUser = async(req, res)=>{
    try {
        const user = await UserModel.find().select('-password')

        if(!user){
            return res.status(400).json({message: 'users do not exist'})
        }

        res.status(200).json({message: "users succesfully found", user})

    } catch (error) {
        
        res.status(400).json({message: 'could not get users'})
    }
}


exports.getSingleUser = async(req, res)=>{
    try {
        const user = await UserModel.findById(req.params.id).select("-password")

        if(!user){
            return res.status(400).json({message: 'users do not exist'})
        }

        res.status(200).json({message: "users succesfully found", user})

    } catch (error) {
        
        res.status(400).json({message: 'could not get users'})
    }
}


exports.updateUser = async(req, res)=>{
    try {
        const user = await UserModel.findById(req.params.id)

        if(!user){
            return res.status(400).json({message: 'user do not exist'})
        }

        user.fullname = req.body.fullname,
        user.photo = req.file.path
        user.email = req.body.email
        user.facebook = req.body.facebook
        user.twitter = req.body.twitter
        user.linkden = req.body.linkden
        
        await user.save()
        console.log(user);

        res.status(201).json({message: 'succefully updated user', user})

    } catch (error) {
        
        res.status(400).json({message: 'could not update users'})
    }
}

exports.deleteUser = async(req, res)=>{

    try {
        
        const user = await UserModel.findByIdAndDelete(req.params.id)

        if(!user){
            return res.status(400).json({message: 'user do not exist'})
        }

        res.status(200).json({message: 'successfully deletetd', user})

    } catch (error) {
        
        res.status(400).json({message: 'could not delete user'})
    }
}
