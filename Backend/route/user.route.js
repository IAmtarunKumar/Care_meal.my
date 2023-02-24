
const express = require('express')
const {UserModel} = require("../model/user.model")
const jwt = require('jsonwebtoken')
const userRouter = express.Router()



userRouter.get("/a",(req,res)=>{
    res.send("ab")
})


userRouter.get("/", async (req, res) => {
    const data = await UserModel.find();
    res.send(data);
  });
  
  userRouter.post("/register", async (req, res) => {
    const payload = req.body;
    try {

      const data  = await UserModel.find({email : payload.email})
      if(data.length>0){
        res.send({"msg" : "This Email id is  Already registered"})
      }else{


      const user = new UserModel(payload);
      await user.save();
      res.send({ msg: "singup successfull","name" : payload.name });
      }
    } catch (error) {
      console.log(error);
      res.send({ msg: "something went wrong" });
    }
  });
  
  userRouter.post("/login", async (req, res) => {
    const {email,password } = req.body;
  
    var token = jwt.sign({ course: "backend" }, "masai",{expiresIn:"1h"});
    console.log(token)
    try {
      const user = await UserModel.find({email,password });
      console.log(user);
      if (user.length > 0) {
        res.send({ msg: "login successful", "token": token ,"name" : user[0].name });
      } else {
        res.send({ msg: "something went wrong" });
  
      }
    } catch (error) {
      console.log(error);
      res.send({ "msg": "something went wrong","error" : error.message});
  
    }
  });
  

  userRouter.patch("/:id",async(req,res)=>{
    const ID = req.params.id
    console.log(ID)
    const payload = req.body
    try {
      const data = await UserModel.findByIdAndUpdate({_id :ID },payload)
      res.send({"msg": "User is updated"})
    } catch (error) {
      console.log(error)
      res.send({"msg" : "something went wrong" , "error" : error.message})
    }
    })


    userRouter.delete("/:id",async(req,res)=>{
      const ID = req.params.id
      console.log(ID)
      const payload = req.body
      try {
        const data = await UserModel.findByIdAndDelete({_id :ID })
        res.send({"msg": "User is deleted"})
      } catch (error) {
        console.log(error)
        res.send({"msg" : "something went wrong" , "error" : error.message})
      }
      })





  module.exports = {
    userRouter
  }