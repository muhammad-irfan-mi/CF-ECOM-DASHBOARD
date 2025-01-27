import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ContextProvider'

function TopUsedApp() {
    const context = useContext(ThemeContext)
    return (
        <div className='p-5'>
            <div className=''>
                <h1 className=' text-sm text-gray-400'>Note: Top used apps/sites in the last 30 days are listed here. Maximum of 50 apps/sites will be shown here.</h1>
            </div>
            <h1 className='my-10'>No data found</h1>
        </div>
    )
}

export default TopUsedApp
