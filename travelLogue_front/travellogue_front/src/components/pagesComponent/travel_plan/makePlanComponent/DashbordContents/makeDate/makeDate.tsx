import React from 'react';
import Carendar from './calendar';
import { Box, Typography } from '@mui/material';

const MakeDate = ({setLeaveDate, leaveDate,setReturnDate,returnDate}: {setLeaveDate:React.Dispatch<React.SetStateAction<string>>, leaveDate:string,setReturnDate:React.Dispatch<React.SetStateAction<string>>, returnDate:string}) => {
    // 時間をフォーマットする。
    return (
        <>
            <Carendar setLeaveDate={setLeaveDate} leaveDate={leaveDate} setReturnDate={setReturnDate} returnDate={returnDate}/>
            <Box paddingLeft={5} pt={3}>
                <Typography>出発日：{leaveDate}</Typography>
                <Typography>最終日：{returnDate}</Typography>
            </Box>
        </>
    )
}

export default MakeDate;
