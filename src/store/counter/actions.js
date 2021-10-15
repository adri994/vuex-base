import getRandomInt from '../../helpers/getRandomInt'

// context es el que nos permite para poder llamar a cualquier mutations
export const incrementRandomInt = async (context) => {
  context.commit('changeLoading', true)
  const random = await getRandomInt()
  context.commit('incrementBy', { name: 'actions', ag: random })
  context.commit('changeLoading', false)
}
