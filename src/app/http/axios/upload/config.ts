import axios from 'axios'


export const http = axios.create({
    baseURL: 'https://wendelulhoa.tk/api/',
    headers:{
        'Authorization': 'Bearer ',
        'Content-type': 'multipart/form-data'
    }
})