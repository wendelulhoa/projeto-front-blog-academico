import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import { blog } from '@/app/http/axios/api/blog';
import {store} from "@/store/index";
import Login from '../views/login/Login.vue';

// componentes admin
import CadastrosAdmin from '@/views/admin/Cadastros.vue'
import HomeAdmin from '@/views/admin/Home.vue';
import Find from "@/app/controllers/admin/HomeAdmin";
import AlterarAdmin from "@/views/admin/Update.vue";
//fim componentes admin

// componentes aluno 
import HomeAluno from "@/views/aluno/Home.vue"
import AtividadesAluno from "@/views/aluno/Atividades.vue"
import MateriasAluno from "@/views/aluno/Materias.vue"
import Boletim from "@/views/aluno/Boletim.vue"
//fim componentes aluno

// componentes do professor
import CadastrarAtividade from '@/views/professor/CadastraAtividade.vue';
import HomeProfessor from "@/views/professor/Home.vue"
// fim componentes professor

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { path: '/', component: Login },

  // rotas admin
  { path: '/admin', component: HomeAdmin,
    beforeEnter:(to, from, next)=>{
      const test = new Find();
      test.findProfessor().then(e=>{
        store.commit('setArrayProf', e.data.data)
      })
      next()
    }
  },
  { path: '/admin/cadastro', component: CadastrosAdmin },
  { path: '/admin/alterar', component: AlterarAdmin },
  // fim rotas admin

  //rotas aluno
  { path: '/aluno', component: HomeAluno },
  { path: '/aluno/materias', component: MateriasAluno, name: 'atividade',
  beforeEnter:(to, from, next)=>{
    blog.find('aluno/find?tipo=materia').then(e=>{
        store.commit('setMateria', e.data.data)
      })
      next()
    }
  },
  { path: '/aluno/materias/atividades/:id', component: AtividadesAluno},
  { path: '/aluno/boletim', component: AtividadesAluno},
  { path: '/aluno/financeiro', component: AtividadesAluno},
  // fim rotas aluno


  // rotas do professor
  { path: '/professor', component: HomeProfessor},
  { path: '/professor/cadastro', component: CadastrarAtividade },
  // fim rotas professor
  
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  const isAuthenticated = true;
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})
export default router
