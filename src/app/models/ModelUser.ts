
export default {
    state:{
        arrayProf: [],
        matricula: "",
        adm: "",
        isLogged: false
    },
    getters:{
        getMatricula(state: any){
            return state.matricula
        },
        getAdm(state: any){
            return state.adm
        },
        getLogged(state: any){
            return state.isLogged
        }
    },
    mutations:{
        setMatricula(state: any, value: any){
            state.matricula = value
        },
        setAdm(state: any, value: any){
            state.adm = value
        },
        setLogged(state: any, value: any){
            state.isLogged = value
        }
    },
    actions:{
        changeMatricula(context: any, value: any){
            context.commit('setMatricula', value)
        },
        changeAdm(context: any, value: any){
            context.commit('setAdm', value)
        },
        changeLogged(context: any, value: any){
            context.commit('setLogged', value)
        }
    }
}
  