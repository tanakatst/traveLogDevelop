import React from "react";
import { Box, Button } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
export const PhotoUpload = ({name,photos,setPhotos}: {name:string, photos:File[], setPhotos:React.Dispatch<React.SetStateAction<File[]>>})=>{




    return(
        <Box textAlign='center' pt={3}>
            <Button sx={{margin:'auto'}} variant="contained" endIcon={< AddPhotoAlternateIcon/>}>
                Upload
            </Button>
        </Box>
    )
}

