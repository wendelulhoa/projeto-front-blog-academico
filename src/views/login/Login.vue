<template>
      
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
				<div class="login100-pic js-tilt" data-tilt>
					<img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/LOGO_PROJE%C3%87%C3%83O.png" alt="IMG">
				</div>

				<form class="login100-form validate-form" @submit.prevent>
					<span class="login100-form-title">
						faça login
					</span>

					<div class="wrap-input100 validate-input" >
						<input class="input100" type="text" name="matricula" v-model="data.matricula" placeholder="matricula">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" name="pass" v-model="data.password" placeholder="senha">
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn" @click="login()">
							Login
						</button>
					</div>

					<div class="text-center p-t-12">
						<span class="txt1">
							esqueceu 
						</span>
						<a class="txt2" href="#">
							matricula/ senha?
						</a>
					</div>

					<div class="text-center p-t-110">
						
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
<style lang="css">
   @import './css/main.css';
    @import './css/util.css'; 
</style>
<script>
import { login } from "@/app/http/axios/login/login";
import { blog } from "@/app/http/axios/api/blog";
import ip from "@/app/http/axios/apiIp/meuIp";
import { mapGetters } from "vuex";
import {store} from "@/store/index";
export default {
  data() {
    return {
      data: { matricula: "", password: "" }
    };
  },
   computed:{
   ...mapGetters({ 
     logged:'getLogged',
     teste:'getAdm'
    })
 },
  methods: {
    login() {
      ip.meuIp().then((e) => {
        console.log(e.data);
      });
      login
        .listar(this.data)
        .then((e) => {
          this.$bvToast.toast("será redirecionado a outra tela", {
            title: "autenticado com sucesso",
            variant: "success",
            solid: true,
          });
          localStorage.setItem("token", e.data.access_token);
          localStorage.setItem('matricula', e.data.user['matricula'])
          localStorage.setItem('adm', e.data.user['adm'])
          localStorage.setItem('isLogged', true)
          store.commit('setLogged',localStorage.getItem('isLogged'))
          store.commit('setAdm',localStorage.getItem('adm'))
          store.commit('setMatricula',localStorage.getItem('matricula'))
          
          
        if(e.data.user['adm'] == 0){
          this.$router.push("/admin");
         blog.find(`admin/buscar?tipo=nome&matricula=${e.data.user['matricula']}`).then(e=>{
            localStorage.setItem('nome',e.data[0].nome_admin)
            store.commit('setNome',localStorage.getItem('nome'))
          })
          
        }
        else if(e.data.user['adm'] == 1){
          blog.find(`professor/find?tipo=cod&matricula=${e.data.user['matricula']}`).then(e=>{
          localStorage.setItem('codMateria', e.data[0].materia[0]['cod_materia'])
          store.commit('setCodMateria',localStorage.getItem('codMateria'))
         })
         blog.find(`professor/find?tipo=nome&matricula=${e.data.user['matricula']}`).then(e=>{
            localStorage.setItem('nome',e.data[0].nome_professor)
            store.commit('setNome',localStorage.getItem('nome'))
          })
          
          
         this.$router.push("/professor");
        }else{
         blog.find(`aluno/find?tipo=nome&matricula=${e.data.user['matricula']}`).then(e=>{
            localStorage.setItem('nome',e.data[0].nome_aluno)
            store.commit('setNome',localStorage.getItem('nome'))
          })
          this.$router.push("/aluno");
        }
          
        })
        .catch((e) => {
          this.$bvToast.toast(
            "verifique sua senha ou email se estão corretos",
            {
              title: "ocorreu um erro",
              variant: "danger",
              solid: true,
            }
          );
        });
    },
  },
};
</script>
