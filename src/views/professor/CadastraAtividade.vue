<template>
  <div>
    <div class="col-md-9 col-lg-9 col-xl-10 col-sm-10 ml-auto">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="cadastro aluno" active>
            <b-card-text><CadAtividade /></b-card-text>
          </b-tab>
        </b-tabs>
      </b-card>

    </div>
  </div>
</template>
<script>
import CadAtividade from "@/components/cadastros/CadAtividade";
export default {
  components: {
    CadAtividade,
  } 
};
</script>