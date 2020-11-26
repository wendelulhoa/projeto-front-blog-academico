<template>
  <div>
      <Menu :tipo= "type" v-if="logged == true"/>
     
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
 }
}
</script>

<style >
  
</style>
