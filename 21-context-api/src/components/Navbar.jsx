import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'

// const Navbar = ({children,theme}) => {
//   console.log(children);
//   return (
//     <div className='nav'>
//       <h2>Sheryians</h2>
//       <Nav2 theme={theme}/>
//     </div>
//   )
// }
// const Navbar = (props) => {
//   console.log(props.children);
//   return (
//     <div className='nav'>
//       <h2>Sheryians</h2>
//       <Nav2 theme={props.theme}/>
//     </div>
//   )
// }


const Navbar = () => {

//  const data = useContext(PostDataContext)
 const [theme] = useContext(ThemeDataContext)
  return (
    <div className={theme}>
      <h2>Sheryians</h2>
      <Nav2 />
    </div>
  )
}

export default Navbar
