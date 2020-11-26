import axios from 'axios'


export const http = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers:{
        'Authorization': 'Bearer ',
        'Content-type': 'multipart/form-data'
    }
})