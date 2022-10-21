import * as api from '../api/PostApi'
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const useGetPosts =()=> {
    return useMutation(api.getPosts,{
        onSuccess:(res)=>{
            console.log('投稿データの獲得に成功しました。')
            return res
        },
        onError: ()=>{
            toast.error('投稿に失敗しました。')
        }
    })
}

const usePost = ()=>{
    return useMutation(api.Post,{
        onSuccess:(res)=>{
            console.log('投稿に成功しました。')
            return res
        },
        onError:()=>{
            toast.error('エラーが発生しました。')
        }
    })
}

const useUpdatePost = ()=>{
    return useMutation(api.updatePost,{
        onSuccess:(res)=>{
            console.log('更新に成功しました。')
            return res
        },
        onError:()=>{
            toast.error('エラーが発生しました。')
        }
    })
}
const useDeletePost = ()=>{
    return useMutation(api.deletePost,{
        onSuccess:(res)=>{
            console.log('削除に成功しました。')
            return res
        },
        onError:()=>{
            toast.error('削除に失敗しました。')
        }
    })
}

export {
    useGetPosts,
    usePost,
    useDeletePost,
    useUpdatePost
}
