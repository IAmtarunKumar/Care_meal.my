const mongoose = require("mongoose")


const cartSchema = mongoose.Schema({
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


const CartModel = mongoose.model("cart",cartSchema)

module.exports={
    CartModel
}