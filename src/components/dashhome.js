import React from "react";
import { Stack } from "@mui/system";
import ImgMediaCard from "./dashboard";
import MiniDrawer from "./navbar";
import { Box } from "@mui/system";
const Dashhome = () =>{
    return(
        <>
        <MiniDrawer/>
        <Box className="Content">

        
        <Stack  className='dashboard' direction='row' spacing={2} >
        <ImgMediaCard marginRight={4} />
        <ImgMediaCard />
        <ImgMediaCard />
        
        </Stack>          
        <Stack  className='dashboard'  direction='row'>
        <ImgMediaCard />
        <ImgMediaCard />
        <ImgMediaCard />
        
        </Stack>  
        </Box>
        </>
    )
}

export default Dashhome;