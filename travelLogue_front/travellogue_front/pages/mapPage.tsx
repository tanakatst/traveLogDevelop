import React from "react";
import NavbarLayout from "../src/components/Navigation/NavbarLayout";
import Map from '../src/components/pagesComponent/map/Map';
import { Box } from "@mui/system";
import Container from '@mui/material/Container';
const Mypage = ()=>{

    return(
        <>

                <NavbarLayout />
                <Container sx={{mt:15, ml: '8%', width: '90%'}} className='static'>
                    <Box margin='dense'>
                        <Map />
                    </Box>
                </Container>

        </>
    )
}
export default Mypage;
