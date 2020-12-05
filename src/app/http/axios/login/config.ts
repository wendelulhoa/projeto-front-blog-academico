import axios from 'axios'


export const http = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers:{
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTYwMzc0MDUzNCwiZXhwIjoxNjAzNzQ0MTM0LCJuYmYiOjE2MDM3NDA1MzQsImp0aSI6ImtmMUg0THVJTm5ORk1IYnMiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.ZF32VzelnqqP6cEWnC-YiykGiKztIyE8U72LxtJQCr4'
    }
})