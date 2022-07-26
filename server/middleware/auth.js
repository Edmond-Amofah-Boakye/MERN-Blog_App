const jwt = require('jsonwebtoken')
const userModel = require('../model/user')

const auth = async(req, res, next)=>{

    const authHeader = req.headers['authorization']

    if(!authHeader){
        return res.status(401).json({message: "not verified"})
    }

    try {
        const token = authHeader.split(" ")[1]

        const decode = jwt.verify(token, process.env.SECRET_CODE)
    
        req.user = await userModel.findById(decode.id).select('-password')

        next()
        
    } catch (error) {
        
        return res.status(401).json({message: "verification not succesful"})
    }
    
}

module.exports = auth