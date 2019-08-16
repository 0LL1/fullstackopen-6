import React from 'react'
import { vote, hideNotification } from '../reducers/helpers'

const AnecdoteList = ({ store }) => {
  const anecdotes = store.getState().anecdotes
  const filter = store.getState().filter

  const anecdotesToShow = () =>
    anecdotes.filter(anecdote =>
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    )

  const addVote = anecdote => {
    store.dispatch(vote(anecdote))

    setTimeout(() => store.dispatch(hideNotification()), 5000)
  }

  return (
    <div>
      {anecdotesToShow().map(anecdote => (
        <div key={anecdote.id}>
          <p>{anecdote.content}</p>
          <p>
            {anecdote.votes} votes
            <button onClick={() => addVote(anecdote)}>vote</button>
          </p>
          <br />
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
