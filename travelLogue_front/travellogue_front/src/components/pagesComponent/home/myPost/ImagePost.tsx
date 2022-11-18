import React from "react";
import { Box, Button } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
export const PhotoUpload = ({name,photos,setPhotos}: {name:string, photos:File[], setPhotos:React.Dispatch<React.SetStateAction<File[]>>})=>{

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault()
        setPhotos(e.currentTarget.files);
    }
    return(
        <Button variant="contained" component="label" endIcon= {<AddPhotoAlternateIcon />}>
            Upload
            <input hidden accept="image/*" multiple type="file" onChange={e => changeHandler(e)}/>
        </Button>
    )
}

