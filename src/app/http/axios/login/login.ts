import {http} from './config'

export const login = ({

    listar: async(data: any) =>{
        console.log(data)
            return await http.post('/auth/login', data);
    },
})