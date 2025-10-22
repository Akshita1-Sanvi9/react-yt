// import React, { useState } from 'react'

// const App = () => {
//   // let a = 20;
//   // function changeA(){
//   //   console.log(a);    
//   //   a++; 
//   //   console.log(a);  

//   // }

//   const [num, setNum] = useState(20)
//   const [username, setusername] = useState('Akshita')
//   const [users, setusers] = useState([10,20,30])

//   function changeNum(){
//     setNum(9) 
//     setusername('Sarthak')
//     setusers([30,40,50])   
//   }

//   return (
//     <div>
//       <h1>Value of num is {num} <br />{users}<br/> Value of user is {username}</h1>
//       <button onClick={changeNum}>Click me</button>
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)

  function increaseNum(){
    setnum(num+1)
  }
  function decreaseNum(){
    setnum(num-1)
  }
  function jumby5(){
    setnum(num+5)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button className='inc' onClick={increaseNum}>increase</button>
      <button className='dec' onClick={decreaseNum}>decrease</button>
      <button className='jum5' onClick={jumby5}>Increase 5</button>
    </div>
  )
}

export default App
