import React, {Dispatch,SetStateAction, FC} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useEffect } from 'react';

const  BottomNav: FC<{setBottomState:Dispatch<SetStateAction<number>>}>=({setBottomState})=> {

  return (
    <Box sx={{ width: 500, textAlign:'center' ,margin:'auto'}} bgcolor='#3a9bb3' display='block'>
      <BottomNavigation
        showLabels
        onChange={(event, newValue) => {
          setBottomState(newValue);
        }}
      >
        <BottomNavigationAction  value={0} label="自分の投稿" icon={<RestoreIcon />} />
        <BottomNavigationAction  value={1} label="みんなの投稿" icon={<FavoriteIcon />} />
        <BottomNavigationAction  value={2} label="dfafsa" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}
export default BottomNav;
