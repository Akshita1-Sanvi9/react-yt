// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'

// const App = () => {
//   //  const [num, setnum] = useState(0)
//   //  const [num2, setnum2] = useState(100)

//   // useEffect(function(){
//   //   console.log('use effect is running');    
//   // },[num])
//   return (
//     <div>
//       {/* <h1> num {num}</h1>
//       <h1> num2 {num2}</h1>
//       <button
//       onMouseEnter={()=>{
//         setnum(num+1)
        
//       }}
//       onMouseLeave={()=>{
//         setnum2(num2+10)
//       }}
//       >Hover</button> */}
//     </div>
//   )
// }

//export default App






import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {

const [a, seta] = useState(0)
const [b, setb] = useState(0)
  function aChanging(){
    console.log('A ki value change ho gyi');
    
  }
   function bChanging(){
    console.log('B ki value change ho gyi');
  }
useEffect(function(){
  aChanging()
  },[a])
  useEffect(function(){
  bChanging()
  },[b])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
      onClick={()=>{
        seta(a+1)       
      }}>Change A</button>
      <button
      onClick={()=>{
        setb(b-1)
      }}>Change B</button>
    </div>
  )
}

export default App




