import React, { useState, useEffect } from "react";

import { Link } from 'react-router-dom'
import { TextField, Typography, Button } from "@mui/material";
import { Stack } from "@mui/system";
import '@fontsource/roboto/300.css';

const Login = () => {

    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    const [validation, setValidation] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const checkValidation = () => {
        let errors = validation;

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

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
        const { email, password } = input;
        fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-type": "application/JSON"
            },
            body: JSON.stringify({
                email,
                password
            }),
        }).then((res) => res.json())
            .then((data) => {
                console.log(data, "user registered-login");

                if (data.status === "ok") {
                    window.localStorage.setItem("token", data.data);
                    window.location.href = "./dashhome";
                }
                if (data.message === "user not found") {
                    alert("user not found")
                }
                if (data.message === "password incorrect") {
                    alert("password incorrect")
                }
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <Stack justifyContent="center" alignItems="center" spacing={2}>
                <Typography variant="h4">
                    Welcome Back!
                </Typography>
                <Typography>
                    Please enter your details.
                </Typography>
                <TextField label="Enter Your email" type={'email'} variant="outlined" required

                    name="email"
                    value={input.email}
                    onChange={handleChange}
                    className="loginpage" />
                {validation.email && <p className="red">{validation.email}</p>}
                <TextField label="Password" type={'password'} variant="outlined" required
                    name="password"
                    value={input.password}
                    onChange={handleChange}

                    className="loginpage" />
                {validation.password && <p className="red">{validation.password}</p>}
                <Button variant="contained" type="submit" onClick={handleChange}>Login</Button>
                <Typography>
                    Don't have an account? <Link to="/signup"> Sign up</Link>
                </Typography>

            </Stack>
        </form>
    )


}
export default Login