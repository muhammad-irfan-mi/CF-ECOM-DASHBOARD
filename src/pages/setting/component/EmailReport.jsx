import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../../context/ContextProvider'
import MoreVertIcon from '@mui/icons-material/MoreVert';

function EmailReport() {
    const context = useContext(ThemeContext)

    return (
        <div className='p-5 h-[88vh] overflow-auto'>
            <div className='flex justify-end'>
                <button className={`p-5 py-2 rounded-lg ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`}>Create New Team</button>
            </div>
            <div className='p-5 mt-10'>
                <h3>No Report Created!</h3>
            </div>
        </div>
    )
}

export default EmailReport
