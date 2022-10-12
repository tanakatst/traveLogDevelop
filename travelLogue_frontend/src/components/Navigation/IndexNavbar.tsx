import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { teal } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import LoginModal from '../uiComponents/LoginModal';
const IndexNav =()=> {
    // モーダルの挙動
    const color = teal[500]
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Travelogue
          </Typography>
          <LoginModal />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default IndexNav;
