
export default {
    state:{
        atividade: [],
        materias: []
    },
    getters:{
        getAtividade(state: any){
            return state.atividade
        },
        getMateria(state: any){
            return state.materias
        },
       
    },
    mutations:{
        setAtividade(state: any, value: any){
            state.atividade = value.reverse()
        },
        setMateria(state: any, value: any){
            state.materias = value
        },
       
    },
    actions:{
        changeAtividade(context: any, value: any){
            context.commit('setAtividade', value)
        },
        changeMateria(context: any, value: any){
            context.commit('setMateria', value)
        },
        
    }
}
  