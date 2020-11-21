import Vue from 'vue'
import Vuex from 'vuex'
import professor from '@/app/models/ModelProfessor'
Vue.use(Vuex)

export  const store = new Vuex.Store({
  modules: {
    professor
  }
})
