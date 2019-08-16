import React from 'react'
import { createAnecdote, hideNotification } from '../reducers/helpers'

const AnecdoteForm = ({ store }) => {
  const addAnecdote = event => {
    event.preventDefault()

    store.dispatch(createAnecdote(event.target.anecdote.value))

    event.target.anecdote.value = ''

    setTimeout(() => store.dispatch(hideNotification()), 5000)
  }

  return (
    <div>
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

export default AnecdoteForm
