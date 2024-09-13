
const express = require("express")
const dbConnect = require("./config/databaseConnection")
require("dotenv").config()
const router = require("./routes/signupRoutes")

const app = express()
const PORT = process.env.PORT || 3000

// middleware used for the parsing the json data.
app.use(express.json())

// mounted the routes
app.use("/api/V1",router)

// server run at respective port
app.listen(PORT,()=>{
    console.log(`server started at Port ${PORT}`)
})

// establish connection with database.
dbConnect()

// default route for just checking, how our server respond.
app.get("/",(req,res)=>{
    res.send("<h1>Hi Alka, I am Server</h1>")
})



