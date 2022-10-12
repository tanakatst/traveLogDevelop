import axios from "axios"
import React, {useState} from "react"
import useEffect from 'react';
import { login } from "../../../api/AuthApi";
import NavbarLayout from "../../Navigation/NavbarLayout";
import { usePost } from "../../../queries/PostQuery";


const PostComponent = ()=>{
    const [title, setTitle] = useState('');
    const [prefecture, setPrefecture] = useState('');
    const [content, setContent] = useState('');
    const post = usePost();

    const clickHundler =(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        post.mutate({title,prefecture,content})
    }


    return(
        <>
            <div className="items-center h-full bg-center bg-cover ">
                <div className="pt-32 mx-auto md:container">
                <div className="items-center rounded-md md:grid md:gap-6 bg-stone-500">
                    {/* <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                        <p className="mt-1 text-sm text-gray-600">
                        This information will be displayed publicly so be careful what you share.
                        </p>
                    </div>-
                    </div> */}
                    <div className="mt-5 md:mt-0 md:col-span-2 mb-9">
                    <form action="#" method="POST">
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 space-y-6 sm:p-6">
                            <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-3 sm:col-span-2">
                                <label className="block text-sm font-medium text-black">
                                タイトル
                                </label>
                                <div className="flex mt-1 rounded-md shadow-sm">

                                <input
                                type="text"
                                name=""
                                id=""
                                className="flex-1 block w-full text-black border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
                                placeholder="タイトル"
                                value={title}
                                onChange={(e)=>setTitle(e.target.value)}
                                />

                                </div>
                            </div>
                            <div className="col-span-3 sm:col-span-2">
                                <label className="block text-sm font-medium text-black">
                                    都道府県選択
                                </label>
                                <div className="flex mt-1 rounded-md shadow-sm">
                                    <select className="w-20 text-sm text-center text-black rounded-md"
                                    name="都道府県" id=""
                                    value={prefecture}
                                    onChange={(e)=>setPrefecture(e.target.value)}
                                    >
                                            <option value="" defaultValue='都道府県'>都道府県</option>
                                            <option value="北海道">北海道</option>
                                            <option value="青森県">青森県</option>
                                            <option value="岩手県">岩手県</option>
                                            <option value="宮城県">宮城県</option>
                                            <option value="秋田県">秋田県</option>
                                            <option value="山形県">山形県</option>
                                            <option value="福島県">福島県</option>
                                            <option value="茨城県">茨城県</option>
                                            <option value="栃木県">栃木県</option>
                                            <option value="群馬県">群馬県</option>
                                            <option value="埼玉県">埼玉県</option>
                                            <option value="千葉県">千葉県</option>
                                            <option value="東京都">東京都</option>
                                            <option value="神奈川県">神奈川県</option>
                                            <option value="新潟県">新潟県</option>
                                            <option value="富山県">富山県</option>
                                            <option value="石川県">石川県</option>
                                            <option value="福井県">福井県</option>
                                            <option value="山梨県">山梨県</option>
                                            <option value="長野県">長野県</option>
                                            <option value="岐阜県">岐阜県</option>
                                            <option value="静岡県">静岡県</option>
                                            <option value="愛知県">愛知県</option>
                                            <option value="三重県">三重県</option>
                                            <option value="滋賀県">滋賀県</option>
                                            <option value="京都府">京都府</option>
                                            <option value="大阪府">大阪府</option>
                                            <option value="兵庫県">兵庫県</option>
                                            <option value="奈良県">奈良県</option>
                                            <option value="和歌山県">和歌山県</option>
                                            <option value="鳥取県">鳥取県</option>
                                            <option value="島根県">島根県</option>
                                            <option value="岡山県">岡山県</option>
                                            <option value="広島県">広島県</option>
                                            <option value="山口県">山口県</option>
                                            <option value="徳島県">徳島県</option>
                                            <option value="香川県">香川県</option>
                                            <option value="愛媛県">愛媛県</option>
                                            <option value="高知県">高知県</option>
                                            <option value="福岡県">福岡県</option>
                                            <option value="佐賀県">佐賀県</option>
                                            <option value="長崎県">長崎県</option>
                                            <option value="熊本県">熊本県</option>
                                            <option value="大分県">大分県</option>
                                            <option value="宮崎県">宮崎県</option>
                                            <option value="鹿児島県">鹿児島県</option>
                                            <option value="沖縄県">沖縄県</option>

                                    </select>
                                </div>
                            </div>
                            </div>

                            <div>
                            <label className="block text-sm font-medium text-black">
                                旅のログ
                            </label>
                            <div className="mt-1">
                                <textarea
                                id="about"
                                name="about"
                                className="block w-full h-64 mt-1 text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
                                placeholder="旅行のログを自由にお書きください。"
                                value={content}
                                onChange={(e)=>setContent(e.target.value)}
                                ></textarea>
                            </div>
                            <p className="mt-2 text-sm text-gray-500">
                                Brief description for your profile. URLs are hyperlinked.
                            </p>
                            </div>
                            {/* <div>
                            <label className="block text-sm font-medium text-white">
                                Cover photo
                            </label>
                            {/* <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
                                {/* <div className="space-y-1 text-center"> */}
                                {/* <svg className="w-12 h-12 mx-auto text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="True" >
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg> */}
                                {/* <div className="flex text-sm text-white">
                                    <label  className="relative font-medium text-indigo-600 rounded-md cursor-pointer hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">
                                    PNG, JPG, GIF up to 10MB
                                </p> */}
                                {/* </div> */}
                            {/* </div> */}
                            {/* </div> */}
                        </div>
                        <div className="px-4 py-3 text-center bg-white sm:px-6 ">
                            <button
                            type="submit"
                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={clickHundler}
                            >
                            送信
                            </button>

                        </div>
                        </div>
                    </form>

                    </div>
                </div>
                </div>


            </div>


        </>


    )
}

export default PostComponent;
