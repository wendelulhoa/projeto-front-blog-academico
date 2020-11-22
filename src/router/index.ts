import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '../views/login/Login.vue';
import CadastrosAdmin from '@/views/admin/Cadastros.vue'
import HomeAdmin from '@/views/admin/Home.vue';
import Find from "@/app/controllers/admin/HomeAdmin";
import {store} from "@/store/index";
import AlterarAdmin from "@/views/admin/Update.vue";
import CadastrarAtividade from '@/views/professor/CadastraAtividade.vue';
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { path: '/', component: Login },
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

  { path: '/professor/cadastro', component: CadastrarAtividade },
  { path: '/admin/cadastro', component: CadastrosAdmin },
  { path: '/admin/cadastro', component: CadastrosAdmin },
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
