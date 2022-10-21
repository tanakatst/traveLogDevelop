import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
    // TODO:テーマ設定を行います
    palette: {
        primary: {
            light:'#e0f2f1',
            main: '#00796b',
        },
        secondary: {
            main: '#2e7d32',
        },
        text: {
            primary: '#263238',
        },
    },
    typography:{
        fontFamily: [
            // 'DotGothic16,sans-serif',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            // 'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),

    },
});

export default theme;



