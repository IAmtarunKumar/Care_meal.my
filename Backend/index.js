const express = require("express");
const { connect } = require("./config/db");
var jwt = require("jsonwebtoken");
const {userRouter} = require("./route/user.route")
const {mealdealRouter} = require("./route/mealdea.route")
const cors = require("cors")
// const { UserModel } = require("./model/user.model");
require('dotenv').config()

const app = express();
app.use(express.json());
app.use(cors())



app.get("/show",(req,res)=>{
  res.send("home page")
})

app.use("/users",userRouter)
app.use("/mealdeal",mealdealRouter)



app.get("/data", (req, res) => {
  const token = req.headers.authorization;
  console.log(token);

  jwt.verify(token, "masai", (err, decoded) => {
    if (decoded) {
      res.send("data..");
    } else {
      console.log(err);
      res.send({ msg: "Please login first" });
    }
  });
});

app.get("/cart", (req, res) => {
  const token = req.headers.authorization;
  console.log(token);

  jwt.verify(token, "masai", (err, decoded) => {
    if (decoded) {
      res.send("cart..");
    } else {
      console.log(err);
      res.send({ msg: "Please login first" });
    }
  });
});




app.get("/about", (req, res) => {
  res.send("about");
});


app.listen(process.env.port, async () => {
  try {
    await connect;
    console.log("db is connected");
  } catch (error) {
    console.log(error);
  }
  console.log(`${process.env.port} port is working`);
});
