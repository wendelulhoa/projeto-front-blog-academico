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
                    <td>materia</td>
                    <td>nota a1</td>
                    <td>nota a2</td>
                    <td>media final</td>
                  </tr>
                </thead>
                <tbody>
                  <tr  v-for="(item, index) in arrayContent" :key="index" >
                    <td >{{item.nome_materia}}</td>
                    <td >{{ item.nota_a1 }}</td>
                    <td >{{ item.nota_a2 }}</td>
                    <td >{{ item.media_final}}</td>
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
import {mapGetters} from "vuex";

export default {
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

