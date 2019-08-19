import anecdoteService from './services/anecdotes'

export const vote = anecdote => {
  return {
    type: 'VOTE',
    anecdote
  }
}

export const createAnecdote = data => {
  return {
    type: 'NEW_ANECDOTE',
    data
  }
}

export const hideNotification = () => {
  return {
    type: 'HIDE_NOTIFICATION'
  }
}

export const filterAnecdotes = text => {
  return {
    type: 'FILTER',
    text
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      anecdotes
    })
  }
}
