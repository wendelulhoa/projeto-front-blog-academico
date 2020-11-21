
export default {
    state:{
        arrayProf: []
    },
    getters:{
        getArrayProf(state: any){
            return state.arrayProf;
        }
    },
    mutations:{
        setArrayProf(state: any, value: any){
            state.arrayProf = value
        }
    },
    actions:{
        changeArrayProf(context: any, value: any){
            context.commit('setArrayProf', value);
        }
    }
}
  