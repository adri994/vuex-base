// State
import state from './state'
// mutations
import * as mutations from './mutations'
// Actions
import * as actions from './actions'
// Getters
import * as getters from './getters'

const counterStore = {
  namespace: true,
  // parecido a la data de vue
  state,
  // Mutacion tiene que ser sincronas
  // Cambia el state
  // en vue se puede comparar como methods
  mutations,
  // Pueden ser asyncronos
  // son metodos que normalmente pueden despues llamar a lamutacion para cambiar el state
  actions,
  // es muy similar a las computadas
  // como parametro tiene el state
  getters
}

export default counterStore
