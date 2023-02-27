
const express = require('express')
const {CartModel} = require("../model/cart.model")
const jwt = require('jsonwebtoken')
const cartRouter = express.Router()



cartRouter.get("/a",(req,res)=>{
    res.send("ab")
})

// cartRouter.get("/cart/:id",async(req,res)=>{
//   const ID = req.params.id
//   const data = await CartModel.find({_id : ID})
//   res.send(data)
// })





cartRouter.get("/", async (req, res) => {
    const data = await CartModel.find();
    res.send(data);
  });

  //search by id

  cartRouter.get("/search:id", async (req, res) => {
const ID =req.params.id
try {
  const data = await CartModel.find({_id : ID});
  res.send(data);
} catch (error) {
  console.log(error)
  res.send({"msg" : "Something went wrong"})
}
   
  });
  
  cartRouter.post("/", async (req, res) => {
    const payload = req.body;
    try {

    
      const user = new CartModel(payload);
      await user.save();
      res.send({ msg: "Deal is posted","name" : payload.name });
      
    } catch (error) {
      console.log(error);
      res.send({ msg: "something went wrong" });
    }
  });





  module.exports = {
    cartRouter
  }