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
                  <tr >
                    <td>nome</td>
                    <td>matricula</td>
                    <td>data</td>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr  v-for="(item, index) in arrayContent" :key="index" >
                    <td >{{item.nome_aluno}}</td>
                    <td >{{ item.matricula_aluno }}</td>
                    <td>
                      <ModalNotas :matricula = "item.matricula_aluno"/>
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
import ModalNotas from './ModalNotas'
export default {
  components:{
    ModalNotas 
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

