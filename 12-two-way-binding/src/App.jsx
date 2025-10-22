import React from 'react'
import { useState } from 'react';

const App = () => {

const [title, settitle] = useState('')
  const submitHandler = (e)=>{
    e.preventDefault();
    console.log('Form Submitted by',title);
    settitle('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input 
        type="text" 
        placeholder='Enter your name'
        value={title}
        onChange={(e)=>{
          // console.log(e.target.value)
          settitle(e.target.value)
        }}
        />
        <button>Submit</button>
       
      </form>
    </div>
  )
}

export default App
