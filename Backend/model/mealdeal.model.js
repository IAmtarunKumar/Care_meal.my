const mongoose = require("mongoose")


const mealdealSchema = mongoose.Schema({
    img : String,
    name :String,
    title : String,
    rating : String,
    shop : String,
    discount : String,
    expire : String,
    location : String,
    category : String

   
})


const MealdealModel = mongoose.model("mealdeal",mealdealSchema)

module.exports={
    MealdealModel
}