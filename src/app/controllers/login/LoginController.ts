import {blog} from '@/app/http/axios/api/blog';
import router from '@/router/index';
export default class LoginController{

    public verifica(){
        
//     router.beforeEach((to, from, next) => {
//     console.log('estou aqui');
//   })
  console.log('iae')
    }
    public cadastro(data: string) {
        blog.create('/aluno/cadastro', data).then((e)=>{
            console.log(e.data);
        })
    }
}