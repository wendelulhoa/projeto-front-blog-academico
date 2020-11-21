import {blog} from '@/app/http/axios/api/blog';
export default class Aluno{

    public cadastro(data: any){
        console.log(data)
        blog.create('aluno/cadastro', data).then((e) =>{
            console.log(e.data);
        }).catch((e)=>{
            console.log(e.data);
        })
    }
}