<template>
    <div>
  <b-button @click="findAtividade(id)" variant="primary">atividades</b-button>
  <b-modal v-model="show" id="modal-scrollable" scrollable size="xl" title="atividades enviadas">
        <TableAtividades :arrayContent = "atividades" tipo="atividades"/>
  </b-modal>

</div>
</template>
<script>
import {blog} from '@/app/http/axios/api/blog';
import TableAtividades from "./TableAtividade"
export default {
    components:{
        TableAtividades
    },
    props:{
        id:{
            type: Number
        }
    },
    data() {
        return {
            show: false,
            atividades:[]
        }
    },
    methods:{
     findAtividade(id) {
         this.show = true
      blog
        .find(`professor/find?tipo=atividades&cod=${id}`)
        .then((e) => {
         this.atividades = e.data.data;
         console.log(e.data, id)
        });
    },
    }
}
</script>