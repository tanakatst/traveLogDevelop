/* eslint-disable react/jsx-key */
import React, {useEffect, useState} from "react";
// import {useLogout}
import { http } from "../src/api/axios.csrf";
import ShowPost from "../src/components/pagesComponent/home/showPost";
import { Box } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Container from "@mui/material/Container";
import PostModal from "../src/components/pagesComponent/home/postModal";
import NavbarLayout from "../src/components/Navigation/NavbarLayout";
import MainFeature from "../src/components/pagesComponent/home/MainFeature";
/**
 *
 * ログアウトボタンからリクエストが渡ると、queryにわたり、logout APIが実行されるように実装
 * ログアウトの
 * →navbar components の呼び出しをする（それぞれの要素は変更できるように・）
 */
type Post = {
    id: number
    title: string
    prefecture: string
    user_id: number
    content: string
    created_at: Date
    updated_at:Date
}
const Home = ()=>{

    const [posts, setPosts] =useState<Post[]>([])
    const getPosts =  ()=>{
        http.get('/sanctum/csrf-cookie')
        .then(async response=>{
            const{ data } = await  http.get<Post[]>('/api/posts')
            setPosts(data.reverse());
        })
    }
    // 投稿がされたらレンダリングする
    useEffect(()=>{
        getPosts()
    },[])

    return(
        <>
        <NavbarLayout/>
            <Container  sx={{mt:10, ml: '8%', width: '95%'}} className='static'>
            <MainFeature />
                <Box>
                <h1  style={{textAlign:'center',fontSize:25, fontWeight:700 ,paddingTop:10, paddingBottom:8}}>さんのログ</h1>
                <div style={{position:"fixed", bottom:3, right: 3}} >
                    <PostModal />
                </div>
                    <Grid container  sx={{mx:'auto', width: '87%'}}  spacing={4} >
                        {posts.map(post =>
                        (

                            <ShowPost title = {post.title} prefecture = {post.prefecture} content = {post.content} id={post.id}/>

                        )
                        )}
                    </Grid>
                </Box>
            </Container>
        {/* <PostComponent  /> */}

        </>
    )
}
export default Home;

