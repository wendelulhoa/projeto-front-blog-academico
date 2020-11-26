<template>
  <div class="p-2">
    <form @submit.prevent="cadastrar" name="formProf">
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
              <input type="text" class="form-control" placeholder="SENHA" name="password"/>
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
                name="estado"
              />
            </div>
            <div class="form-group">
              <label class="form-label">NUMERO</label>
              <input type="text" class="form-control" placeholder="NUMERO" name="num"/>
            </div>
            <div class="form-group">
              <label >MATERIAS</label>
              <select name="materia" class="form-control">
                <option  v-for="(item, index) in materias" :key="index" :value="item.cod_materia">{{item.nome_materia}}</option>
              </select>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center pb-1">
        <button type="submit" class="btn btn-primary" >salvar alterações</button>
      </div>
      </form>
    </div>

</template>

<script>
import Professor from '@/app/controllers/professor/ProfessorController';
import {blog} from '@/app/http/axios/api/blog'
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
    }
  },
  computed:{
   ...mapGetters({ 
        materias:"getMateria"
    })
  },
   props:{
   type:{
     Type: String,
   }
 },
  methods:{
    cadastrar(){
      const form = document.forms.namedItem("formProf");
      const data = new FormData(form);
      blog.create("professor/cadastro", data).then((e) => {
        console.log(e.data);
      });
    }
  }
}
</script>