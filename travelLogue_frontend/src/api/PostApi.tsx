import React from "react";
import { http } from "./axios.csrf";

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
        const {data} = await http.get<Post[]>('api/getPosts')
        return data;
    })
}

const Post = async ({title,prefecture,content}:{title:string,prefecture:string,content:string}) => {
    await http.get('/sanctum/csrf-cookie')
    .then(async response=>{
        const data =await http.post('/api/post',
        {title,prefecture,content}
        )
        console.log(data);
    })
}



export {
    getPosts,
    Post
}
