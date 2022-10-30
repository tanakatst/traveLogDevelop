import React,{useEffect, useState} from "react";
import {Container,Box, Typography,Paper, ListItem, ListItemAvatar, Avatar, ListItemText, Divider, List, Button, TextField, Input, ListItemButton } from "@mui/material";
import { Stack } from "@mui/system";
import NavbarLayout from "../src/components/Navigation/NavbarLayout";
import { useUser } from "../src/queries/AuthQuery";
import { User } from '../src/types/User';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
const Profile = ()=>{
    const [user,setUser] = useState<User>()
    const data = useUser().data
    const getUser = ()=>{
        setUser(data);
    }
    useEffect(()=>{
        getUser()
    },[data])
    return(
        <>
            <NavbarLayout />
            <Container maxWidth="sm" sx={{height:600, marginTop:15}}>
                <Box>
                    <Stack>
                        <Paper elevation={3} sx={{height:600}}>
                            <Typography variant="h5" sx={{textAlign:'center', paddingTop:4,paddingBottom:3}}>
                                プロフィール
                            </Typography>
                            <Avatar sx={{margin:'0 auto'}} />
                            <Box pt={6}>
                                <List sx={{width: '100%',
                                            margin:'auto',
                                            maxWidth: 360,
                                            bgcolor: 'background.paper',}}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <DriveFileRenameOutlineIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        {user?.name?
                                        <TextField
                                        fullWidth
                                        id="outlined-helperText"
                                        label='username'
                                        defaultValue={user.name}
                                        helperText="Some important text"
                                        />
                                        :null
                                        }
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <EmailIcon/>
                                            </Avatar>
                                        </ListItemAvatar>
                                        {user?.email?
                                        <TextField
                                        fullWidth
                                        id="outlined-helperText"
                                        label='email'
                                        defaultValue={user.email}
                                        helperText="Some important text"
                                        />
                                        :null
                                        }
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <PasswordIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemButton color="#0e38b7">パスワードを変更する場合はこちらから</ListItemButton>
                                    </ListItem>
                                    <Divider />
                                </List>
                            </Box>
                        </Paper>
                    </Stack>
                </Box>
            </Container>
        </>
    )

}

export default Profile
