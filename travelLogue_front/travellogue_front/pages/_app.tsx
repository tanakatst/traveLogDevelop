import 'tailwindcss/tailwind.css';

import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '../hooks/AuthContext'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import {ThemeProvider} from '@mui/material/styles'
import theme from '../src/styles/mui/theme';
const queryClient = new QueryClient()



function MyApp({ Component, pageProps }: AppProps) {
    // ページ遷移制御(isAuth true:false)
    // const {isAuth , setIsAuth}  = useAuth()
    // const router = useRouter()
    // isAuth?



  return (
      <>
            <ThemeProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
                {/* <ToastContainer hideProgressBar={true}/> */}
                </QueryClientProvider>
            </ThemeProvider>
      </>
  )
}
export default MyApp;
