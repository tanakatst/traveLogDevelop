
import Link from 'next/link';
// import NavbarLayout from '~/components/Navigation/NavbarLayout';
import style from '../src/styles/scss/moduleCss/index.module.scss'
import axios from 'axios';
import { NextPage } from 'next/types';
import IndexNav from '../src/components/Navigation/IndexNavbar';
import RegisterModal from '../src/components/pagesComponent/index/RegisterModal';
import Example from '../src/components/pagesComponent/index/example';
import { Box, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
const Home: NextPage = () => {



  return (
      <>
        <div className={style.main} style={{height:800}}>
            <IndexNav />
            <div style={{position:'absolute', width:'100%',textAlign:'center', margin:'0 ,auto'}}>
                <Container  sx={{ width:'100%',textAlign:'center', margin:'0 ,auto'}}>
                    <Box sx={{height:500, color:'#fff', width:'100%'}} >
                        <h1 style={{textAlign: 'center',paddingTop:60 , width:'100%'}}>TravelLogue</h1>
                        <Typography variant='h6'  sx={{textAlign: 'center', paddingBottom:4, zIndex:1,}}>
                            日本国内での旅行をより楽しいものにするために、旅ログを書いて、日本一周を残そう
                        </Typography>
                        <RegisterModal />
                    </Box>

                </Container>
            </div>
        </div>
            <Example />
      </>

  )
}

export default Home;
