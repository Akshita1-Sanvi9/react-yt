import React, { useState } from 'react'

const App = () => {

  //const [num, setnum] = useState({user:'Sarthak',age:20})
  // const [num, setnum] = useState([10,20,30])
  //const [num, setnum] = useState({user:'Rishi',age:17})
  const [num, setnum] = useState(10)

  const btnClicked = ()=>{
    // const newNum={...num};
    // newNum.user='Aman'
    // newNum.age=29
    // setnum(newNum)


    // const newNum=[...num];
    // newNum.push(99);
    // setnum(newNum)

    //setnum(prev=>({...prev,age:50}))
//setnum(num+1) 3 times will not increase by 3 times bcoz it is not able to identify num value which is known as batch update
    setnum(prev => (prev+1))
    setnum(prev => (prev+1))
    setnum(prev => (prev+1))
  }
  return (
    <div>
      {/* <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>Click</button> */}

      {/* <h1>{num.user},{num.age}</h1> */}
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
