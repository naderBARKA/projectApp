const mongoose = require('mongoose');
const Schema = mongoose.Schema
const userSchema = new Schema({
    Firstname:{required:true,type:String},
    Lastname:{required:true,type:String},
    age:{required : true , type: Number},
    sexe:{rewuired : true , type: String },
    email:{required:true,type:String},
    password:{required:true,type:String},
   
});
module.exports = mongoose.model("User",userSchema);