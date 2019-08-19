const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.anecdote.id

      const anecdoteToChange = state.find(e => e.id === id)

      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }

      const newAnecdotes = state.map(e => (e.id !== id ? e : changedAnecdote))

      return newAnecdotes.sort((a, b) => b.votes - a.votes)
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.anecdotes.sort((a, b) => b.votes - a.votes)
    default:
      return state
  }
}

export default anecdoteReducer
