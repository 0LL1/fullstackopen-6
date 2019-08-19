import React from 'react'
import { connect } from 'react-redux'
import { vote, setNotification } from '../actions'

const AnecdoteList = ({ anecdotesToShow, vote, setNotification }) => {
  const addVote = anecdote => {
    vote(anecdote)

    setNotification(`You voted '${anecdote.content}'`, 5)
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
  setNotification
}

const connectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default connectedAnecdoteList
