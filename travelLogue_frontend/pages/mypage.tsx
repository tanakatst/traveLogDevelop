import React from "react";
import NavbarLayout from "../src/components/Navigation/NavbarLayout";
 import Map from '../src/components/pagesComponent/Map';
const Mypage = ()=>{

    return(
        <>
            <div className="text-white bg-slate-700">
                <NavbarLayout />
                    <h1 className="mt-6 text-center" >旅ログを書いて日本地図を塗りつぶそう</h1>
                <Map/>
            </div>
        </>
    )
}
export default Mypage;
