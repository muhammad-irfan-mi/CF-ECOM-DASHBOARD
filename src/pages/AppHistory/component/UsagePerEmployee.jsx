import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../../context/ContextProvider'

const UsagePerEmployee = () => {
    const context = useContext(ThemeContext)
    const [data, setData] = useState([
        {
            name: "Irfan",
            team: 'Design Team',
            appweb: "Website",
            totaltime: "2 months"
        },
        {
            name: "Irfan",
            team: 'Design Team',
            appweb: "App",
            totaltime: "5 days"
        },
        {
            name: "Irfan",
            team: 'Development Team',
            appweb: "Website",
            totaltime: "2 weeks"
        },
        {
            name: "Irfan",
            team: 'Design Team',
            appweb: "App",
            totaltime: "2 months"
        },
        {
            name: "Irfan",
            team: 'Testing Team',
            appweb: "Website",
            totaltime: "1 year"
        },
    ])
    return (
        <div>
            <table className="min-w-full border-collapse ">
                <thead className="">
                    <tr className={`${context.mode == 'dark' ? 'text-white' : 'text-black'}`}>
                        <th className="px-4 pb-3 text-left font-semibold">Name</th>
                        <th className="px-4 pb-3 text-left font-semibold">Team</th>
                        <th className="px-4 pb-3 text-left font-semibold">App/Web</th>
                        <th className="px-4 pb-3 text-left font-semibold">Total Time</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, i) => (
                        <tr
                            key={i}
                            // className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                            //     } hover:bg-gray-100`}
                        >
                            <td className="px-4 py-2">
                                {user.name}
                            </td>
                            <td className="px-4 py-2">
                                {user.team}
                            </td>
                            <td className="px-4 py-2">
                                {user.appweb}
                            </td>
                            <td className="px-4 py-2">
                                {user.totaltime}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h1 className='text-center font-semibold mt-16'>No data found !!!</h1>
        </div>
    )
}

export default UsagePerEmployee
