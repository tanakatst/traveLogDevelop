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
            <Container  sx={{mt:15, ml: '8%', width: '90%'}} className='static'>
                <Box   sx={{backgroundColor: 'primary.light', mx: 'auto', borderRadius: 6, }}>
                <h1 className="text-center pt-7 pb-7 " style={{fontFamily: 'DotGothic16' , fontSize:50, fontWeight:900}}>投稿一覧</h1>
                <div style={{position:"fixed", bottom:3, right: 3}} >
                    <PostModal />
                </div>
                    <Grid container  sx={{mx:'auto', width: '87%'}}  spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 9 }}>
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

