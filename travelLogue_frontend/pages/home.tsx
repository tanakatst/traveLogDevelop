/* eslint-disable react/jsx-key */
import React, {useEffect, useState} from "react";
// import {useLogout}
import PostComponent from "../src/components/pagesComponent/home/post";
import NavbarLayout from "../src/components/Navigation/NavbarLayout";
import { http } from "../src/api/axios.csrf";
import ShowPost from "../src/components/pagesComponent/home/showPost";
import { Box } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Container from "@mui/material/Container";
import PostModal from "../src/components/pagesComponent/home/postModal";
import { BorderAllRounded } from "@mui/icons-material";
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
            const{ data } = await  http.get<Post[]>('/api/getPosts')
            setPosts(data.reverse());
        })
    }
    // 投稿がされたらレンダリングする
    useEffect(()=>{
        getPosts()
    },[])

    return(
        <>
        <NavbarLayout  />
        <Container maxWidth='lg' sx={{mt:20, ml: 10, backgroundColor: 'primary.light', borderRadius:5}}>
            <Box flexGrow={1} >
                <PostModal />
                <Grid container  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {posts.map(post =>
                    (
                        <ShowPost title = {post.title} prefecture = {post.prefecture} content = {post.content} />

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

