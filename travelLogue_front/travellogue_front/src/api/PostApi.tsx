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
        const {data} = (await http.get<Post[]>('api/posts'))
        console.log(data);
        return data;
}

const Post = async (formData:FormData) => {
    await http.get('/sanctum/csrf-cookie')
    .then(async response=>{
        const data = await http.post('/api/posts',
        formData,
        {headers:{ "content-type": "multipart/form-data"}}
        )
        console.log(data)
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
export function getUser(): any {
    throw new Error('Function not implemented.');
}

