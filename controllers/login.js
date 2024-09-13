
const jwt = require("jsonwebtoken")
const UserDetails = require("../models/dataschema")
const bcrypt = require('bcryptjs')
const { options } = require("../routes/signupRoutes")
// const jwt = require('jsonwebtoken');
require("dotenv").config()

const Login = async (req,res) => {
    try {

        const {email,password} = req.body

        if(!email || !password){

            return res.status(403).json(
                {
                    success:false,
                    data:"Please Enter your credential",
                    message:"please enter your Data Carefully"
                }
            )
        }

        let emailExist = await UserDetails.findOne({email})

        if (!emailExist) {
            return res.status(403).json(
                {
                    success:false,
                    data:"Not found",
                    message:"Data not found Please Signup First"
                }
            )
        }

        const hashPassword = emailExist.password
        const isExistPassword = await bcrypt.compare(password,hashPassword)

        if(!isExistPassword) {
            return res.status(403).json(
                {
                    success:false,
                    data:"Not found",
                    message:"Your Password is Incorrect"
                }
            )
        }

        // ek token generate krke user as a response bhejdo
        const payload = {
            email:emailExist.email,
            id:emailExist._id,
            role:emailExist.role
        }

        const token = jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn : "3h"
        })

        const options = {
            expiresIn : new Date( Date.now()+1*24*60*60*1000),
            httpOnly:true,
        }

        // When you use toObject(), you convert the Mongoose document into a plain JavaScript object. This makes it easier to:

        // Add new properties, like token.
        // Remove properties, like password, without worrying about the extra Mongoose features.

        emailExist = emailExist.toObject()
        emailExist.token = token
        emailExist.password = undefined

        return res.cookie("cookie",token,options).status(200).json({
            success:true,
            emailExist,
            token,
            message:"Logged in Successfully"
        })


    } catch(err) {
        res.status(500).json(
            {
                success:false,
                data:"internal db issue",
                message: err.message
            }
        )
    }
}

module.exports = Login;
