import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = ({ store }) => {
  console.log(store.getState())

  return (
    <div>
      <h1>Anecdotes</h1>
      <Notification store={store} />
      <AnecdoteForm store={store} />
      <AnecdoteList store={store} />
      <Filter store={store} />
    </div>
  )
}

export default App
