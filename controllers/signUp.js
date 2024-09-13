
const UserDetails = require("../models/dataschema")
const bcrypt = require("bcryptjs")

const SignUp = async(req,res) => {

    try {

        const {name,email,password,role} = req.body 

        const ifExist = await UserDetails.findOne({email})
        if (ifExist) {
            return res.status(403).json(
                {
                    success:false,
                    data: "User already exist",
                    message: "Email already exists"
                }
            )
        }

        // agar user exixt nhi krta hai to password hash krdo do and the db mai entry krdo.
        let hashPassword
        try {

            hashPassword = await bcrypt.hash(password,10)
             
        } catch (err){
            res.status(500).json(
                {
                    success:false,
                    data:"Invalid Password",
                    message:err.message
                }
            )
        }

        const User = await UserDetails.create({
            name,email,password:hashPassword,role
        })

        return res.status(200).json(
            {
                success:true,
                data:User,
                message:"Entry successfull"
            }
        )


    } catch(err) {
        res.status(500).json(
            {
                success:false,
                data: "Entry Failed",
                message: err.message
            }
        )
    }

}

module.exports = SignUp;



