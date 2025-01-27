import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ContextProvider';
import SearchIcon from '@mui/icons-material/Search';

function Screenshot() {
    const [selectedMember, setSelectedMember] = useState(null);
    const context = useContext(ThemeContext)
    const members = [
        { id: 1, name: 'Awais' },
        { id: 2, name: 'Irfan' },
        { id: 3, name: 'Ali' },
        { id: 4, name: 'Hassan' },
        { id: 5, name: 'Sara' },
    ];

    return (
        <div className={`h-[89vh] flex ${context.mode == 'dark' ? 'bg-[#08020d]' : 'bg-white'}`}>
            {/* Sidebar */}
            <div className="w-[19%] border-r border-r-gray-400 py-6">
                <div className={`flex rounded-md w-[90%] mx-auto justify-between items-center p-2 mb-5 ${context.mode == 'dark'? 'bg-[#27272a]':'bg-[#f1f5f9]'}`}>
                    <input type="search" className="outline-0 bg-transparent w-full text-white" placeholder="Search Member" />
                    <span className="text-slate-300 ml-2"><SearchIcon/></span>
                </div>

                <div >
                    {members.map((member) => (
                        <button
                            key={member.id}
                            className={`flex items-center w-full p-2 px-6 ${context.mode == 'dark'? 'text-white hover:bg-[#27272a]':'text-black hover:bg-[#f1f5f9]'}`}
                            onClick={() => setSelectedMember(member)}
                        >
                            {/* Circle with first letter */}
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500  font-bold mr-3">
                                {member.name.charAt(0)}
                            </div>
                            {member.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="w-[81%] p-5">
                <p className='text-red-500 capitalize'>note: if the user is inactive and capture the screenshot and then highlighted in red color</p>
                {selectedMember ? (
                    <>
                        <div className='flex items-between gap-4 mt-5'>
                            <input placeholder="Select date and time" className={`'mr-2 p-1 rounded-md ${context.colors.boxbg} ${context.colors.textColor}`} type="datetime-local" />
                            <div className={`flex rounded-lg w-[35%] p-1  justify-between items-center ${context.colors.boxbg} ${context.colors.textColor}`}>
                                {/* <span className="text-slate-300 text-2xl ml-2"><IoSearch /></span> */}
                                <input type="search" className="outline-0 bg-transparent w-[100%] px-2 ml-2 h-7" placeholder="Search Member" />
                            </div>
                            <div className={`text-xl flex px-2 p-1 ml-2 rounded-md ${context.colors.boxbg} ${context.colors.textColor}`}>
                                <input type="checkbox" name="" id="" />
                                <p className='ml-2 text-[16px]'>Select all</p>
                            </div>
                            <button className={`mx-1 p-1 px-3 rounded-md ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`} type="button">export</button>
                            <button className={`mx-1 p-1 px-3 rounded-md ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`} type="button">delete</button>
                        </div>
                        <div className=' flex justify-end gap-8 items-center w-[100%] mt-10'>
                            <label class="inline-flex items-center cursor-pointer mx-4 w-fit">
                                <p className='capitalize font-semibold text-[#b2b2b6] mx-3'>idle screenshort</p>
                                <input type="checkbox" value="" class="sr-only peer" />
                                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>

                            </label>

                            <button type="button" className={`p-1 px-4 rounded-md font-semibold ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`}> Newest &#8595;</button>

                        </div>

                        <div className='flex cursor-pointer mt-20 justify-center'>
                            <p className={`text-2xl text-center font-semibold ${context.mode == 'dark'? 'text-[#dbdbe7]':'text-gra'}`}>yet to capture screenshot</p>
                        </div>
                    </>
                ) : (
                    <div className={`${context.mode == 'dark' ? 'text-gray-200' : ' text-[#7d7d85]'}`}>
                        <h1 className="text-2xl font-bold">Select a Member</h1>
                        <p className="mt-3 text-lg">Click on a name from the sidebar to view details.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Screenshot;
