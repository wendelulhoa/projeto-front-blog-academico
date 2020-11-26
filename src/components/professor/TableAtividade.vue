<template>
  <div>
    <!-- Row -->
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 bootstrap snippets">
        <!-- Cart -->
        <div class="card">
          <div class="card-header">
            <span class="card-title">atividades</span>
          </div>
          <div class="card-body hero-feature">
            <div class="table-responsive push">
              <table
                class="table table-bordered table-hover tbl-cart text-nowrap"
              >
                <thead>
                  <tr v-if="tipo == 'atividade'">
                    <td>titulo</td>
                    <td>data</td>
                  </tr>
                  <tr v-if="tipo == 'atividades'">
                    <td>nome</td>
                    <td>matricula</td>
                    <td>data</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  <tr  v-for="(item, index) in arrayContent" :key="index" >
                    <td v-if="tipo == 'atividade'">{{item.titulo}}</td>
                    <td v-if="tipo == 'atividade'">{{ item.data }}</td>

                    <td v-if="tipo == 'atividades'">{{item.nome_aluno}}</td>
                    <td v-if="tipo == 'atividades'">{{ item.matricula_aluno }}</td>
                    <td v-if="tipo == 'atividades'">{{ item.data }}</td>
                    <td>
                      <ModalAtividade :id ="item.id"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- End Cart -->
      </div>
    </div>
    <!-- End Row -->
  </div>
</template>

<script>
import {mapActions} from "vuex";
import ModalAtividade from './ModalAtividades'
export default {
  components:{
    ModalAtividade
  },
 props:{
   arrayContent:{
     type: Array
   },
   tipo:{
     type: String
   }
   },
   methods: {
     atividade(){
       console.log('aaa')
     }
   },
};
</script>

