const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'VOTE':
      return `You voted '${action.anecdote.content}'`
    case 'NEW_ANECDOTE':
      return `You added '${action.data.content}'`
    case 'HIDE_NOTIFICATION':
      return null
    default:
      return state
  }
}

export default notificationReducer
