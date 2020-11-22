<template>
  <div class="p-2">
    <div class="card">
        <form @submit.prevent="cadastrar($event)">
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
                v-model="data.nomeMateria"
              />
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
                v-model="data.codMateria"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label class="form-label">arquivo de complemento</label>
              <input
                type="file"
                name="file"
                class="form-control"
                placeholder="codigo Materia"
                
              />
            </div>

          </div>
        </div>
      </div>
      <div class="text-center pb-1">
        <button class="btn btn-primary" type="submit">salvar alterações</button>
      </div>
      </form>
    </div>
    
  </div>

</template>

<script>
//import Admin from '@/app/controllers/admin/AdminController'
export default {
  data() {
    return {
      data: {
          codMateria: "",
          nomeMateria: ""
      }
    }
  },
   props:{
   type:{
     Type: String,
   }
 },
  methods:{
    cadastrar(event){
        console.log(event.target['file'].value)
    }
  }
}
</script>