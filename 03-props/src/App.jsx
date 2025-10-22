import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Aman' age={18} img='https://images.unsplash.com/photo-1748194449476-b3a2a2bec4ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc1fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600' />
      <Card user='Sarthak' age={28} img='https://images.unsplash.com/photo-1752524722694-e0976575a993?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600' />
        <Card user='Aditya' age={22} img='https://images.unsplash.com/photo-1751178185249-f382832343c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExM3xDRHd1d1hKQWJFd3x8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600'/>
      
    </div>
  )
}

export default App