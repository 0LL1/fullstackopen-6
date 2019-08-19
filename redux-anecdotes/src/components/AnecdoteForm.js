import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote, hideNotification } from '../actions'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = ({ createAnecdote, hideNotification }) => {
  const addAnecdote = async event => {
    event.preventDefault()

    const content = event.target.anecdote.value

    event.target.anecdote.value = ''

    const newAnecdote = await anecdoteService.createNew(content)

    createAnecdote(newAnecdote)

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
