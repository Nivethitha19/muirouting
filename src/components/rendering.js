import React, { useEffect } from "react";
import MiniDrawer from "./navbar";


 

const Torender = () =>{

    useEffect(() =>{

        fetch("http://localhost:8080/userdata",{
            method:"POST",
            headers:{
                "Content-type" : "application/JSON"
            },
            body: JSON.stringify({
               token :  window.localStorage.getItem("token")
            }),
       }).then((res)=> res.json())
       .then((data)=> console.log(data,"user registered"))
      
       })
    return(
        <>
      <MiniDrawer />
        </>
    )
}

export default Torender;