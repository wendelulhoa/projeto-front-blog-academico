<template>
  <div>
    <head>
      <title>professor</title>
    </head>
      <Menu :tipo= "type" v-if="!logged == false"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from '@/components/menu/MenuTe'
import {mapGetters} from 'vuex'
export default {
 components:{
   Menu
 },
 computed:{
   ...mapGetters({ 
     logged:'getLogged',
     type:'getAdm'
    })
 },
 methods:{
 }
}
</script>

<style >
  
</style>
