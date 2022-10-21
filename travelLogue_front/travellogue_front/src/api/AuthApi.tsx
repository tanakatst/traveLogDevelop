
import axios from 'axios'
import { User } from '../../../../../nihontizu_app/frontend/travelLogue/types/User';
import { http } from './axios.csrf';

const getUser = async()=>{
    const {data} = await http.get<User>(`/api/user`)
    const userData = data.id
    return userData
}

const login = async ({email, password}: {email: string, password:string})=>{
    await http.get('/sanctum/csrf-cookie')

    .then(async response=>{
        console.log(response)

        const {data} =await http.post<User>(`/api/login`,
            {email, password}
        )
        console.log(data);
        return data;
    })
}
const logout = async ()=>{
    // await axios.get('http://localhost:8888/sanctum/csrf-cookie', {withCredentials: true})

    await http.get('/sanctum/csrf-cookie')
    .then(async response=>{
        const {data} = await http.post<User>(`/api/logout`)
        return data;
    })
}

const register = async ({username, email, password}: {username:string, email: string, password:string})=>{
    await http.get('/sanctum/csrf-cookie')
    .then(async response=>{
        const {data} = await http.post<User>('/api/register',
        {email, password}
        )
        return data;
    })
}



export{
    getUser,
    login,
    logout
}
