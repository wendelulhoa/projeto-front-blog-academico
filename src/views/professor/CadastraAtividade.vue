<template>
  <div>
    <div class="col-md-9 col-lg-9 col-xl-10 col-sm-10 ml-auto">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="cadastro aluno" active>
            <b-card-text><CadAtividade /></b-card-text>
          </b-tab>
          <b-tab title="cadastro aluno" active>
            <b-card-text
              ><b-tab title="cadastro aluno" active>
                <b-card-text>
                    <form @submit.prevent="send()">
                  <div class="col-sm-12">
                    <input @change="upload" name= "file" type="file" />
                  </div>
                  <div class="col-sm-12">
                    <button type="submit">Send</button>
                  </div>
                  </form>
                </b-card-text>
              </b-tab></b-card-text
            >
          </b-tab>
        </b-tabs>
      </b-card>

    </div>
  </div>
</template>
<script>
import CadAtividade from "@/components/cadastros/CadAtividade";
import {blog} from "@/app/http/axios/api/blog"
export default {
  components: {
    CadAtividade,
  },
  data() {
      return {
          file: null
      }
  },
 methods: {
  send() {
      const data = new FormData();
      data.append('file', this.file)
      blog.create('professor/cadastro/atividade', data).then((e, res)=>{
          console.log(e, res)
      })
    },
    upload(e) {
         const files = e.target.files;
         this.file = files[0];
    }
} 
};
</script>