import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote, hideNotification } from '../reducers/helpers'

const AnecdoteForm = ({ createAnecdote, hideNotification }) => {
  const addAnecdote = event => {
    event.preventDefault()

    createAnecdote(event.target.anecdote.value)

    event.target.anecdote.value = ''

    setTimeout(() => hideNotification(), 5000)
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

const mapDispatchToProps = {
  createAnecdote,
  hideNotification
}

const connectedAnecdoteForm = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)

export default connectedAnecdoteForm
