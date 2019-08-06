import React from 'react'
import { createAnecdote, vote } from './reducers/anecdoteReducer'

const App = ({ store }) => {
  const anecdotes = store.getState()

  const addVote = id => {
    store.dispatch(vote(id))
  }

  const addAnecdote = event => {
    event.preventDefault()

    store.dispatch(createAnecdote(event.target.anecdote.value))

    event.target.anecdote.value = ''
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => addVote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default App
