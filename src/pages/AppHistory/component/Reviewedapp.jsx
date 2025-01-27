import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ContextProvider'

function Reviewedapp() {
    const context = useContext(ThemeContext)
  return (
        <div className='p-5'>
            <div className='flex gap-7 items-center'>
                <input type="text" placeholder='Search App' className='focus:outline-blue-400 px-3 rounded-md p-1 w-[80%] bg-transparent border outline-none' />
                <button className={`px-3 py-1  rounded-md ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`}>Search App</button>
            </div>
            <h1 className='my-10'>No Data found</h1>
        </div>
    )
}

export default Reviewedapp
