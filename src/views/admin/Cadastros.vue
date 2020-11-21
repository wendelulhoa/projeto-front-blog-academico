<template>
<div class="col-md-9 col-lg-9 col-xl-10 col-sm-10 ml-auto">
  <b-card no-body>
    <b-tabs card>
      <b-tab title="cadastro aluno" active>
        <b-card-text><CadAluno/></b-card-text>
      </b-tab>
      <b-tab title="cadastro professor">
        <b-card-text><CadProfessor/></b-card-text>
      </b-tab>
      <b-tab title="cadastro administrador">
        <b-card-text><CadAdmin /></b-card-text>
      </b-tab>
      <b-tab title="cadastrar materia">
        <b-card-text><CadMateria/></b-card-text>
      </b-tab>
      <b-tab title="cadastrar curso">
        <b-card-text><CadCurso/></b-card-text>
      </b-tab>
    </b-tabs>
  </b-card>
</div>
 
</template>

<script>
import CadMateria from "@/components/cadastros/CadMateria";
import CadCurso from "@/components/cadastros/CadCurso";
import CadAdmin from "@/components/cadastros/CadAdmin";
import CadAluno from "@/components/cadastros/CadAluno";
import CadProfessor from "@/components/cadastros/Cadprofessor"
export default {
  components: {
    CadMateria,
    CadCurso,
    CadAdmin,
    CadAluno,
    CadProfessor
  },
};
</script>