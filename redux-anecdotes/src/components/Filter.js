import React from 'react'
import { connect } from 'react-redux'
import { filterAnecdotes } from '../reducers/helpers'

const Filter = ({ filterAnecdotes }) => {
  const handleChange = event => {
    filterAnecdotes(event.target.value)
  }

  return (
    <div>
      <br />
      <label>
        filter
        <br />
        <input onChange={handleChange} />
      </label>
    </div>
  )
}

export default connect(
  null,
  { filterAnecdotes }
)(Filter)
