import {blog} from "@/app/http/axios/api/blog";

export default class Admin{
    public cadMateria(data: any){
        
        blog.create('admin/cadastro/materia', data).then(e =>{
            console.log('success')
        })
    }
    public cadCurso(data: any){
        
        blog.create('admin/cadastro/curso', data).then(e =>{
            console.log('success')
        })
    }
    public cadAdmin(data: any){
        
        blog.create('admin/cadastro/admin', data).then(e =>{
            console.log(e.data);
        }).catch(e=>{
            console.log(e.data);
        })
    }
}