// for establishing connection between application and database,
// firstly we have to install mongoose and then import in the required file.
// mongoose is a tool which allows nodejs to establish connection with mongo db database.

const mongoose = require("mongoose")
require("dotenv").config()

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {console.log("DB connected Successfully")})
    .catch((err)=>{
        console.log(err)
        console.log("Facing Connection Issues")
        process.exit(1)
    })
}

module.exports = dbConnect;