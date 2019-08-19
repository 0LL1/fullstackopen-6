const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      return action.notification
    case 'HIDE_NOTIFICATION':
      return null
    default:
      return state
  }
}

export default notificationReducer
