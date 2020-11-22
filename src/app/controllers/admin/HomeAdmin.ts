import {blog} from "@/app/http/axios/api/blog";
export default class HomeAdmin{
    
    public findProfessor(){
      return blog.find('admin/buscar?tipo=professores' )
    }
    public findAluno(){
    return blog.find('admin/buscar?tipo=alunos')
    }
    public findCurso(){
        return blog.find('admin/buscar?tipo=cursos' )
    }
    public findAdmin(){
        return blog.find('admin/buscar?tipo=admin' )
    }
}