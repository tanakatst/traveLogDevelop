import React from 'react';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import CardContent from '@mui/material/CardContent';

const MakePlanCard = () => {
    return (
        <Box zIndex={10} display='inline' marginTop={9} marginLeft={5} height= '820px' width={350} bgcolor='red' position='absolute' top={0} left={30}>
            <Card sx={{height:'100%', width:'100%'}}>
                <Box bgcolor='primary.main' height='8%' width='100%' display='flex' justifyContent='center' alignItems='center' >
                    <Typography variant='h6' fontWeight={800} color='white'>
                        旅行計画作成
                    </Typography>
                </Box>
                    ここには予定作成ダッシュボードを配置する予定です。
                    ここに必要な機能：検索機能,予定管理機能(カレンダーと同期)送信機能、場所検索機能、::最短ルート検索機能
                <CardContent sx={{backgroundColor:'red'}}>
                </CardContent>
                <CardContent sx={{backgroundColor:'red'}}>
                </CardContent>
                <CardContent sx={{backgroundColor:'red'}}>
                </CardContent>
                <CardContent sx={{backgrondColor:'red'}}>
                </CardContent>
                <CardContent sx={{backgrondColor:'red'}}>
                </CardContent>
                <CardContent sx={{backgrondColor:'red'}}>
                </CardContent>
                <CardContent sx={{backgrondColor:'red'}}>
                </CardContent>

            </Card>
        </Box>
    )
}

export default MakePlanCard;
