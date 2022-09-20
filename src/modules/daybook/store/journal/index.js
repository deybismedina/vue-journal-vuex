import state from "./state"
import * as actions from'./accions'
import * as mutation from './mutations'
import * as getters from './getters'


const myCustomModule={ 
    namespaced:true,
    actions,
    getters,
    mutation,
    state
}

export default myCustomModule