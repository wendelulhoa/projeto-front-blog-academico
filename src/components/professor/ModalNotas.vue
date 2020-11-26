<template>
  <div>
    <b-button @click="findAtividade(id)" variant="primary">buscar</b-button>
    <b-modal
      v-model="show"
      id="modal-scrollable"
      scrollable
      size="xl"
      title="cadastrar nota"
    >
      <form name="notas" @submit.prevent= "cadNota">
        <div class="form-group">
          <div>
            <select name="semestre" class="form-control">
              <option selected value="a1">a1</option>
              <option value="a2">a2</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>nota</label>
          <input
            type="text"
            class="form-control"
            name="nota"
          />
        </div>
        <input type="text" name="matricula" :value="matricula" >
        <input type="text" name="cod" :value="codMateria" >
        <button type="submit" class="btn btn-primary">enviar</button>
      </form>
      <div class="d-flex flex-nowrap form-row">
        <div class="form-group"></div>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { blog } from "@/app/http/axios/api/blog";
import { mapGetters } from 'vuex';
export default {
  components: {},
  props: {
    id: {
      type: Number,
    },
    matricula:{
        type: Number
    }
  },
  data() {
    return {
      show: false,
      atividades: [],
    };
  },
  computed:{
      ...mapGetters({
          codMateria:"getCodMateria"
      })
  },
  methods: {
    findAtividade(id) {
      this.show = true;
      blog.find(`professor/find?tipo=atividades&cod=${id}`).then((e) => {
        this.atividades = e.data.data;
        console.log(e.data, id);
      });
    },
    cadNota(){
        const form = document.forms.namedItem("notas");
      const data = new FormData(form);
    
      blog.create("professor/cadastro/nota", data).then((e) => {
        console.log(e.data);
      });
    }
  },
};
</script>