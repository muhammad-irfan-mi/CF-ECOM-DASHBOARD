import { Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ContextProvider'
import person from '../../assets/images/person.jpg'

function MyTeam() {
    const context = useContext(ThemeContext)
    const [activeIndex, setActiveIndex] = useState(0);
    const workcheck = [
        { text: "All Members" },
        { text: "Currently on Working" },
        { text: "Currently on Break" },
        { text: "Stopped Work" },
        { text: "On Leave" },
        { text: "yet to Start" },
        { text: "App Not Installed" },
    ]
    const acitveData = [
        { name: 'Irfan', activeTime: 2, status: 'Desktop App Installed', workHour: '3', workmin: '20' },
        { name: 'Irfan', activeTime: 2, status: 'Desktop App Not Installed', workHour: '3', workmin: '20' },
        { name: 'Irfan', activeTime: 2, status: 'Desktop App Not Installed', workHour: '3', workmin: '20' },
    ]
    return (
        <div className={`h-[89vh] ${context.colors.bgcolor}`}>
            <div className='p-5 px-10'>
                <div className='flex justify-around'>
                    {workcheck.map((data, i) => {
                        const isActive = activeIndex === i;
                        return <button key={i} onClick={() => setActiveIndex(i)} className={`border transition duration-400 h-8 p-1 px-2 text-[15px] flex items-center rounded-full ${isActive
                                ? context.mode === 'dark'
                                    ? 'text-white border-white'
                                    : 'text-black border-black'
                                : context.mode === 'dark'
                                    ? 'hover:border-white hover:text-white text-[#b2b2b6] border-[#b2b2b6]'
                                    : 'hover:border-black hover:text-black border-[#7d7d85] text-[#7d7d85]'
                            }`}
                        >{data.text}(4)</button>
                    })}
                </div>
                <div className={`flex gap-3 my-6 ${context.mode == 'dark' ? 'text-[#dbdbe7]' : 'text-black'}`}>
                    {acitveData.map((data, i) => {
                        return <div className={`w-[33%] border rounded-md p-5 text-center hover:shadow-lg ${context.mode == 'dark' ? 'border-[#b2b2b6]' : ''}`}>
                            <div className='flex justify-between items-center text-sm'>
                                <div className='flex gap-2 items-center'>
                                    <img src={person} alt="error" className='h-14 w-14 border rounded-full' />
                                    <div className='text-start'>
                                        <h3 className={`text-lg font-semibold`}>{data.name}</h3>
                                        <h3>Yet to Start</h3>
                                    </div>
                                </div>
                                <div className='text-start'>
                                    <h3 className={`text-3xl font-semibold`}>{data.activeTime}%</h3>
                                    <h3>Active Time</h3>
                                </div>
                            </div>
                            <h3 className='border inline-block mt-5 p-1 text-sm rounded-md'>{data.status}</h3>
                            <div className='flex justify-between mt-4'>
                                <h2>00 00</h2>
                                <div className='bg-gray-200 w-[60%] h-6 rounded-2xl'><div className='bg-blue-600 h-6 w-[20%] rounded-2xl'></div></div>
                                <h2>{data.workHour}h {data.workmin}m</h2>
                            </div>
                            <div className='flex justify-between text-sm'>
                                <h2>Check In</h2>
                                <h2>Hours Worked</h2>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>

    )
}

export default MyTeam
