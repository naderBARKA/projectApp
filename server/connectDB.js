const mongoose = require('mongoose')
 require('dotenv').config({path:'./.env'});
 MONGO_URL=process.env.MONGO_URL;
// MONGO_URL= "mongodb+srv://naderBarka:naderBARKA@nader.h3y0j.mongodb.net/contacts?retryWrites=true&w=majority"
const connectDB=()=>{
    mongoose.connect(MONGO_URL,(err)=>{
        if (err) throw err;
        else 
        console.log('database is connected');
    })
}
module.exports = connectDB