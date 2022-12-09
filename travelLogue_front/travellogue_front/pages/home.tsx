/* eslint-disable react/jsx-key */
import React, {useEffect, useState} from "react";
// import {useLogout}
import { http } from "../src/api/axios.csrf";
import ShowPost from "../src/components/pagesComponent/home/myPost/showPost";
import { Box, Card, Divider, Stack} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Container from "@mui/material/Container";
import PostModal from "../src/components/pagesComponent/home/myPost/postModal";
import NavbarLayout from "../src/components/Navigation/NavbarLayout";
import MainFeature from "../src/components/pagesComponent/home/MainFeature";
import { useUser } from "../src/queries/AuthQuery";
import RightBar from "../src/components/pagesComponent/home/RightBar";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BottomNav from "../src/components/atoms/BotttomNav";
import ShowPeoplePost from '../src/components/pagesComponent/home/peoplePost.tsx/showPeoplePost';
/**
 *
 * ログアウトボタンからリクエストが渡ると、queryにわたり、logout APIが実行されるように実装
 * ログアウトの
 * →navbar components の呼び出しをする（それぞれの要素は変更できるように・）
 */
interface image{
    created_at:Date,
    id:number,
    name:string,
    path:string,
    post_id:number,
    updated_at:Date
}
type Post = {
    id: number
    title: string
    prefecture: string
    user_id: number
    content: string
    created_at: Date
    updated_at:Date
    images:image[]
}
const Home = ()=>{

    const [renderFlg, setRenderFlg] = useState<boolean>(true);
    // Hooks(Query)を使用するとloadingになるため直接記述
    const [posts, setPosts] =useState<Post[]>([])
    const getPosts =  ()=>{
        http.get('/sanctum/csrf-cookie')
        .then(async response=>{
            const{ data } = await  http.get<Post[]>('/api/posts')
            const reversedData = data.reverse()
            setPosts(reversedData);
        })
    }
    const [username, setUsername] = useState<string>()
    const data = useUser().data?.name
    const getUserName = ()=>{
        setUsername(data)
    }

    // bottom navigation によるstate管理
    const [bottomState, setBottomState] = useState(0)

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
            <Container maxWidth='lg' sx={{mt:10, width: '95%'}} className='static'>
            <MainFeature />
                    <Box flexGrow={1}>
        {/* <img src="http://localhost:8888/storage/images/kyoto.jpeg" alt=""  style={{width:100,height:500}}/> */}
                        <Grid container spacing={3} justifyContent='space-between'>
                                <Grid xs={12} md={7} >
                                    <Box pt={5} width='95%' margin='auto'>

                                        <Card sx={{borderRadius:2}}>
                                            {bottomState==0?
                                             <h1  style={{textAlign:'center',fontSize:25, fontWeight:700 ,paddingTop:10, paddingBottom:8}}>{username} さんのログ</h1>
                                            :
                                            <h1  style={{textAlign:'center',fontSize:25, fontWeight:700 ,paddingTop:10, paddingBottom:8}}>みんなのログ</h1>
                                            }
                                             <BottomNav setBottomState = {setBottomState} />
                                            {/* button navigation 予定 */}
                                        </Card>
                                    </Box>
                                    <div style={{position:"fixed", bottom:3, right: 3}} >
                                        <PostModal />
                                    </div>
                                    {bottomState==0?
                                        <Grid container  sx={{mx:'auto' ,marginTop:3}}  spacing={4} >
                                            {posts.map((post,index) =>
                                            (
                                                <ShowPost title = {post.title} prefecture = {post.prefecture} content = {post.content} id={post.id} time= {post.created_at} image={post.images} key= {index}  />
                                            )
                                            )}
                                        </Grid>
                                    :
                                    <Grid container  sx={{mx:'auto' }}  spacing={4} >
                                    {posts.map((post,index) =>
                                    (

                                        <ShowPost title = {post.title} prefecture = {post.prefecture} content = {post.content} id={post.id} time= {post.created_at} image={post.images} key= {index}  />

                                    )
                                    )}
                                    </Grid>}
                                </Grid>
                                <Divider orientation="vertical" flexItem>
                                </Divider>
                                <Grid md={4}>
                                {username?
                                    <RightBar username={username} />
                                :
                                null}

                                </Grid>
                        </Grid>
                    </Box>
            </Container>
        {/* <PostComponent  /> */}

        </>
    )
}
export default Home;

