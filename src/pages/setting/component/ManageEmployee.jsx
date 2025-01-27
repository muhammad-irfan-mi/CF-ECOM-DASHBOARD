import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../../context/ContextProvider'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

function ManageEmployee() {
    const context = useContext(ThemeContext)
    const [action, setAction] = useState(null)
    const [length, setLength] = useState(5)
    const [leave, setLeave] = useState([
        {
            name: 'Desing Team',
            email: 'mirfan.dev0@gmail.com',
            employees: '3',
            version: 'N/A',
            head: 'M Irfan',
            teamName: 'Desing Team'
        },
        {
            name: 'Development Team',
            email: 'mirfan.dev0@gmail.com',
            version: 'N/A',
            employees: '5',
            head: 'M Irfan',
            teamName: 'Desing Team'
        },
        {
            name: 'Testing Team',
            email: 'mirfan.dev0@gmail.com',
            version: 'N/A',
            employees: '5',
            head: 'No Head Assing',
            teamName: 'Desing Team'
        },
    ])

    const handleAction = (index) => {
        setAction((prev) => (prev === index ? null : index));
    };
    return (
        <div className='p-5 h-[88vh] overflow-auto'>
            <div className={`flex justify-between text-lg ${context.colors.textColor}`}>
                <h3>Showing All Members {(length)}</h3>
                <button className={`p-5 py-2 rounded-lg ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`}>Create New Team</button>
            </div>
            <div className='p-5'>
                <div class="relative shadow-md">
                    <div class={`border-collapse w-full text-sm text-left`}>
                        <div className='flex justify-between w-[67%]'>
                            <h3 className='px-6 py-4'>Account Detail</h3>
                            <h3 className='px-6 py-4'>App Version</h3>
                            <h3 className='px-6 py-4'>Team</h3>
                        </div>

                        <div>
                            {leave.map((data, i) => {
                                return <div key={i} className={`flex justify-between items-center mt-1 border-b border-gray-400 ${context.colors.boxbg} px-2`}>
                                    <div className={` hover:cursor-pointer flex justify-between items-center w-[67%]`}>
                                    <h3 className={`h-10 w-10 rounded-full flex items-center justify-center ${context.colors.bgcolor} `}>{data.name.charAt(0)}</h3>
                                        <div className='p-2'>
                                            <h3 className='px-6'>{data.name}</h3>
                                            <h3 className='px-6'>{data.email}</h3>
                                            <h3 className='px-6'>---</h3>
                                        </div>
                                        <h3 className='px-6 py-4'>{data.version}</h3>
                                        <h3 className='px-6 py-4'>{data.teamName}</h3>
                                    </div>
                                    <div className='flex'>
                                        <div class={`px-3 py-4`}>
                                            <div className={`border border-blue-500 text-blue-500 hover:text-blue-800 hover:border-blue-800 px-2 p-1 space-x-2 rounded-lg `} onClick={() => handlemodel(i)}>
                                                <ModeEditIcon />
                                                <button>Edit</button>
                                            </div>
                                        </div>
                                        <div class="px-3 py-4 space-x-2">
                                            <div className={`border border-red-500 text-red-500 hover:text-red-800 hover:border-red-800 px-2 p-1 rounded-lg`}>
                                                <DeleteIcon />
                                                <button>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageEmployee
