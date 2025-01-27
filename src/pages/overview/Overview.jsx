import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ContextProvider'
import WorkLoadAnalysis from '../../component/chart/WorkLoadAnalysis'
import { Typography } from '@mui/material'

function Overview() {
    const context = useContext(ThemeContext)
    const [count, setCount] = useState(4)
    const [data, setData] = useState([
        {
            text: "Total Team Members",
        },
        {
            text: "Currently Working",
        },
        {
            text: "Currently On Break",
        },
        {
            text: "Currently Stopped Work",
        },
        {
            text: "App Not Installed",
        }
    ])
    return (
        // 27272a
        <div className={`h-[89vh] p-3 px-10 overflow-auto ${context.mode == 'dark' ? 'bg-[#08020d]' : 'bg-white'}`}>
            <div className=''>
                <h3 className={`text-2xl font-semibold ${context.mode == 'dark' ? 'text-[#f4f4f5]' : ''}`}>Overview</h3>
                <div className={`flex gap-2`}>
                    {data.map((data, i) => {
                        return <div className={`w-[20%] my-2 p-3 py-5 rounded-md ${context.mode == 'dark' ? 'bg-[#18181b] text-gray-200' : 'bg-[#f4f4f5] text-[#7d7d85]'}`}>
                            <h3>{data.text}</h3>
                            <p className={`mt-3 text-2xl font-semibold`}>{count}</p>
                        </div>
                    })}
                </div>
                <div className={`flex flex-wrap gap-3 my-3`}>
                    <div className={`w-[49%] h-[55vh] p-4 rounded-md ${context.mode == 'dark' ? 'bg-[#18181b] text-gray-200' : 'bg-[#f4f4f5] text-[#7d7d85]'}`}>
                        <WorkLoadAnalysis />
                    </div>
                    <div className={`w-[49%] h-[55vh] p-4 rounded-md ${context.mode == 'dark' ? 'bg-[#18181b] text-gray-200' : 'bg-[#f4f4f5] text-[#7d7d85]'}`}>
                        <Typography variant='h6' className={`text-2xl font-semibold`}>Top Used Apps</Typography>
                        <h3 className={`text-center mt-10`}>No Data Found</h3>
                    </div>
                    <div className={`w-[49%] h-[55vh] p-4 rounded-md ${context.mode == 'dark' ? 'bg-[#18181b] text-gray-200' : 'bg-[#f4f4f5] text-[#7d7d85]'}`}>
                        <Typography variant='h6' className={`text-2xl font-semibold`}>Late Clock-in Employees</Typography>
                        <div className='px-16 py-4'>
                            <h3 className={`text-lg my-2 font-semibold`}>Set the expected clock-in time to get the live report</h3>
                            <ul className='disc '>
                                Here are the steps to set the expected clock-in time:
                                <li className='mt-3'>Visit Settings  Track Settings page </li>
                                <li className=''> Set the expected clock-in time </li>
                                <li className=''> Optionally, you can set the person-wise expected clock-in time</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`w-[49%] h-[55vh] p-4 rounded-md ${context.mode == 'dark' ? 'bg-[#18181b] text-gray-200' : 'bg-[#f4f4f5] text-[#7d7d85]'}`}>
                        <Typography variant='h6' className={`text-2xl font-semibold`}>Absence Today</Typography>
                        <div className='px-16 py-4'>
                            <h3 className={`text-lg my-2 font-semibold`}>Set the expected clock-in time to get the live report</h3>
                            <ul className='disc'>
                                Here are the steps to set the expected clock-in time:
                                <li className='mt-3'>Visit Settings  Track Settings page </li>
                                <li className=''> Set the expected clock-in time </li>
                                <li className=''> Optionally, you can set the person-wise expected clock-in time</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`w-[49%] h-[55vh] p-4 rounded-md ${context.mode == 'dark' ? 'bg-[#18181b] text-gray-200' : 'bg-[#f4f4f5] text-[#7d7d85]'}`}>
                        <Typography variant='h6' className={`text-2xl font-semibold`}>Top Used Apps</Typography>
                        <h3 className={`text-center mt-10`}>No Data Found</h3>
                    </div>
                    <div className={`w-[49%] h-[55vh] p-4 rounded-md ${context.mode == 'dark' ? 'bg-[#18181b] text-gray-200' : 'bg-[#f4f4f5] text-[#7d7d85]'}`}>
                        <Typography variant='h6' className={`text-2xl font-semibold`}>Top Used Apps</Typography>
                        <h3 className={`text-center mt-10`}>No Data Found</h3>
                    </div>
                    <div className={`w-[49%] h-[55vh] p-4 rounded-md ${context.mode == 'dark' ? 'bg-[#18181b] text-gray-200' : 'bg-[#f4f4f5] text-[#7d7d85]'}`}>
                        <Typography variant='h6' className={`text-2xl font-semibold`}>Top Used Apps</Typography>
                        <h3 className={`text-center mt-10`}>No Data Found</h3>
                    </div>
                    <div className={`w-[49%] h-[55vh] p-4 rounded-md ${context.mode == 'dark' ? 'bg-[#18181b] text-gray-200' : 'bg-[#f4f4f5] text-[#7d7d85]'}`}>
                        <Typography variant='h6' className={`text-2xl font-semibold`}>Top Used Apps</Typography>
                        <h3 className={`text-center mt-10`}>No Data Found</h3>
                    </div>
                    <div className={`w-[49%] h-[55vh] p-4 rounded-md ${context.mode == 'dark' ? 'bg-[#18181b] text-gray-200' : 'bg-[#f4f4f5] text-[#7d7d85]'}`}>
                        <Typography variant='h6' className={`text-2xl font-semibold`}>Top Used Apps</Typography>
                        <h3 className={`text-center mt-10`}>No Data Found</h3>
                    </div>
                </div >
            </div >
        </div>
    )
}

export default Overview
