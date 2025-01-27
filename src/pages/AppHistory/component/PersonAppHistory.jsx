import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ContextProvider'

function PersonAppHistory() {
    const context = useContext(ThemeContext)
    return (
        <div className='p-5'>
            <div className='flex justify-end'>
                <button type="button" className={`p-1 px-4 rounded-md font-semibold ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`}> Export App Usage</button>
            </div>
            <div className='text-center my-10'>
                <h3 className='mt-5 text-md'>Awais's app usage history</h3>
                <h3 className='mt-5 text-md'>No data found</h3>
            </div>
        </div>
    )
}

export default PersonAppHistory
