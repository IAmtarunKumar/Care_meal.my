const mongoose=require("mongoose")
require('dotenv').config()
// const connect = mongoose.connect("mongodb+srv://tarun:tarun@cluster0.wlbm2vs.mongodb.net/nemauth?retryWrites=true&w=majority")

const connect = mongoose.connect(process.env.mongoURL)

module.exports={
    connect
}