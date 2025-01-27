import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ContextProvider'

function Unreviewed() {
    const context = useContext(ThemeContext)
  return (
        <div className='p-5'>
            <div className='flex gap-7 items-center'>
                <input type="text" placeholder='Search App' className='px-3 focus:outline-blue-400 rounded-md p-1 w-[80%] bg-transparent border outline-none' />
                <button className={`px-3 py-1  rounded-md ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`}>Search App</button>
            </div>
            <h1 className='my-5'>No pending apps/sites to review</h1>
            <h1 className='my-10 text-center text-gray-400'>You have seen all the apps</h1>
        </div>
    )
}

export default Unreviewed
