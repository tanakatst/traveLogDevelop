import 'tailwindcss/tailwind.css';

import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '../hooks/AuthContext'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
const queryClient = new QueryClient()



function MyApp({ Component, pageProps }: AppProps) {
    // ページ遷移制御(isAuth true:false)
    // const {isAuth , setIsAuth}  = useAuth()
    // const router = useRouter()
    // isAuth?



  return (
      <>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        {/* <ToastContainer hideProgressBar={true}/> */}
        </QueryClientProvider>
      </AuthProvider>
      </>
  )
}
export default MyApp;
