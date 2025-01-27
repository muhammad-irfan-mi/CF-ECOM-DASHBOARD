import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../../context/ContextProvider'
import MoreVertIcon from '@mui/icons-material/MoreVert';

function ManageTeam() {
    const context = useContext(ThemeContext)
    const [action, setAction] = useState(null)
    const [leave, setLeave] = useState([
        {
            name: 'Desing Team',
            employees: '3',
            head: 'M Irfan',
        },
        {
            name: 'Development Team',
            employees: '5',
            head: 'M Irfan',
        },
        {
            name: 'Testing Team',
            employees: '5',
            head: 'No Head Assing',
        },
    ])

    const handleAction = (index) => {
        setAction((prev) => (prev === index ? null : index));
    };
    return (
        <div className='p-5 h-[88vh] overflow-auto'>
            <div className='flex justify-end'>
                <button className={`p-5 py-2 rounded-lg ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`}>Create New Team</button>
            </div>
            <div className='p-5'>
                <div class="relative  shadow-md">
                    <table class={`border-collapse w-full text-sm text-left`}>
                        <thead class={`text-md uppercase`}>
                            <tr className=''>
                                <th scope="col" class="px-6 py-4">
                                    Team Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Employees
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Team Head
                                </th>
                                <th scope="col" class="px-6 py-3">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {leave.map((data, i) => {
                                return <tr key={i} class={`border-b border-gray-700 ${context.colors.boxbg} odd:${context.colors.table} ${context.colors.tablehover} hover:cursor-pointer`}>
                                    <th scope="row" class="px-6 py-4 font-medium">
                                        {data.name}
                                    </th>
                                    <td class="px-6 py-4">
                                        {data.employees} Employees
                                    </td>
                                    <td class="px-6 py-4">
                                        {data.head}
                                    </td>
                                    <td class="px-4 py-4 relative text-end">
                                        <button onClick={() => handleAction(i)}>
                                            <MoreVertIcon />
                                        </button>
                                        {action === i && (<div className={`w-20 absolute top-5 text-start right-10 rounded-lg border border-gray-800 ${context.colors.bgcolor} ${context.colors.textColor}`}>
                                            <h3 className='p-2 px-3 hover:text-blue-600'>Edit</h3>
                                            <hr className='border-gray-800' />
                                            <h3 className='p-2 px-3 hover:text-red-600'>Delete</h3>
                                        </div>)}
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ManageTeam
