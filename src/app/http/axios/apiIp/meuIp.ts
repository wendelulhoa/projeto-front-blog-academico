import {http} from './configApi'
export default {

    meuIp: () => {
        return http.get('/?format=json')
    },
    

}