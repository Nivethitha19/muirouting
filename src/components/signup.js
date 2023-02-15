import React from "react";
import { TextField, Typography,Button } from "@mui/material";
import { Stack } from "@mui/system";
import { useState,useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom';


const Signup = () => {
    

    const navigate = useNavigate();
    const [input, setInput] = useState({
        username:"",
        email:"",
        password:""
    })
    const [validation, setValidation] = useState({
        username:"",
        email:"",
        password:""
    })
    const handleChange = (e) =>{
        setInput({...input, [e.target.name] : e.target.value})
    }

    const checkValidation = () =>{

      let errors = validation;
        if(!input.username.trim()){
            errors.username = "Username is required"
        }
        else{
            errors.username = ""
        }
        // email validation
        const emailCond =
            "^[a-zA-Z0-9+_.-]+@[a-zA-Z.-]+$";
        if (!input.email.trim()) {
            errors.email = "Email is required";
        } else if (!input.email.match(emailCond)) {
            errors.email = "Please enter a valid email address";
        } else {
            errors.email = "";
        }


        const password = input.password;
        if (!password.trim()) {
            errors.password = "Enter a valid password";
        } else {
            errors.password = "";
        }
        setValidation(errors);
    }

    useEffect(() => {
        checkValidation();
    }, [input]);


    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(input)
        const {username,email,password}  = input;
        fetch("http://localhost:8080/register",{
            method:"POST",
            headers:{
                "Content-type" : "application/JSON"
            },
            body: JSON.stringify({
                username,
                email,
                password
            }),
       }).then((res)=> res.json())
       .then((data)=> {console.log(data,"user registered")
    if(data.error === "He is an old user"){
        alert("Email already exists")
    }
else{
    alert("User Registered Succesfully")
    window.location.href = "./";
    
}})
        
    }

    return (
       
            <form onSubmit={handleSubmit}>
            <Stack justifyContent="center"  alignItems="center" spacing = {2}>
           
            <Typography variant="h4">
                Create an account
            </Typography>
            <TextField  label="Enter Your name" variant="outlined" required className="loginpage" 
            name="username" 
            value={input.username}
            onChange={handleChange}
            />
            {validation.username && <p className="red">{validation.username}</p>}
            <TextField  label="Email" type={'email'} variant="outlined" required className="loginpage" 
             name="email" 
             value={input.email}
             onChange={handleChange}
            />
            {validation.email && <p className="red">{validation.email}</p>}
            <TextField  label="Password" type={'password'} variant="outlined" required className="loginpage"
             name="password" 
             value={input.password}
             onChange={handleChange}
              />
             {validation.password && <p className="red">{validation.password}</p>}
            <Button variant="contained" type="submit">Create account</Button>
            <Typography>
                Have an account? <Link to = "/login">Login</Link>
            </Typography>
            </Stack>
            </form>
        
    )


}
export default Signup