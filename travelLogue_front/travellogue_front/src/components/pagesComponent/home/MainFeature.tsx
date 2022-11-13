import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import style from '../../../styles/scss/home.module.scss';
export default function MainFeature() {

  return (
    <Paper
    className={style.PaperImage}
    >
      {/* Increase the priority of the hero background image */}
      {/* {<img style={{ display: 'none' }}  src='https://images.pexels.com/photos/404960/pexels-photo-404960.jpeg'/> } */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              旅ログ
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              旅行でいった場所や、都道府県、思った事を記して、記録をしよう
            </Typography>
            <Link variant="subtitle1" href="#">
              見本
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
