const mongoose = require("mongoose")


const articalSchema = mongoose.Schema({
    img : String,
    des :String,
    sub : String,
    title : String,
    date : String,
   
})


const ArticalModel=mongoose.model("artical",articalSchema)


module.exports={

    ArticalModel
}