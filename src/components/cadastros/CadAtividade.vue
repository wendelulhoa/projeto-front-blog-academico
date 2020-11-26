<template>
  <div class="p-2">
    <div class="card">
      <form @submit.prevent="send($event)" enctype="multipart/form-data" name="atividade">
        <div class="card-header">
          <div>
            <h3 class="card-title">Cadastro {{ type }}</h3>
          </div>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label">titulo da atividade</label>
                <input
                  type="text"
                  class="form-control"
                  name="titulo"
                  placeholder="titulo atividade"
                  v-model="data.titulo"
                />
                <div class="col-sm-12">
                  <input  name="file" type="file" />
                </div>
              </div>
            </div>
            
            <div class="col-md-6">
              <div class="form-group">
                <label class="form-label">data entrega</label>
                <input
                  type="date"
                  class="form-control"
                  placeholder="codigo Materia"
                  name="data"
                  v-model="data.data"
                />
              </div>
              <textarea
                class="form-control"
                placeholder="escreva algo explicativo da atividade..."
                rows="3"
                name="textoAdd"
                v-model="data.textoAdd"
              >
              </textarea>
              <input name="codMateria" :value="codMateria" hidden>
              <input name="matricula" :value="codMateria" hidden>
            </div>
          </div>
        </div>
        <div class="text-center pb-1">
          <button class="btn btn-primary" type="submit">
            salvar alterações
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
//import Admin from '@/app/controllers/admin/AdminController'
import { blog } from "@/app/http/axios/upload/blog";
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      data: [{
        titulo: "",
        textoAdd: "",
        data:"",
        file:""
      }],
      file: null
    };
  },
  props: {
    type: {
      Type: String,
    },
  },
  computed:{
    ...mapGetters({
      codMateria:"getCodMateria",
      matricula: "getMatricula"
    })
  },
  methods: {
    
    send(e) {
      const form = document.forms.namedItem("atividade");
      const data = new FormData(form);
    
      blog.create("professor/cadastro/atividade", data).then((e) => {
        console.log(e.data);
      });
    }
  },
};
</script>