<template>
  <div class="p-2">
    <form @submit.prevent="cadastrar()" name="aluno">
    <div class="card">
      <div class="card-header">
        <div>
          <h3 class="card-title">Cadastro {{type}}</h3>
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
                name="nome"
                placeholder="Nome"
              />
            </div>
            <div class="form-group">
              <label class="form-label">cpf</label>
              <input type="text" class="form-control" placeholder="CPF" name="cpf"/>
            </div>
            <div class="form-group">
              <label class="form-label">RG</label>
              <input type="text" class="form-control" placeholder="RG" name="rg"/>
            </div>
            <div class="form-group">
              <label class="form-label">ENDERECO</label>
              <input type="text" class="form-control" placeholder="ENDERECO" name="endereco"/>
            </div>
            <div class="form-group">
              <label class="form-label">COMPLEMENTO</label>
              <input
                type="text"
                class="form-control"
                placeholder="COMPLEMENTO"
                name="complemento"
              />
            </div>
            <div class="form-group">
              <label class="form-label">CIDADE</label>
              <input type="text" class="form-control" placeholder="CIDADE" name="cidade"/>
            </div>
            <div class="form-group">
              <label class="form-label">SENHA</label>
              <input type="text" class="form-control" placeholder="SENHA" name="senha"/>
            </div>
            <div class="form-group">
              <label >CURSOS</label>
              <select name="curso" class="form-control">
                <option  v-for="(item, index) in cursos" :key="index" :value="item.id">{{item.nome_curso}}</option>
              </select>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label class="form-label">MATRICULA</label>
              <input type="text" class="form-control" placeholder="MATRICULA" name="matricula"/>
            </div>
            <div class="form-group">
              <label class="form-label">NOME MÃE</label>
              <input type="text" class="form-control" placeholder="NOME MÃE" name="nomeMae"/>
            </div>
            <div class="form-group">
              <label class="form-label">DATA NASCIMENTO</label>
              <input
                type="text"
                class="form-control"
                placeholder="DATA NASCIMENTO"
                name="dataNasc"
              />
            </div>
            <div class="form-group">
              <label class="form-label">BAIRRO</label>
              <input type="text" class="form-control" placeholder="ENDERECO" name="bairro"/>
            </div>
            <div class="form-group">
              <label class="form-label">ESTADO</label>
              <input
                type="text"
                class="form-control"
                placeholder="COMPLEMENTO"
                name="bairro"
              />
            </div>
            <div class="form-group">
              <label class="form-label">NUMERO</label>
              <input type="text" class="form-control" placeholder="NUMERO" name="numero"/>
            </div>
            <div class="form-group ">
              <label for="inputState">TURNO</label>
              <select  class="form-control">
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
        <button  class="btn btn-primary" type="submit">salvar alterações</button>
      </div>
      </form>
    </div>

</template>

<script>
import Aluno from '@/app/controllers/aluno/AlunoController'
import {blog} from '@/app/http/axios/api/blog'
export default {
  data() {
    return {
      cursos: []
    }
  },
   props:{
   type:{
     Type: String,
   }
 },
 mounted(){
  
      blog.find("aluno/find?tipo=cursos").then((e) => {
        this.cursos = e.data
      });
 },
  methods:{
   cadastrar(){
      const form = document.forms.namedItem("aluno");
      const data = new FormData(form);
      blog.create("aluno/cadastro", data).then((e) => {
        this.$bvToast.toast(
            "cadastrado com sucesso",
            {
              title: "sucesso",
              variant: "success",
              solid: true,
            }
          );
      }).catch(e=>{
        this.$bvToast.toast(
            "verifique os campos informados e tente novamente",
            {
              title: "ocorreu um erro",
              variant: "danger",
              solid: true,
            }
          );
      });
    }
  }
}
</script>