const express = require("express")
const router = express.Router()

const SignUp = require("../controllers/signUp")
const Login = require("../controllers/login")
const {authorizationCheck,IsStudent,IsAdmin} = require("../middlewares/auth")

router.post("/SignUp", SignUp)
router.post("/Login",Login)

router.get("/Student",authorizationCheck,IsStudent,(req,res)=>{
    res.status(200).json(
        {
            success:true,
            message:"Welcome to the Student route"
        }
    )
})

router.get("/Admin",authorizationCheck,IsAdmin,(req,res)=>{
    res.status(200).json(
        {
            success:true,
            message:"Welcome to the Admin route"
        }
    )
})

module.exports = router;


