const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    name : String,
    email :String,
    password : String,
    dob : String,
    country : String,
    state : String

   
})


const UserModel = mongoose.model("user",userSchema)

module.exports={
    UserModel
}