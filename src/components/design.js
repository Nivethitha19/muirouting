import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import FullWidthTabs from "./frontpage";



const Design = () =>{
    return(
        <>
            <Stack direction="row"justifyContent="center"  alignItems="center" sx={{height: 700}}>
                <FullWidthTabs />
                <Box bgcolor="#1565c0" sx={{width: 1200 ,height: 800}} >
                </Box>
                </Stack>


        </>
    )
}

export default Design;