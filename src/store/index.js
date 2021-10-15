import { createStore } from 'vuex'
import counterStore from './counter'

export default createStore({
  modules: {
    counter: counterStore
  }
})

// import getRandomInt from '../helpers/getRandomInt'

// export default createStore({

//   // parecido a la data de vue
//   state: {
//     count: 1,
//     lastMutation: 'none',
//     isLoading: false
//   },
//   // Mutacion tiene que ser sincronas
//   // Cambia el state
//   // en vue se puede comparar como methods
//   mutations: {
//     // por defecto siempre trae el state
//     increment (state) {
//       state.count++
//       state.lastMutation = 'Sammy'
//     },
//     incrementBy (state, { name, ag }) {
//       state.count += ag
//       state.lastMutation = name + ag
//     },
//     changeLoading (state, val) {
//       state.isLoading = val
//     }
//   },
//   // Pueden ser asyncronos
//   // son metodos que normalmente pueden despues llamar a lamutacion para cambiar el state
//   actions: {
//     // context es el que nos permite para poder llamar a cualquier mutations
//     async incrementRandomInt (context) {
//       context.commit('changeLoading', true)
//       const random = await getRandomInt()
//       context.commit('incrementBy', { name: 'actions', ag: random })
//       context.commit('changeLoading', false)
//     }
//   },
//   // es muy similar a las computadas
//   getters: {
//     squareCount (state) {
//       return state.count * state.count
//     }
//   }
// })
