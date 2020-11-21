import {blog} from "@/app/http/axios/api/blog";

export default class Admin{
    public cadMateria(data: any){
        console.log(data)
        blog.create('admin/cadastro/materia', data).then(e =>{
            alert(e.data);
        })
    }
    public cadCurso(data: any){
        console.log(data)
        blog.create('admin/cadastro/curso', data).then(e =>{
            alert(e.data);
        })
    }
    public cadAdmin(data: any){
        console.log(data)
        blog.create('admin/cadastro/admin', data).then(e =>{
            console.log(e.data);
        }).catch(e=>{
            console.log(e.data);
        })
    }
}