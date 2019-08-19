import anecdoteService from './services/anecdotes'

export const vote = anecdote => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.update(anecdote)

    dispatch({
      type: 'VOTE',
      anecdote: newAnecdote
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)

    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
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
