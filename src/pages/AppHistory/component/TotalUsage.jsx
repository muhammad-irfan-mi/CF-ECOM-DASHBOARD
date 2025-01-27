import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ContextProvider'

function TotalUsage() {
    const context = useContext(ThemeContext)
    return (
        <div className=''>
            <h1 className={`text-sm text-center mt-40 ${context.mode == 'dark' ? 'text-white' : 'text-black'}`}>No Data</h1>
        </div>
    )
}

export default TotalUsage
