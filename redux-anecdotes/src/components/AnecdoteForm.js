import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote, setNotification } from '../actions'

const AnecdoteForm = ({ createAnecdote, setNotification }) => {
  const addAnecdote = async event => {
    event.preventDefault()

    createAnecdote(event.target.anecdote.value)

    setNotification(`You added '${event.target.anecdote.value}'`, 5)

    event.target.anecdote.value = ''
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
  setNotification
}

const connectedAnecdoteForm = connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)

export default connectedAnecdoteForm
