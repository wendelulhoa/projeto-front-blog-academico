<template>
    <div>
        <TableAlunos :arrayContent="alunos"/>
    </div>
</template>
<script>
import {blog} from '@/app/http/axios/api/blog'

import TableAlunos from './TableAlunos'
export default {
    data() {
        return {
            alunos: [],
            matricula: ""
        }
    },
    components:{
        TableAlunos
    },
    mounted(){
        blog.find("professor/find?tipo=alunos").then((e) => {
           this.alunos =e.data;
           console.log(e.data)
        })
    },
    methods:{
        find(matricula){
            console.log('aaa')
            this.matricula = matricula;
        }
    }
}
</script>