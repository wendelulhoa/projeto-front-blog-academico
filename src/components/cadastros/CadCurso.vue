<template>
  <div class="p-2">
    <div class="card">
      <div class="card-header">
        <div>
          <h3 class="card-title">Cadastro {{ type }}</h3>
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label class="form-label">Nome Curso</label>
              <input
                type="text"
                class="form-control"
                name="example-text-input"
                placeholder="Nome materia"
                v-model="data.nomeCurso"
              />
            </div>  
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label class="form-label">valor Curso</label>
              <input
                type="text"
                class="form-control"
                placeholder="codigo Materia"
                v-model="data.valorCurso"
              />
            </div>

          </div>
        </div>
      </div>
      <div class="text-center pb-1">
        <a class="btn btn-primary" @click="cadastrar">salvar alterações</a>
      </div>
    </div>
  </div>

</template>

<script>
import Admin from '@/app/controllers/admin/AdminController'
export default {
  data() {
    return {
      data: {
          nomeCurso: "",
          valorCurso: ""
      }
    }
  },
   props:{
   type:{
     Type: String,
   }
 },
  methods:{
    cadastrar(){
      const cadastrar = new Admin();
      cadastrar.cadCurso(this.data);
    }
  }
}
</script>