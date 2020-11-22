<template>
  <div>
      <Menu tipo = "professor"/>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from '@/components/menu/MenuTe'
export default {
 components:{
   Menu
 }
}
</script>

<style >
  
</style>
