import React from 'react'
import { filterAnecdotes } from '../reducers/helpers'

const Filter = ({ store }) => {
  const handleChange = event => {
    store.dispatch(filterAnecdotes(event.target.value))
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

export default Filter
