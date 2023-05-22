const mongoose= require("mongoose")

const Contact= mongoose.Schema({
    email:String,
    phone:String,
    Comment:String
})

module.exports=mongoose.model("comments",Contact)