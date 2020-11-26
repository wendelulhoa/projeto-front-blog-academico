
export default {
    state:{
        arrayProf: [],
        matricula: '',
        adm: '',
        isLogged: false,
        nome: ''
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
        },
        getNome(state: any){
            return state.nome
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
        },
        setNome(state: any, value: any){
            state.nome = value
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
  