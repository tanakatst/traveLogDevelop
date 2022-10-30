/* eslint-disable react/jsx-key */
import React, {useEffect, useState} from "react";
// import {useLogout}
import { http } from "../src/api/axios.csrf";
import ShowPost from "../src/components/pagesComponent/home/showPost";
import { Box, Card, Divider, Stack} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Container from "@mui/material/Container";
import PostModal from "../src/components/pagesComponent/home/postModal";
import NavbarLayout from "../src/components/Navigation/NavbarLayout";
import MainFeature from "../src/components/pagesComponent/home/MainFeature";
import { useUser } from "../src/queries/AuthQuery";
import RightBar from "../src/components/pagesComponent/home/RightBar";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
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

    // Hooks(Query)を使用するとloadingになるため直接記述
    const [posts, setPosts] =useState<Post[]>([])
    const getPosts =  ()=>{
        http.get('/sanctum/csrf-cookie')
        .then(async response=>{
            const{ data } = await  http.get<Post[]>('/api/posts')
            setPosts(data.reverse());
        })
    }
    const [username, setUsername] = useState<string>()
    const data = useUser().data?.name
    const getUserName = ()=>{
        setUsername(data)
    }

    // 投稿がされたらレンダリングする
    useEffect(()=>{
        getPosts()
    },[])
    useEffect(()=>{
        getUserName()
    },[data]);
    return(
        <>
        <NavbarLayout/>
            <Container  sx={{mt:10, ml: '8%', width: '95%'}} className='static'>
            <MainFeature />
                    <Box flexGrow={1}>
                        <Grid container spacing={3} justifyContent='space-between'>
                                <Grid xs={12} md={7} >
                                    <Box pt={5} width='95%' margin='auto'>

                                        <Card sx={{borderRadius:6}}>
                                            <h1  style={{textAlign:'center',fontSize:25, fontWeight:700 ,paddingTop:10, paddingBottom:8}}>{username} さんのログ</h1>

                                            {/* button navigation 予定 */}
                                        </Card>
                                    </Box>
                                    <div style={{position:"fixed", bottom:3, right: 3}} >
                                        <PostModal />
                                    </div>
                                        <Grid container  sx={{mx:'auto' }}  spacing={2} >
                                            {posts.map((post,index) =>
                                            (

                                                <ShowPost title = {post.title} prefecture = {post.prefecture} content = {post.content} id={post.id} time= {post.created_at} key= {index} />

                                            )
                                            )}
                                        </Grid>
                                </Grid>
                                <Divider orientation="vertical" flexItem>
                                </Divider>
                                <Grid md={4}>
                                    {username?
                                        <RightBar username={username}/>
                                        : null
                                    }
                                </Grid>
                        </Grid>
                    </Box>
            </Container>
        {/* <PostComponent  /> */}

        </>
    )
}
export default Home;

