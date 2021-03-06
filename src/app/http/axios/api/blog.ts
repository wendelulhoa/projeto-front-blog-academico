import {http} from './config'
import cors from 'cors'
export const blog = ({

    create: async(url: string, data: any) =>{
            return await http.post(`${url}`, data);
    },
    find:async(url: string) =>{
        return await http.get(`${url}`);
    },
})