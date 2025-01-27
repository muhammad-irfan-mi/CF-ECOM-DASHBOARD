import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../../context/ContextProvider'

function ApprovedLeave() {
    const context = useContext(ThemeContext)
    const [leave, setLeave] = useState([
        {
            name: 'M Irfan',
            leaveStart: '10 jan, 2025',
            leaveEnd: '12 jan, 2025',
            duration: '3 Days',
            type: 'Sick',
            appliedOn: '9 jan, 2025',
            staus: 'Approved',
            reason: "No reaseon"
        },
        {
            name: 'M Irfan',
            leaveStart: '10 jan, 2025',
            leaveEnd: '12 jan, 2025',
            duration: '3 Days',
            type: 'Sick',
            appliedOn: '9 jan, 2025',
            staus: 'Rejected',
            reason: "No reaseon"
        },
    ])
    return (
        <div className='p-5'>
        <div class="relative overflow-x-auto shadow-md">
            <table class={`border-collapse w-full text-sm text-left`}>
                <thead class={`text-md uppercase`}>
                    <tr className=''>
                        <th scope="col" class="px-6 py-4">
                            Employee Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Leave Period
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Duration
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Type
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Applied On
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Reason
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {leave.map((data, i) => {
                        return <tr class={`${context.colors.boxbg} odd:${context.colors.table} ${context.colors.tablehover} hover:cursor-pointer`}>
                            <th scope="row" class="px-6 py-4 font-medium">
                                {data.name}
                            </th>
                            <td class="px-6 py-4">
                                {data.leaveStart} {data.leaveEnd}
                            </td>
                            <td class="px-6 py-4">
                                {data.duration}
                            </td>
                            <td class="px-6 py-4">
                                {data.type}
                            </td>
                            <td class="px-6 py-4">
                                {data.appliedOn}
                            </td>
                            <td class="px-6 py-4">
                                {data.staus}
                            </td>
                            <td class="px-6 py-4">
                                {data.reason}
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default ApprovedLeave
