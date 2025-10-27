import React, { createContext, useState } from 'react'

export const ThemeDataContext = createContext();

const ThemeContext = (props) => {

  const [theme, setTheme] = useState('light')
  return (
    <div>
     <ThemeDataContext.Provider value={[theme,setTheme]}>
       {props.children}
     </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext


// export const PostDataContext = createContext()
// const ThemeContext = (props) => {
//   return (
//     <div>
//       <PostDataContext.Provider value='Sarthak'>
//         {props.children}
//       </PostDataContext.Provider>
//     </div>
//   )
// }

// export default ThemeContext