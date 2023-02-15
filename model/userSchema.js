const mongoose = require('mongoose');

const Userdetails = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
},
{
    collection:"UserInfo"
})


mongoose.model("UserInfo" , Userdetails );

