<template>
  <div class="p-2">
    <div class="card">
      <div class="card-header">
        <div>
          <h3 class="card-title">Cadastro Professor</h3>
        </div>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label class="form-label">Nome</label>
              <input
                type="text"
                class="form-control"
                name="example-text-input"
                placeholder="Nome"
                v-model="data.nome"
              />
            </div>
            <div class="form-group">
              <label class="form-label">cpf</label>
              <input type="text" class="form-control" placeholder="CPF" v-model="data.cpf"/>
            </div>
            <div class="form-group">
              <label class="form-label">RG</label>
              <input type="text" class="form-control" placeholder="RG" v-model="data.rg"/>
            </div>
            <div class="form-group">
              <label class="form-label">ENDERECO</label>
              <input type="text" class="form-control" placeholder="ENDERECO" v-model="data.endereco"/>
            </div>
            <div class="form-group">
              <label class="form-label">COMPLEMENTO</label>
              <input
                type="text"
                class="form-control"
                placeholder="COMPLEMENTO"
                v-model="data.complemento"
              />
            </div>
            <div class="form-group">
              <label class="form-label">CIDADE</label>
              <input type="text" class="form-control" placeholder="CIDADE" v-model="data.cidade"/>
            </div>
            <div class="form-group">
              <label class="form-label">SENHA</label>
              <input type="text" class="form-control" placeholder="SENHA" v-model="data.password"/>
            </div>
            <div class="form-group ">
              <label for="inputState">CURSOS</label>
              <select id="inputState" class="form-control">
                <option>ESCOLHA UM CURSO...</option>
                <option>SI</option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label class="form-label">MATRICULA</label>
              <input type="text" class="form-control" placeholder="MATRICULA" v-model="data.matricula"/>
            </div>
            <div class="form-group">
              <label class="form-label">NOME MÃE</label>
              <input type="text" class="form-control" placeholder="NOME MÃE" v-model="data.nomeMae"/>
            </div>
            <div class="form-group">
              <label class="form-label">DATA NASCIMENTO</label>
              <input
                type="text"
                class="form-control"
                placeholder="DATA NASCIMENTO"
                v-model="data.dataNasc"
              />
            </div>
            <div class="form-group">
              <label class="form-label">BAIRRO</label>
              <input type="text" class="form-control" placeholder="ENDERECO" v-model="data.bairro"/>
            </div>
            <div class="form-group">
              <label class="form-label">ESTADO</label>
              <input
                type="text"
                class="form-control"
                placeholder="COMPLEMENTO"
                v-model="data.estado"
              />
            </div>
            <div class="form-group">
              <label class="form-label">NUMERO</label>
              <input type="text" class="form-control" placeholder="NUMERO" v-model="data.numero"/>
            </div>
            <div class="form-group ">
              <label for="inputState">TURNO</label>
              <select id="inputState" class="form-control">
                <option>NOTURNO</option>
                <option>MATUTINO</option>
                <option>VESPERTINO</option>
              </select>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center pb-1">
        <a  class="btn btn-primary" @click="cadastrar">salvar alterações</a>
      </div>
    </div>

</template>

<script>
import Professor from '@/app/controllers/professor/ProfessorController'
export default {
  data() {
    return {
      data: {
        nome: "",
        matricula: "",
        cpf: "",
        nomeMae: "",
        dataNasc:"",
        rg: "",
        password: "",
        endereco: "",
        complemento:"",
        bairro: "",
        estado: "",
        cidade: "",
        numero:"",
        codMateria: "",
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
      const cadastrar = new Professor();
      cadastrar.cadastro(this.data);
    }
  }
}
</script>