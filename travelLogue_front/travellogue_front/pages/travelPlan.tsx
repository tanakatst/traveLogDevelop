import { Container, Box, Card, Typography, Grid } from '@mui/material';
import React from 'react';
import NavbarLayout from '../src/components/Navigation/NavbarLayout';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PeoplePlan from '../src/components/pagesComponent/travel_plan/peoplePlan';
import Link from 'next/link';

const travelPlan = () => {
    return (
        <div>
            <NavbarLayout />
            <Container maxWidth='lg' sx={{mt:10, ml: '8%', width: '100%'}} className='static'>
                <Box height={300} width='100%' bgcolor='primary.main' margin='auto' marginTop={6}>
                    <Card sx={{width:'100%' , height:'100%', textAlign:'center', paddingTop:'80px'}}>
                        <Typography variant='h5'  textAlign='center' >
                            旅行の計画を簡単に立てて共有しよう
                        </Typography>
                        <Link href='/makePlan'>
                            <Button sx={{backgroundColor:'#3a9bb3', color:'#fff', marginTop:'20px'}}>旅行の計画をする</Button>
                        </Link>
                    </Card>
                </Box>
                <Box height={800} width='100%' bgcolor='primary.main' margin='auto' marginTop={6}>
                    <Card sx={{width:'100%' , height:'100%', textAlign:'center', paddingTop:'80px'}}>
                        <Typography variant='h5'  textAlign='center' >
                            みんなの旅行プラン
                        </Typography>
                        <PeoplePlan />
                    </Card>
                </Box>
            </Container>
        </div>
    )
}

export default travelPlan;
