import React from "react";
import "tailwindcss/tailwind.css";
import NavbarLayout from "../src/components/Navigation/NavbarLayout";
import { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {useRouter} from 'next/router'



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
export const Register = () =>{
    const router = useRouter();

    // それぞれのフォームのステートの保持
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
    // const handleClick = ()=>{
    //     if(password === confirmPass && password.length > 6){
    //         console.log(password.length)
    //         console.log(email)
    //         console.log(password)
    //         console.log('新規登録完了です')
    //     }else{
    //         console.log('新規登録失敗です')
    //     }
    //     // console.log(password)
    // }

    const handleClick = ()=>{
        const registerParams: RegisterParams = {username, email, password, confirmPass}
        const submitParams: SubmitParams = {username, email, password}
        axios.get('http://localhost:8888/sanctum/csrf-cookie', {withCredentials: true})
        if(password === confirmPass && password.length > 6 ){
            axios.post('http://localhost:8888/api/register',submitParams , {withCredentials: true})
            .then((response)=>{
                console.log(response)
                console.log('新規登録に成功しました')
                router.push('/views/home')
            })
        }
        else{
            toast.error('新規登録に失敗しました。')
            console.log('新規登録に失敗しました')
        }
    }


    return(

        <>
            {/* <Navbar /> */}
            <div className="flex justify-center pt-60" >
                <div className="w-full max-w-xs">
                    <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                            ユーザー名
                        </label>
                        <input
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="ユーザー名"
                        value={username}
                        onChange={changeUserName}
                        />
                        </div>

                        <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                            メールアドレス
                        </label>
                        <input
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="メールアドレス"
                        value={email}
                        onChange={changeEmail}
                        />
                        </div>
                        <div className="mb-6">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                            パスワード
                        </label>
                        <input
                        className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                        value={password}
                        onChange={changePassword}
                        />
                        <p className="text-xs italic text-red-500">Please choose a password.</p>
                        </div>
                        <div className="mb-6">
                        <label className="block mb-2 text-sm font-bold text-gray-700">
                            パスワード再度入力
                        </label>
                        <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                        value={confirmPass}
                        onChange={changeConfirmPass}
                        />
                        <p className="text-xs italic text-red-500">Please choose a password.</p>
                        </div>
                        <div className="flex items-center justify-between">
                        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleClick}
                        >
                            新規登録
                        </button>
                        <a className="inline-block text-sm font-bold text-blue-500 align-baseline hover:text-blue-800"
                        href="#"
                        >
                            パスワードをお忘れですか?
                        </a>
                        </div>
                    </form>
                <p className="text-xs text-center text-gray-500">
                    &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
            </div>
        </>


    )
}
export default Register;
