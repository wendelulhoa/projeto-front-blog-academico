<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-10 col-lg-8 col-md-8 col-sm-10 ml-auto">
          <div class="row pt-md-2 mt-md-3 mb-5">
            <CardView title= "alunos quantidade" value = "100"/>
            <CardView title= "professores quantidade" value = "10"/>
            <CardView title= "cursos disponiveis" value = "10"/>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import CardView from "@/components/Card"
export default {
    components:{
        CardView
    }
}
</script>