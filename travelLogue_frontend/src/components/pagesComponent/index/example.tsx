import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Example = ()=>{

  return (
    <>
        <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
            <h1>今日本で人気の観光スポット</h1>
            
        </Box>
      </Container>
    </>
  );
}
export default Example
