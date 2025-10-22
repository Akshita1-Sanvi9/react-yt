import React from 'react'

const App = () => {

  // function btnClicked () {
  //   console.log('button is clicked');
    
  // }
  // function mouseEnter(){
  //   console.log('Mouse Entered');
  // }

  // function inputChanging(val){
  //   console.log(val);
  //}
 
//     // <div>
  
//      {/* <button  onClick={()=>{
//       console.log('Button clicked');
      
//      }}>Click here</button>
//      <button onClick={btnClicked}>explore this</button> */}

//      {/* 
//      <input onChange={function(elem){
//       console.log(elem.target.value);
//      }} type="text" placeholder='Enter Name'/> */}

// {/* <div onMouseMove={(elem)=>{
//   console.log(elem.clientX);
  
// }} className='box'></div> */}
const pagescrolling = (elem) =>{
  // console.log('page scrolling.... at speed',elem);
  if(elem>0){
    console.log('seedha scrolling');
    
  }else{
    console.log('ulta scrolling')
  }
  
}
 return (
<div onWheel={(elem)=>{
  //console.log(elem.deltaY);
  pagescrolling(elem.deltaY)
}}>

<div className="page1"></div>
<div className="page2"></div>
<div className="page3"></div>

    </div>
  )
}

export default App
