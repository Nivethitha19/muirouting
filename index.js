const dotenv = require("dotenv");
const mongoose =require('mongoose');
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors')
require("./db");
require("./model/userSchema")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//database connection


//middleware
app.use(express.json());
app.use(cors());

const User = mongoose.model("UserInfo")
app.post("/register" , async(req,res) =>{
    const {username,email,password} = req.body;

    const encryptedPassword = await bcrypt.hash(password,10)

    try {
        const oldUser = await User.findOne({email});
        if(oldUser){
            return res.json({error: "He is an old user"})
        }
        else{
            await User.create({
                username,
                email,
                password:encryptedPassword
            })
        }  
      
        res.send({status:"ok"})
        console.log("ok")
        
    } catch (error) {
        res.send({status:"already exists username or email"})
        console.log(error)
        
    }
})

app.post("/login", async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});

    if(!user){
        return res.json({message:"user not found"})
    }
    if(await bcrypt.compare(password,user.password)){
        const token = jwt.sign({},process.env.JWTPRIVATEKEY)

        if(res.status(201)){
          return  res.json({status:"ok",message:"User logged in"})
        }
        else{
           return res.json({message:"error occured while logging in" , data : token})
        }

    }
    res.json({message:"password incorrect"})
})


app.get("/userdata", async(req,res)=>{
    const {token} =  req.body;
    try {
        const user = jwt.verify(token,JWTPRIVATEKEY)
        const useremail = user.email;
        User.findOne({email:useremail}).then((data)=>{
            res.send({status:"ok" ,  data :data})
        }).catch((error) =>{
            res.send({status:"error" , data :data})
        })

    
    } catch (error) {
        
    }
}
)

const port = 8080;
app.listen(port , ()=>console.log(`Server started on port ${port}`))