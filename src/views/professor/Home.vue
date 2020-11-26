<template>
  <div>

    <div class="col-md-9 col-lg-9 col-xl-10 col-sm-10 ml-auto">
      <b-tabs content-class="mt-3" align="center">
        <b-tab title="alunos" active @click="findAluno">
          <div>
            <b-table striped hover :items="alunos"></b-table>
          </div>
        </b-tab>
        <b-tab title="lançar notas" @click="findAluno">
          <div>
            <CardNota />
          </div>
        </b-tab>
        <b-tab title="atividades enviadas" @click="findAtividade">
          <div>
            <Atividade :arrayContent="atividades" tipo= "atividade"/>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import HomeAdmin from "@/app/controllers/admin/HomeAdmin";
import Atividade from "@/components/professor/Table";
import CardNota from "@/components/professor/CadNota"
import {blog} from '@/app/http/axios/api/blog'
import { mapGetters } from "vuex";
export default {
  components: {
    Atividade,
    CardNota
  },
  data() {
    return {
      alunos: [],
      admin: [],
      curso: [],
      atividades:[]
    };
  },
  methods: {
    findAluno() {
      const aluno = new HomeAdmin();
      aluno.findAluno().then((e) => {
        this.alunos = e.data.data;
      });
    },
    findAtividade() {
      blog
        .find(`professor/find?tipo=atividade`)
        .then((e) => {
         this.atividades = e.data.data;
        });
    },
  },
};
</script>