
const jwt = require("jsonwebtoken")
require("dotenv").config()

const authorizationCheck = (req,res,next) => {

    try {

        const token = req.body.token

        if(!token) {
            return res.status(403).json({
                success:false,
                message:"Token Missing"
            })
        }

        try {

            const isVerify = jwt.verify(token,process.env.JWT_SECRET)

            req.user = isVerify

        } catch(err) {
            res.status(400).json(
                {
                    success:false,
                    message:"increased by respective time"
                }
            )
        }
        next ()

    } catch(err) {
        res.status(400).json({
            success:false,
            message:"Some error Ocurred"
        })
    }
}

const IsStudent = (req,res,next) => {
    
    try {

        if (req.user.role != "Student"){
            return res.status(403).json(
                {
                    success:false,
                    message:"This is protected route for students"
                }
            )
        }

        next()

    } catch(err) {
        res.status(400).json(
            {
                success:false,
                message:"Something went wrong"
            }
        )
    }

};

const IsAdmin = (req,res,next) => {
    
    try {

        if (req.user.role != "Admin"){
            return res.status(403).json(
                {
                    success:false,
                    message:"This is protected route for Admin"
                }
            )
        }
        
        next()

    } catch(err) {
        res.status(400).json(
            {
                success:false,
                message:"Something went wrong"
            }
        )
    }

}

module.exports = {authorizationCheck,IsStudent,IsAdmin};