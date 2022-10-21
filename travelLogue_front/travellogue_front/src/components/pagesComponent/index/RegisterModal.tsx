import React, {ChangeEvent, useState} from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ButtonAtom } from '../../atoms/button';
import { Box } from '@mui/material';

type RegisterParams = {
    username: string
    email:string
    password:string
    confirmPass:string
}
type SubmitParams = {
    username: string
    email:string
    password:string
}

const RegisterModal= ()=> {

    // モーダルの機能
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
//
// 新規登録機能
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');


    const changeUserName = (e:ChangeEvent<HTMLInputElement>)=>{
        setUserName(e.target.value);
    }

    const changeEmail = (e:ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value)
    }

    const changePassword = (e:ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value)
    }

    const changeConfirmPass = (e:ChangeEvent<HTMLInputElement>) =>{
        setConfirmPass(e.target.value)
    }
    // 登録ボタンを押した時の反応
    const handleRegister = ()=>{
        const registerParams: RegisterParams = {username, email, password, confirmPass}
        const submitParams: SubmitParams = {username, email, password}
        axios.get('http://localhost:8888/sanctum/csrf-cookie', {withCredentials: true})
        if(password === confirmPass && password.length > 6 ){
            axios.post('http://localhost:8888/api/register',submitParams , {withCredentials: true})
            .then((response)=>{
                console.log(response)
                console.log('新規登録に成功しました')
            })
        }
        else{
            console.log('新規登録に失敗しました')
        }
    }


  return (
      <>
      <div style={{margin:'auto',textAlign:'center', alignItems:'center' }}>

        <Button variant='contained' sx={{ mx:'auto', my:'auto'}}  onClick={handleClickOpen}>
                新規登録
        </ Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>アカウント新規登録</DialogTitle>
            <DialogContent>
            <DialogContentText>
                メールアドレスとパスワードを入力してください
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="ユーザー名"
                type="username"
                fullWidth
                variant="standard"
                value={username}
                onChange={changeUserName}
                />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="メールアドレス"
                type="email"
                fullWidth
                variant="standard"
                value={email}
                onChange={changeEmail}
                />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="パスワード"
                type="password"
                fullWidth
                variant="standard"
                value={password}
                onChange={changePassword}
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="パスワード確認"
                type="password"
                fullWidth
                variant="standard"
                value={confirmPass}
                onChange={changeConfirmPass}
                />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>キャンセル</Button>
            <Button onClick={handleRegister}>登録</Button>
            </DialogActions>
        </Dialog>
      </div>

    </>
  );
}

export default RegisterModal;
