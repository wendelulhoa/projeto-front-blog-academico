<template>
  <div>
    <div class="page-content">
      <div class="container text-center text-dark">
        <div class="row">
          <div class="col-lg-4 d-block mx-auto">
            <div class="row">
              <div class="col-xl-12 col-md-12 col-md-12">
                <div class="card">
                  <div class="card-body">
                    <div class="text-center mb-6">
                      <img
                        src="images/brand/logo.png"
                        class="header-brand-img main-logo"
                        alt="IndoUi logo"
                      />
                      <img
                        src="images/brand/logo-light.png"
                        class="header-brand-img dark-main-logo"
                        alt="IndoUi logo"
                      />
                    </div>
                    <h3>Login</h3>
                    <p class="text-muted">entre com a mtricula para fazer login</p>
                    <div class="input-group mb-3">
                      <span class="input-group-addon bg-white"
                        ><i class="fa fa-user"></i
                      ></span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="matricula"
                        v-model="data.matricula"
                      />
                    </div>
                    <div class="input-group mb-4">
                      <span class="input-group-addon bg-white"
                        ><i class="fa fa-unlock-alt"></i
                      ></span>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="senha"
                        v-model="data.password"
                      />
                    </div>
                    <div class="row">
                      <div class="col-12">
                        <button
                          type="button"
                          class="btn btn-primary btn-block"
                          @click="login"
                        >
                          Login
                        </button>
                      </div>
                      <div class="col-12">
                        <a
                          href="forgot-password.html"
                          class="btn btn-link box-shadow-0 px-0"
                          >Forgot password?</a
                        >
                      </div>
                    </div>
                    <div class="mt-6 btn-list">
                      <button type="button" class="btn btn-icon btn-facebook">
                        <i class="fa fa-facebook"></i>
                      </button>
                      <button type="button" class="btn btn-icon btn-google">
                        <i class="fa fa-google"></i>
                      </button>
                      <button type="button" class="btn btn-icon btn-twitter">
                        <i class="fa fa-twitter"></i>
                      </button>
                      <button type="button" class="btn btn-icon btn-dribbble">
                        <i class="fa fa-dribbble"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "@/app/http/axios/login/login";
import ip from "@/app/http/axios/apiIp/meuIp";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      data: { matricula: "", password: "" }
    };
  },
  methods: {
    ...mapActions({
      changeIsLogged: "changeIsLogged",
    }),
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
          this.changeIsLogged(true);
          this.$router.push("/");
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
