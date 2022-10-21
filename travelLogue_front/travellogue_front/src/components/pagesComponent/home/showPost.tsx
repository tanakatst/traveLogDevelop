import React from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { maxHeight } from "@mui/system";
import { Divider, ImageListItem, ImageListItemBar } from '@mui/material';
import { StayPrimaryLandscape } from "@mui/icons-material";
import EditModal from "./updatePostModal";
type Props = {
    id:number
    title: string
    prefecture: string
    content: string
}

// type UserInfo ={
//     created_at:Date
// email:string
// email_verified_at: any
// id:number
// name: string
// updated_at:Date

// }

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const ShowPost  = (props:Props) =>{

    const title = props.title
    const prefecture = props.prefecture
    const content = props.content
    const id = props.id



  return (
      <>
      <Grid  xs={12} md={6}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {prefecture}
            </Typography>
            <Typography variant="subtitle1" paragraph>
            </Typography>
            <Typography variant="subtitle1" color="primary">
              {content}
            </Typography>
            <CardActions>
                <EditModal id={id} title={title} prefecture={prefecture} content={content}/>
                <Button size="small">削除</Button>
            </CardActions>
          </CardContent>
          <CardMedia
            component="img"
            image="https://images.pexels.com/photos/404960/pexels-photo-404960.jpeg"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
          />
        </Card>
      </Grid>

      </>
  );
}
export default ShowPost

            // <Grid  xs={2} sm={3} md={3} sx={{mx:'auto'}} id={`${id}`} key={id.toString()} >
            // <Card sx={{ maxWidth: 345 ,borderRadius:6}} >
            //     <CardMedia
            //         component="img"
            //         height="140"
            //         image='data:image/jpeg;base64,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'
            //         alt={prefecture}
            //     />
            //     <CardContent>
            //         <Typography gutterBottom variant="h5" component="div"  color="text.secondary">
            //         {title}
            //         </Typography>
            //         <Typography variant="body2" color="text.secondary">
            //             {content}
            //         </Typography>
            //     </CardContent>
            //     <CardActions>
            //         <EditModal id={id} title={title} prefecture={prefecture} content={content}/>
            //         <Button size="small">削除</Button>
            //     </CardActions>
            //     </Card>

            // </Grid>
