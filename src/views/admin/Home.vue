<template>
  <div>
    <Card />
    <div class="col-md-9 col-lg-9 col-xl-10 col-sm-10 ml-auto">
      <b-tabs content-class="mt-3" align="center">
        <b-tab title="professores" active @click="findProfessor">
          <div>
            <b-table striped hover :items="professores"></b-table>
          </div>
        </b-tab>
        <b-tab title="alunos" @click="findAluno">
          <div>
            <b-table striped hover :items="alunos"></b-table>
          </div>
        </b-tab>
        <b-tab title="cursos" @click="findCurso">
          <div>
            <b-table striped hover :items="curso"></b-table>
          </div>
        </b-tab>
        <b-tab title="administradores" @click="findAdmin">
          <div>
            <b-table striped hover :items="admin"></b-table>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import Card from "@/components/CardHome";
import Find from "@/app/controllers/admin/HomeAdmin";
import HomeAdmin from "@/app/controllers/admin/HomeAdmin";
import { mapGetters } from 'vuex';
export default {
  components: {
    Card,
  },
  data() {
    return {
     
      alunos: [],
      admin: [],
      curso: [],
    };
  },
  computed:mapGetters({
    professores:"getArrayProf"
  }),
  methods: {
    findProfessor() {
      const professor = new HomeAdmin();
      professor.findProfessor().then((e) => {
        this.professores = e.data.data;
      });
    },
    findAluno() {
      const aluno = new HomeAdmin();
      aluno.findAluno().then((e) => {
        this.alunos = e.data.data;
      });
    },
    findAdmin() {
      const admin = new HomeAdmin();
      admin.findAdmin().then((e) => {
        this.admin = e.data.data;
      });
    },
    findCurso() {
      const curso = new HomeAdmin();
      curso.findCurso().then((e) => {
        this.curso = e.data.data;
      });
    },
  },
};
</script>