import React from 'react'
import Card from './components/Card.jsx'
const App = () => {
  return (
    <div>
      <div className='card'>
        <h1>Akshita</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, doloremque.</p>
      </div>
      {/* {Card()} */}
      <Card />
    </div>
  )
}

export default App
