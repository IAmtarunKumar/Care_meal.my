
const express = require('express')
const {MealdealModel} = require("../model/mealdeal.model")
const jwt = require('jsonwebtoken')
const mealdealRouter = express.Router()



mealdealRouter.get("/a",(req,res)=>{
    res.send("ab")
})


mealdealRouter.get("/", async (req, res) => {
    const data = await MealdealModel.find();
    res.send(data);
  });
  
  mealdealRouter.post("/", async (req, res) => {
    const payload = req.body;
    try {

    
      const user = new MealdealModel(payload);
      await user.save();
      res.send({ msg: "Deal is posted","name" : payload.name });
      
    } catch (error) {
      console.log(error);
      res.send({ msg: "something went wrong mealdeal post" });
    }
  });


//search

mealdealRouter.post("/get",async(req,res)=>{
  const {shop,category,location} = req.body

try {
  const data = await MealdealModel.find({$or : [ {shop :shop} ,{category : category} ,{location : location} ]})
  res.send(data)
} catch (error) {
  console.log(error)
  res.send({"msg" : "something went wrong in get"})
}
 
})


mealdealRouter.get("/detail/:id",async(req,res)=>{
  const param_data = req.params.id
  const data = await MealdealModel.find({_id : param_data})
  res.send(data)
})

// item.title.toLowerCase().includes(output.toLowerCase())

  
//   userRouter.post("/login", async (req, res) => {
//     const { email,pass } = req.body;
  
//     var token = jwt.sign({ course: "backend" }, "masai",{expiresIn:"1h"});
//     console.log(token)
//     try {
//       const user = await UserModel.find({ email,pass });
//       console.log(user);
//       if (user.length > 0) {
//         res.send({ msg: "login successful", "token": token ,"name" : user[0].name });
//       } else {
//         res.send({ msg: "something went wrong" });
  
//       }
//     } catch (error) {
//       console.log(error);
//       res.send({ "msg": "something went wrong","error" : error.message});
  
//     }
//   });
  

//   userRouter.patch("/:id",async(req,res)=>{
//     const ID = req.params.id
//     console.log(ID)
//     const payload = req.body
//     try {
//       const data = await UserModel.findByIdAndUpdate({_id :ID },payload)
//       res.send({"msg": "User is updated"})
//     } catch (error) {
//       console.log(error)
//       res.send({"msg" : "something went wrong" , "error" : error.message})
//     }
//     })


//     userRouter.delete("/:id",async(req,res)=>{
//       const ID = req.params.id
//       console.log(ID)
//       const payload = req.body
//       try {
//         const data = await UserModel.findByIdAndDelete({_id :ID })
//         res.send({"msg": "User is deleted"})
//       } catch (error) {
//         console.log(error)
//         res.send({"msg" : "something went wrong" , "error" : error.message})
//       }
//       })





  module.exports = {
    mealdealRouter
  }