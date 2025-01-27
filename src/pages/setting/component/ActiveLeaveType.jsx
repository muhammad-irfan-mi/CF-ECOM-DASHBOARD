import React, { useContext, useState } from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeContext } from '../../../context/ContextProvider';


function ActiveLeaveType() {

    const context = useContext(ThemeContext)
    const [leave, setLeave] = useState([
        {
            title: 'Winter Holiday',
            holidayDate: '23 jan, 2025',
            day: 'Thursday',
            session: 'day',
            holidayType: 'office Holiday'
        },
        {
            title: 'Winter Holiday',
            holidayDate: '23 jan, 2025',
            day: 'Thursday',
            session: 'day',
            holidayType: 'office Holiday'
        },
        {
            title: 'Winter Holiday',
            holidayDate: '23 jan, 2025',
            day: 'Thursday',
            session: 'day',
            holidayType: 'office Holiday'
        },
    ])


    return (
        <div className="mt-4">
            <div class="relative overflow-x-auto shadow-md py-3">
                <table class={`border-collapse w-full text-sm text-left`}>
                    <thead class={`text-md`}>
                        <tr >
                            <th scope="col" class="px-1 py-2 w-36">
                                Leave Type
                            </th>
                            <th scope="col" class="px-1 py-2 w-36">
                                Allowed Days
                            </th>
                            <th scope="col" class="px-1 py-2 w-36">
                                Leave Cycle
                            </th>
                            <th scope="col" class="px-1 py-2 w-36">
                                Carry Forward
                            </th>
                            <th scope="col" class="px-1 py-2">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {leave.map((data, i) => {
                            return <tr key={i} class={`border-b border-gray-600 hover:cursor-pointer`}>
                                <td class="px-1 py-2">
                                    {data.title}
                                </td>
                                <td class="px-1 py-2">
                                    {data.holidayDate}
                                </td>
                                <td class="px-1 py-2">
                                    {data.day}
                                </td>
                                <td class="px-1 py-2">
                                    {data.session}
                                </td>
                                <td class={`px-1 py-2 flex justify-around`}>
                                    <div className={`border px-2 p-1 w-20 space-x-1 rounded-lg text-blue-500 hover:text-blue-800 border-blue-500 hover:border-blue-800`} onClick={() => handlemodel(i)}>
                                        <ModeEditIcon />
                                        <button>Edit</button>
                                    </div>
                                    <div className={`border px-2 p-1 w-24 space-x-1 rounded-lg text-red-400 hover:text-red-600 border-red-400 hover:border-red-600`}>
                                        <DeleteIcon />
                                        <button>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        })}

                    </tbody>
                </table>
                <button className={`${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover} rounded-md px-5 p-2 mt-4`}>Load More</button>
            </div>
        </div>
    )
}

export default ActiveLeaveType
