import Vue from 'vue'
import Vuex from 'vuex'
import professor from '@/app/models/ModelProfessor'
import User from "@/app/models/ModelUser"
import Materia from "@/app/models/ModelMateria"
Vue.use(Vuex)

export  const store = new Vuex.Store({
  modules: {
    professor,
    User,
    Materia
  }
})
