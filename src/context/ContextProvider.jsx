import React, { createContext, useState } from 'react'
export const ThemeContext = createContext(null)

export const ContextProvider = ({ children }) => {
const [mode, setMode] = useState('dark')
const [user, setUser] = useState([])

const colors = {
  bgcolor: 'bg-[#fbfbfb]',
  sidebarBg:'bg-[#2b3445]',
  boxbg:'bg-[#ffffff]',
  boxbtn:"bg-[#323b4c]",
  boxbtnText:"text-[#3255d5]",
  btn: 'bg-[#4e97fd] text-gray-100',
  btnhover:'hover:bg-[#2756b6] hover:text-white',
  // btntext1: "",
  // btn: "",
  btntext: mode === 'dark' ? 'text-gray-700' : 'text-[#dcdcdc]',
  textColor: mode === 'dark' ? 'text-[#b2b2b6]' : 'text-[#7d7d85]',
  borderhover: mode === 'dark' ? 'hover:border-white' : 'hover:border-black',
  texthover: mode === 'dark' ? 'hover:text-white' : 'hover:text-black',
  warning: mode === 'dark' ? '#ffc107' : '#ffdd57',

  table: mode === 'dark'? 'bg-[#1d1d20]':'bg-[#f5f5f8]',
  tablehover: mode === 'dark' ? 'hover:bg-[#18181b]' : 'hover:bg-[#f4f4f5]',

};

return(
  <>
  <ThemeContext.Provider value={{mode, setMode, colors, user, setUser}}>
    {children}
  </ThemeContext.Provider>
  </>
)
}
