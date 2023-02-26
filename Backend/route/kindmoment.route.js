const express = require("express");
const { KindModel } = require("../model/kindmoment.model");
const jwt = require("jsonwebtoken");
const kindRouter = express.Router();

kindRouter.get("/a", (req, res) => {
  res.send("ab");
});

kindRouter.get("/", async (req, res) => {
  const data = await KindModel.find();
  res.send(data);
});

//moment

kindRouter.get("/moment", async (req, res) => {
  const data = await KindModel.find({type : "moments"});
  res.send(data);
});

//deal

kindRouter.get("/review", async (req, res) => {
  const data = await KindModel.find({type : "Reviews"});
  res.send(data);
});

//search

kindRouter.post("/search",async(req,res)=>{
  const {shop,location} = req.body

try {
  const data = await KindModel.find({$or : [ {shop :shop}  ,{location : location} ]})
  res.send(data)
} catch (error) {
  console.log(error)
  res.send({"msg" : "something went wrong in get"})
}
 
})







kindRouter.post("/", async (req, res) => {
  const payload = req.body;
  try {
    const user = new KindModel(payload);
    await user.save();
    res.send({ msg: "Deal is posted", name: payload.name });
  } catch (error) {
    console.log(error);
    res.send({ msg: "something went wrong mealdeal post" });
  }
});

kindRouter.delete("/:id",async(req,res)=>{
const ID = req.params.id

try {
  const data = await KindModel.findByIdAndDelete({_id : ID}) 

res.send({"msg" : "Kind Moment is updated"})
} catch (error) {
  console.log(error)
  res.send({"msg" : "Something wrong in Kindmoment"})
}




})


kindRouter.patch("/:id",async(req,res)=>{
  const ID = req.params.id
  payload = req.body
  
  try {
    const data = await KindModel.findByIdAndUpdate({_id : ID},payload) 
  
    res.send({"msg" : "Kind Moment is updated"})
  } catch (error) {
    console.log(error)
    res.send({"msg" : "Something wrong in Kindmoment"})
    
  }

  
  
  })
module.exports = {
  kindRouter,
};
