import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ContextProvider';
import CloseIcon from '@mui/icons-material/Close';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Button } from '@mui/material';
import ApplyLeaveModel from '../../component/model/ApplyLeaveModel';
// import { FaCalendarDays } from "react-icons/fa6";

function ApplyLeave() {
    const context = useContext(ThemeContext)
    const currentYear = new Date().getFullYear();
    const [activeTab, setActiveTab] = useState('upcoming'); // State to track the active button
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
    const [isOpen, setIsOpen] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState({ month: "", year: currentYear });
    const [year, setYear] = useState(currentYear)
    const [pastLeaves, setPastLeaves] = useState([]);
    const [upcomingLeaves, setUpcomingLeaves] = useState([]);

    const [leaveType, setLeaveType] = useState([
        { title: 'Casual Leave', word: 'cl', limit: 'Unlimited Leave', booked: '0 days', period: '2025 (Yearly)', bookedDays: 0 },
        { title: 'Sick Leave', word: 'sl', limit: 'Unlimited Leave', booked: '0 days', period: '2025 (Yearly)', bookedDays: 0 }
    ]);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const handleMonthClick = (month) => {
        setSelectedMonth((prev) => ({ ...prev, month }));
        setIsOpen(false);
    };

    const incrementYear = () => {
        setYear(year + 1);
    };

    const decrementYear = () => {
        setYear(year - 1);
    };

    const currentMonth = new Date().toISOString().slice(0, 7);

    const handleLeaveApplyModel = () => {
        if (!isModalOpen) {
            setIsModalOpen(true)
        }
        else {
            setIsModalOpen(false)
        }
    }

    return (
        <div className={`h-[89vh] overflow-auto ${context.colors.bgcolor} ${context.colors.textcolor}`}>
            <div className="p-5">
                <div className=" rounded-lg">
                    <div className="flex items-center text-lg font-lg text-slate-500">
                        Leave Balance as of
                        {/* <FaCalendarAlt className="mx-1 text-[13px]" /> */}
                        <input
                            type="month"
                            defaultValue={currentMonth}
                            className={` text-lg outline-none bg-transparent ml-3 ${context.mode == 'dark' ? 'text-white' : 'text-black'}`}
                        />
                    </div>
                    <div className={`flex mt-2 ${context.colors.textcolor}`}>
                        {leaveType.map((d, index) => (
                            <div key={index} className={`capitalize text-center mr-4 rounded-lg  p-8 ${context.colors.boxbg} ${context.colors.textColor}`}>
                                <h1 className='font-extrabold text-lg'>{d.title}</h1>
                                <p className={`capitalize font-bold text-3xl`}>{d.word}</p>
                                <p>{d.limit}</p>
                                <p>Booked: {d.booked}</p>
                                <p>Period: {d.period}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-5 border border-slate-500 min-h-[80vh] rounded-md">
                    <div className={`flex px-3 justify-between items-center rounded-t-lg border-b border-b-slate-500 ${context.colors.boxbg}`}>
                        <h1 className={`text-lg ${context.colors.textColor}`}>Applied Leave Details</h1>
                        <div>
                            <button
                                className={`font-medium text-lg ${activeTab === 'upcoming' ? `text-white border-b-[3px] border-white` : `${context.colors.textColor}`}`}
                                onClick={() => setActiveTab('upcoming')}
                                type="button"
                            >
                                Upcoming
                            </button>
                            <button
                                className={`mx-7 font-medium text-lg ${activeTab === 'past' ? `text-white border-b-[3px] border-white` : `${context.colors.textColor}`}`}
                                onClick={() => setActiveTab('past')}
                                type="button"
                            >
                                Past
                            </button>
                            <button className={`p-1 px-3 my-3 rounded-full ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`} type="button" onClick={handleLeaveApplyModel}>+ Apply Leave</button>
                        </div>
                    </div>

                    <div className="px-3">
                        <div className=' flex justify-end items-center py-2'>
                            <div className='cursor-pointer border-slate-200 text-slate-400 rounded-lg py-4 px-5 focus:outline-0 mr-2'>
                                <select name="" id="" className={`cursor-pointer border outline-none px-4 p-1 rounded-md ${context.colors.textColor} ${context.colors.boxbg} ${context.colors.texthover}`}>
                                    {leaveType.map((d, i) => {
                                        return <option key={i} className={`font-semibold rounded-md`} value="">{d.title}</option>
                                    })}
                                </select>
                            </div>
                            <div className="relative inline-block">
                                {/* Dropdown Trigger */}
                                <button
                                    className={`border rounded-lg px-3 font-semibold py-1 flex items-center justify-between w-60 ${context.colors.boxbg} ${context.colors.textColor} ${context.colors.texthover}`}
                                    onClick={() => setIsOpen(true)}
                                >
                                    <div className="flex items-center">
                                        <CalendarMonthIcon className="mr-2" />
                                        <span>
                                            {selectedMonth.month === "" || selectedMonth.month === "Select Month"
                                                ? "Select Month"
                                                : `${selectedMonth.month} ${year}`}
                                        </span>
                                    </div>
                                    {selectedMonth.month !== "" && selectedMonth.month !== "Select Month" && (
                                        <CloseIcon
                                            className="cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedMonth({ month: "Select Month", year: "" });
                                            }}
                                        />
                                    )}
                                </button>


                                {/* Dropdown Content */}
                                {isOpen && (
                                    <div className="absolute mt-2 w-64 bg-white border right-0 top-[90%] border-gray-300 rounded shadow-lg">
                                        {/* Header with Year Controls */}
                                        <div className="flex items-center text-slate-400 justify-between px-4 py-2 border-b border-gray-200">
                                            <button onClick={decrementYear} className="text-gray-700 hover:text-blue-600">&#x25C4;</button>
                                            <span className={`font-bold text-gray-700`}>{year}</span>
                                            <button onClick={incrementYear} className="text-gray-700 hover:text-blue-600"> &#x25BA;</button>
                                        </div>

                                        {/* Month Grid */}
                                        <div className="grid grid-cols-3 gap-2 p-4">
                                            {months.map((month) => (
                                                <button
                                                    key={month}
                                                    onClick={() => handleMonthClick(month)}
                                                    className={`px-3 py-2 text-center rounded ${selectedMonth.month === month
                                                        ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"}`}>
                                                    {month}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {activeTab === 'upcoming' && (
                            <div className='h-[100%] flex justify-center items-center'>
                                <p className="text-center text-slate-500 font-bold my-16 text-xl">You have no upcoming leaves.</p>
                            </div>
                        )}
                        {activeTab === 'past' && (
                            pastLeaves.length > 0 ? (
                                <ul>
                                    {pastLeaves.map((leave, index) => (
                                        <li key={index} className="mb-2 text-slate-600 font-bold">
                                            {leave.type.toUpperCase()} leave from {leave.startDate} to {leave.endDate} ({leave.duration} days)
                                        </li>
                                    ))}
                                </ul>
                            ) : (

                                <div className='h-[100%] flex justify-center items-center'>
                                    <p className="text-center my-10 text-slate-500 font-bold text-xl">You have seen all the leave.</p>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {isModalOpen && (
                    <ApplyLeaveModel closeModel={handleLeaveApplyModel} />
                )}
            </div>
        </div>
    );
}

export default ApplyLeave;