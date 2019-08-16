import React from 'react'
import { vote, hideNotification } from '../reducers/helpers'

const AnecdoteList = ({ store }) => {
  const anecdotes = store.getState().anecdotes

  const addVote = anecdote => {
    store.dispatch(vote(anecdote))

    setTimeout(() => store.dispatch(hideNotification()), 5000)
  }

  return (
    <div>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => addVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
