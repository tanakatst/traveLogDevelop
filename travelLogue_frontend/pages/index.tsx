
import Link from 'next/link';
// import NavbarLayout from '~/components/Navigation/NavbarLayout';
import style from '../styles/scss/moduleCss/index.module.scss'
import axios from 'axios';
import { NextPage } from 'next/types';
import IndexNav from '../src/components/Navigation/IndexNavbar';
import RegisterModal from '../src/components/pagesComponent/index/RegisterModal';
import Example from '../src/components/pagesComponent/index/example';
const Home: NextPage = () => {



  return (
      <>
        <main className={style.main}>
            <IndexNav />
            <div className={`z-50 text-white h-screen ${style.container}`} >
                <div className={`items-center pt-32 `}>
                    <h1 className='text-6xl font-bold text-center '>Travelogue</h1>
                        <p className='pt-5 text-3xl font-bold text-center'></p>
                    <div className='flex items-center justify-center mx-auto mt-7'>
                        <RegisterModal />
                    </div>
                </div>
            </div>
        </main>
        <Example />
      </>

  )
}

export default Home;
