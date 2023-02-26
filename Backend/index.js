const express = require("express");
const { connect } = require("./config/db");
var jwt = require("jsonwebtoken");

const {userRouter} = require("./route/user.route")
const {mealdealRouter} = require("./route/mealdea.route")
const {articalRouter} = require("./route/artical.route")
const {kindRouter} = require("./route/kindmoment.route")
const {cartRouter} = require("./route/cart.route")

const cors = require("cors")

require('dotenv').config()

const app = express();
app.use(express.json());
app.use(cors())



app.get("/show",(req,res)=>{
  res.send("home page")
})

app.use("/users",userRouter)
app.use("/mealdeal",mealdealRouter)
app.use("/artical",articalRouter)
app.use("/kind" , kindRouter)
app.use("/cart",cartRouter)


app.listen(process.env.port, async () => {
  try {
    await connect;
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
  console.log(`${process.env.port} port is working`);
});
