<template>
  <div>
    <div class="card-turma" v-for="(item, index) in materia" :key="index">
      <b-card
        header-tag="header"
        footer-tag="footer"
        :title="item.nome_materia"
      >
        <b-card-text>{{ item.nome_materia }}</b-card-text>
        <a
          @click.prevent="
            linkDirect(
              `/aluno/materias/atividades/${item.cod_materia}`,
              item.cod_materia
            )
          "
           class="btn btn-primary"
          >atividades</a>
      </b-card>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { blog } from "@/app/http/axios/api/blog";
export default {
  data() {
    return {
      link: "/aluno/materias/atividades/",
    };
  },
  computed: {
    ...mapGetters({
      materia: "getMateria",
    }),
  },
  methods: {
    ...mapActions({
      changeAtividade: "changeAtividade",
    }),
    linkDirect(link, cod) {
      this.$router.push(link);
    },
  },
};
</script>
<style >
@import "./style.css";
</style>