
export default {
    state:{
        arrayProf: [],
        codMateria: ''
    },
    getters:{
        getArrayProf(state: any){
            return state.arrayProf;
        },
        getCodMateria(state: any){
            return state.codMateria;
        }
    },
    mutations:{
        setArrayProf(state: any, value: any){
            state.arrayProf = value
        },
        setCodMateria(state: any, value: any){
            state.codMateria = value
        }
    },
    actions:{
        changeArrayProf(context: any, value: any){
            context.commit('setArrayProf', value);
        },
        changeCodMateria(context: any, value: any){
            context.commit('setCodMateria', value);
        }
    }
}
  