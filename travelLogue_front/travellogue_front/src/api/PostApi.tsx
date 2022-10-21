import React from "react";
import { http } from "./axios.csrf";
import { title } from 'process';

type Post = {
    id: number
    title: string
    prefecture: string
    user_id: number
    content: string
    created_at: Date
    updated_at:Date
}

const getPosts = async () =>{
    await http.get('/sanctum/csrf-cookie')
    .then(async response =>{
        console.log(response);
        const {data} = await http.get<Post[]>('api/posts')
        return data;
    })
}

const Post = async ({title,prefecture,content}:{title:string,prefecture:string,content:string}) => {
    await http.get('/sanctum/csrf-cookie')
    .then(async response=>{
        const data =await http.post('/api/posts',
        {title,prefecture,content}
        )
        console.log(data);
    })
}

const updatePost = async({id,title,prefecture,content}:{id:number,title:string,prefecture:string,content:string}) =>{
    await http.get('/sanctum/csrf-cookie')
    .then(async response=>{
        const {data} = await http.put<Post>(
            `/api/posts/${id}`, {title,prefecture,content}
        )
        return data
    })
}

const deletePost = async(id:number) =>{
    await http.get('/sanctum/csrf-cookie')
    .then(async response=>{
        const {data} = await http.delete<Post>(
            `/api/posts/${id}`
            )
        return data
    })
}



export {
    getPosts,
    Post,
    updatePost,
    deletePost
}