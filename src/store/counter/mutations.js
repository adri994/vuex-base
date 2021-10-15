
// por defecto siempre trae el state
export const increment = (state) => {
  state.count++
  state.lastMutation = 'Sammy'
}
export const incrementBy = (state, { name, ag }) => {
  state.count += ag
  state.lastMutation = name + ag
}

export const changeLoading = (state, val) => {
  state.isLoading = val
}
