const mongoose = require("mongoose")


const kindSchema = mongoose.Schema({
    img : String,
    name :String,
    title : String,
    shop : String,
    add : String,
    location : String,
    date : String,
    type : String,
   
})


const KindModel=mongoose.model("kind",kindSchema)


module.exports={

    KindModel
}