import state from "./state";
import * as actions from'./accion'
import * as mutation from './mutations'
import * as getters from './getters'


const journalModule={
    namespaced:true,
    actions,
    getters,
    mutation,
    state
}

export default journalModule