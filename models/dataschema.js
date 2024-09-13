const mongoose = require("mongoose")

const DataSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
        },
        password:{
            type:String,
            require:true,
        },
        role:{
            type:String,
            enum: ["Admin","Student","Visitors"]
        }
    }
)

module.exports = mongoose.model("UserDetails", DataSchema)
