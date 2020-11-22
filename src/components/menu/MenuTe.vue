<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark d-xl-none d-lg-none d-md-none"
    >
      <a class="navbar-brand" href="#">Mercado Ulhoa</a>
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
            <a href="" class="nav-link text-white current mb-3"
              ><i class="fas fa-home text-light fa-lg mr-3"></i>Inicio
            </a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link text-white link mb-3"
              ><i class="fas fa-address-card fa-lg mr-3"></i>Cadastro Cliente</a
            >
          </li>
          <li class="nav-item">
            <a href="" class="nav-link text-white link mb-3"
              ><i class="fas fa-shopping-basket fa-lg mr-3"></i>cadastrar
              Preço</a
            >
          </li>
          <li class="nav-item">
            <a href="" class="nav-link text-white link mb-3">
              <i class="fas fa-users fa-lg mr-3"></i>clientes</a
            >
          </li>
          <li class="nav-item">
            <a href="" class="nav-link text-white link mb-3"
              ><i class="fas fa-money-bill-wave fa-lg mr-3"></i> Pagamento</a
            >
          </li>
          <li class="nav-item">
            <a href="" class="nav-link text-white link"
              ><i class="fas fa-sign-out-alt fa-lg mr-3"></i>Sair</a
            >
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
                <a href="" class="text-white" @click.prevent>wendel ulhoa</a>
              </div>

              <ul class="navbar-nav flex-column mt-4">
                <li class="nav-item">
                  <router-link to="/admin" v-if= "tipo == 'admin'" class="nav-link text-white current mb-3">
                  Inicio
                  </router-link>
                  <router-link to="/admin" v-if= "tipo == 'professor'" class="nav-link text-white current mb-3">
                  Inicio
                  </router-link>
                  <router-link to="/admin" v-if= "tipo == 'aluno'" class="nav-link text-white current mb-3">
                  Inicio
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link text-white link mb-3"
                    to="/admin/cadastro"
                    v-if= "tipo == 'admin'"
                    >Cadastro
                  </router-link
                  >
                  <router-link
                    class="nav-link text-white link mb-3"
                    to="/professor/cadastro"
                    v-if= "tipo == 'professor'"
                    >Cadastro Atividade
                  </router-link
                  >
                  <router-link
                    class="nav-link text-white link mb-3"
                    to="/admin/cadastro"
                    v-if= "tipo == 'aluno'"
                    >Cadastro
                  </router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link text-white link mb-3"
                    to="/admin/cadastro"
                    >Alterar
                  </router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link text-white link mb-3"
                    to="/admin/cadastro"
                    >bloquear
                  </router-link
                  >
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link text-white link mb-3"
                    ><i class="fas fa-money-bill-wave fa-lg mr-3"></i>
                    Pagamento</a
                  >
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link text-white link"
                    ><i class="fas fa-sign-out-alt fa-lg mr-3"></i>Sair</a
                  >
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
export default {
  props:{
    tipo:{
      type: String
    }
  }
}
</script>
<style >
@import "./style.css";
</style>