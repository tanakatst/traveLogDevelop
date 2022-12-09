import React from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Unstable_Grid2';
import { Menu, MenuItem } from "@mui/material";
import EditModal from '../updatePostModal';
import DeleteModal from '../DeleteModal';
import  styles from './myPost.module.css'
interface image{
    created_at:Date,
    id:number,
    name:string,
    path:string,
    post_id:number,
    updated_at:Date
}
type Props = {
    id:number
    title: string
    prefecture: string
    content: string
    time: Date
    image?:image[]

}
interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


const ShowPost  = (props:Props) =>{

    const title = props.title
    const prefecture = props.prefecture
    const content = props.content
    const id = props.id
    const time = props.time.toString()
    const substrTime = time.substring(0, time.indexOf('T'))
    const showTime = substrTime.replace(/-/g, "/",)
    const image = props.image

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    // ハンバーガーメニュー
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

// 場所アイコン


  return (
      <>
        <Grid xs={12} justifyContent='space-between'>

            <Card sx={{ maxWidth: 800, borderRadius:2  ,boxShadow:10}} >
            <CardHeader
                className={styles.CardHeader}
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    田中
                </Avatar>
                }
                action={
                <>
                <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                >
                    <MoreVertIcon />
                </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem ><EditModal id={id} title={title} prefecture={prefecture} content={content}/></MenuItem>
                        <MenuItem ><DeleteModal id={id}/></MenuItem>
                    </Menu>
                </>
                }
                title={`${title} #${prefecture}`}
                subheader={showTime}
            />
            {image !== undefined?
            (
                <CardMedia
                    component="img"
                    sx={{height:{xs:200,sm:400, md:500, }}}
                    image={image[0]?.path}
                />
            )
            :
            (
            <CardMedia
                component="img"
                sx={{height:{xs:200,sm:400, md:500, }}}
            />
            )
            }
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {/* <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton> */}
                {/* <IconButton aria-label="share">
                <ShareIcon />
                </IconButton> */}
                <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>

            </Card>
        </Grid>
      </>
  );
}
export default ShowPost

