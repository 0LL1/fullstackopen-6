import React from 'react'
import { connect } from 'react-redux'
import { vote, hideNotification } from '../reducers/helpers'

const AnecdoteList = ({ anecdotesToShow, vote, hideNotification }) => {
  const addVote = anecdote => {
    vote(anecdote)

    setTimeout(() => hideNotification(), 5000)
  }

  return (
    <div>
      {anecdotesToShow.map(anecdote => (
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

const filterAnecdotes = ({ anecdotes, textFilter }) =>
  anecdotes.filter(anecdote =>
    anecdote.content.toLowerCase().includes(textFilter.toLowerCase())
  )

const mapStateToProps = state => ({
  anecdotesToShow: filterAnecdotes(state)
})

const mapDispatchToProps = {
  vote,
  hideNotification
}

const connectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default connectedAnecdoteList
