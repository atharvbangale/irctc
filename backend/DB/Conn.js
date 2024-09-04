const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
// mongoose.set('strictQuery', true);
const MONGO_URL = "mongodb+srv://mangesh:QYTLPQdNOFoTwxuz@cluster0.6hhshhc.mongodb.net/IRCTC_NEW_DB?retryWrites=true&w=majority"
mongoose.connect(MONGO_URL).then(()=>{
    console.log("mongo connection successfully !");

}).catch((e)=>{
    console.log("Error in Conecction !"+e);
})