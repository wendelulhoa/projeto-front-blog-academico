<template>
  <div>
    <div class="col-md-9 col-lg-9 col-xl-10 col-sm-10 ml-auto">
      <b-tabs content-class="mt-3" align="center">
        <b-tab title="boletim" active>
          <div>
            <Boletim :arrayContent="boletim"/>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Boletim from "@/components/aluno/TableBoletim";
import {blog} from '@/app/http/axios/api/blog'
export default {
  components: {
    Boletim,
  },
  data() {
    return {
      boletim:[]
    };
  },
  computed: {
    ...mapGetters({
      matricula: "getMatricula",
    }),
  },
  mounted() {
    blog.find(`aluno/find?tipo=boletim&cod=${this.matricula}`).then((e) => {
      this.boletim = e.data
    });
  },
};
</script>