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
      <form onSubmit={addAnecdote}>
        <div>
          <label>
            new anecdote
            <br />
            <input name="anecdote" />
          </label>
        </div>
        <button type="submit">create</button>
      </form>
      <br />
    </div>
  )
}

export default AnecdoteForm
