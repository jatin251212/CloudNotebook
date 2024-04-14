const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://jatinkantariya789:gSiYjG8MUFw8vZkP@cluster0.fap5yqx.mongodb.net/";
const connectToMongo=()=>{
    mongoose.connect(mongoURI)
    console.log("connected to mongo successfully");

    
}
module.exports= connectToMongo;
