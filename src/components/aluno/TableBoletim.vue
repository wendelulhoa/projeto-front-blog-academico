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
                    <td >{{ soma(item.nota_a2, item.nota_a1 )}}</td>
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

export default {
 props:{
   data() {
     return {
       teste: 2
     }
   },
   arrayContent:{
     type: Array
   },
   tipo:{
     type: String
   }
   },
  
   methods: {
     soma(a1, a2){
       let soma = parseFloat(a1) + parseFloat(a2);
       soma = soma / 2;
        return soma;
      } 
   },
};
</script>

