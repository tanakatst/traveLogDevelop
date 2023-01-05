import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import IconButton from '@mui/joy/IconButton';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import { CssVarsProvider } from '@mui/joy';
import { deepmerge } from '@mui/utils';
import { joyTheme, muiTheme } from '../../../../styles/mui/JoytMaterialMixed';
import { Grid } from '@mui/material';
import { title } from 'process';
import { Post } from '../../../../types/Post';

export const PostCard = ({id, title,prefecture,content,time,image}:Post) =>{
    const stringTime = time.toString()
    const substrTime = stringTime.substring(0, stringTime.indexOf('T'))
    const showTime = substrTime.replace(/-/g, "/",)
  return (
        <CssVarsProvider theme={deepmerge(joyTheme, muiTheme)}>
            <Card variant="outlined" sx={{ width: '90%' }}>
            <CardOverflow>
                <AspectRatio ratio="2" objectFit='cover'>
                {image?
                    <img
                        src={image[0]?.path}
                        srcSet={image[0]?.path}
                        loading="lazy"
                        alt=""
                    />
                :
                    <img
                        src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                        srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                        loading="lazy"
                        alt=""
                    />
                }
                </AspectRatio>
                <IconButton
                aria-label="Like minimal photography"
                size="md"
                variant="solid"
                color="danger"
                sx={{
                    position: 'absolute',
                    zIndex: 2,
                    borderRadius: '50%',
                    right: '1rem',
                    bottom: 0,
                    transform: 'translateY(50%)',
                }}
                >
                <Favorite />
                </IconButton>
            </CardOverflow>
            <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
                <Link href="#multiple-actions" overlay underline="none">
                {title}
                </Link>
            </Typography>
            <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                <Link href="#multiple-actions">{prefecture}</Link>
            </Typography>
            <Divider inset="context" />
            <CardOverflow
                variant="soft"
                sx={{
                display: 'flex',
                gap: 1.5,
                py: 1.5,
                px: 'var(--Card-padding)',
                bgcolor: 'background.level1',
                }}
            >
                <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                6.3k views
                </Typography>
                <Divider orientation="vertical" />
                <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                {showTime}
                </Typography>
            </CardOverflow>
            </Card>
        </CssVarsProvider>
  );
}
