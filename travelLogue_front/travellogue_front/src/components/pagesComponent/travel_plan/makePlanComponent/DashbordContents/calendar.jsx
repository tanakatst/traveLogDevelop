import React, { useState } from 'react'
import { format } from 'date-fns'
import { enGB, ja } from 'date-fns/locale'
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import { Card, Typography,Button, Modal, Box } from '@mui/material'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function Carendar() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const [focus, setFocus] = useState(START_DATE)
  const handleFocusChange = newFocus => {
    setFocus(newFocus || START_DATE)
  }

  return (
    <Box width='100%' position='realative' textAlign='center' pt={3}>
            <Button onClick={handleOpen} sx={{ backgroundColor:'#3a9bb3', color:'#fff' , ":hover":{backgroundColor:'#9ab7c9'}}}>日程を決める</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography>旅行開始日: {startDate ? format(startDate, ' yyyy年MMMdd日', { locale: ja }) : ''}.</Typography>
                <Typography>旅行最終日：{endDate ? format(endDate, 'yyyy年MMMdd日 ', { locale: ja }) : ''}.</Typography>
                <DateRangePickerCalendar
                startDate={startDate}
                endDate={endDate}
                focus={focus}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
                onFocusChange={handleFocusChange}
                locale={enGB}
                />
                <Box textAlign='center' pt={2}>
                    <Button onClick={handleClose} sx={{ backgroundColor:'#3a9bb3', color:'#fff' , ":hover":{backgroundColor:'#9ab7c9'}}}>日程を確定</Button>
                </Box>
            </Box>
            </Modal>

    </Box>

  )
}
