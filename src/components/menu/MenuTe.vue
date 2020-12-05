<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark d-xl-none d-lg-none d-md-none"
    >
      <a class="navbar-brand" href="#">escola do zezinho</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto p-2">
          <li class="nav-item">
                  <router-link to="/admin" v-if= "tipo == 0" class="nav-link text-white current mb-3">
                  Inicio
                  </router-link>
                  <router-link to="/professor" v-if= "tipo == 1" class="nav-link text-white current mb-3">
                  Inicio
                  </router-link>
                  <router-link to="/aluno" v-if= "tipo == 2" class="nav-link text-white current mb-3">
                  Inicio
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link text-white link mb-3"
                    to="/admin/cadastro"
                    v-if= "tipo == 0"
                    >Cadastros
                  </router-link
                  >
                  <router-link
                    class="nav-link text-white link mb-3"
                    to="/professor/cadastro"
                    v-if= "tipo == 1"
                    >Cadastro Atividade
                  </router-link
                  >
                  <router-link
                    class="nav-link text-white link mb-3"
                    to="/aluno/materias"
                    v-if= "tipo == 2"
                    >materias 
                  </router-link
                  >
                </li>
                <li class="nav-item">
                  <a href="/login" class="nav-link text-white link mb-3" @click="sair">sair</a>
                </li>
               
          
        </ul>
      </div>
    </nav>

    <nav class="navbar navbar-expand-md navbar-light">
      <div class="collapse navbar-collapse">
        <div class="container-fluid">
          <div class="row">
            <div
              class="col-xl-2 col-lg-3 col-md-3 mt-lg-0 mt-md-0 mt-sm-5 mr-sm-5 menu-lateral fixed-top"
            >
              <div class="borda-baixo mt-3">
                <a href="" @click.prevent class="text-white navbar-brand ml-4"
                  >Escola do zezinho</a
                >
              </div>

              <div class="borda-baixo pb-3 pt-3">
                <i class="fas fa-user text-light fa-lg mr-3"></i>
                <a href="" class="text-white" @click.prevent>{{nome}}</a>
              </div>

              <ul class="navbar-nav flex-column mt-4">
                <li class="nav-item">
                  <router-link to="/admin" v-if= "tipo == 0" class="nav-link text-white current mb-3">
                  Inicio
                  </router-link>
                  <router-link to="/professor" v-if= "tipo == 1" class="nav-link text-white current mb-3">
                   Inicio
                  </router-link>
                  <router-link to="/aluno" v-if= "tipo == 2" class="nav-link text-white current mb-3">
                  Inicio
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link text-white link mb-3"
                    to="/admin/cadastro"
                    v-if= "tipo == 0"
                    >Cadastros
                  </router-link
                  >
                  <router-link
                    class="nav-link text-white link mb-3"
                    to="/professor/cadastro"
                    v-if= "tipo == 1"
                    >Cadastro Atividade
                  </router-link
                  >
                  <router-link
                    class="nav-link text-white link mb-3"
                    to="/aluno/materias"
                    v-if= "tipo == 2"
                    >materias 
                  </router-link
                  >
                </li>
                <li class="nav-item">
                  <a href="/login" class="nav-link text-white link mb-3" @click="sair">sair</a>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props:{
    tipo:{
      type: String
    }
  },
  computed:{
    ...mapGetters({
      nome: 'getNome'
    })
  },
  methods:{
    sair(){
      localStorage.clear();
      this.$route.push('/login')
    }
  }
}
</script>
<style >
@import "./style.css";
</style>