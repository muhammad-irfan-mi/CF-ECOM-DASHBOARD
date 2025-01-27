import React, { useContext, useState } from 'react'
import { Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { ThemeContext } from '../../context/ContextProvider';

function ApplyLeaveModel({ closeModel }) {
    const context = useContext(ThemeContext)
    const [formData, setFormData] = useState({ type: '', startDate: '', endDate: '' });
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const { type, startDate, endDate } = formData;

        // Calculate leave duration
        const start = new Date(startDate);
        const end = new Date(endDate);
        const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

        if (duration > 0 && type) {
            setArr((prevArr) =>
                prevArr.map((item) =>
                    item.word === type
                        ? { ...item, bookedDays: item.bookedDays + duration, booked: `${item.bookedDays + duration} days` }
                        : item
                )
            );

            // Add to past leaves
            setPastLeaves((prevLeaves) => [
                ...prevLeaves,
                { type, startDate, endDate, duration }
            ]);

            setIsModalOpen(false); // Close the modal after submitting
            setFormData({ type: '', startDate: '', endDate: '' }); // Reset form
        } else {
            alert('Please enter valid dates and leave type.');
        }
    };

    return (
        <div>
            <div className={`fixed inset-0 flex items-center justify-center bg-opacity-50 z-50`}>
                <div className={`${context.colors.boxbg} ${context.colors.textColor} rounded-lg shadow-lg p-5 w-[57%]`}>
                    <div className='flex justify-between items-start'>
                        <h2 className="text-2xl font-bold mb-4  text-blue-600">Apply for Leave</h2>
                        <Button color='black' onClick={closeModel}><CloseIcon /></Button>
                    </div>
                    <form onSubmit={handleFormSubmit}>
                        <div className='flex justify-between'>
                            <div className='w-[49%]'>
                                <div className="mb-2">
                                    <label className="block font-bold mb-1">Emplooye Name</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Your Name'
                                        className={`w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none ${context.colors.boxbg}`}
                                        value={formData.startDate}
                                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block font-bold mb-1">Leave Type</label>
                                    <select
                                        className={`w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none ${context.colors.boxbg}`}
                                        value={formData.type}
                                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    >
                                        <option value="">Select Leave Type</option>
                                        <option value="cl">Casual Leave</option>
                                        <option value="sl">Sick Leave</option>
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <label className="block font-bold mb-1">Start Date</label>
                                    <input
                                        type="date"
                                        className={`w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none ${context.colors.boxbg}`}
                                        value={formData.startDate}
                                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block font-bold mb-1">End Date</label>
                                    <input
                                        type="date"
                                        className={`w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none ${context.colors.boxbg}`}
                                        value={formData.endDate}
                                        onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                    />
                                </div>
                                <div className="mb-2">
                                    <textarea name="" id="" placeholder='Reason' rows={2} className={`border w-full mt-2 rounded-lg p-3 ${context.colors.boxbg}`}></textarea>
                                </div>
                            </div>
                            <div className='w-[49%]'>
                                <div className={`p-5 h-96 border rounded-md mt-4 ${context.colors.boxbg}`}>
                                    <h3>Your Leave Detail</h3>
                                    <div className='flex justify-between my-5 h-64 py-5 overflow-auto'>
                                        <h3>09 jan</h3>
                                        <h3>Full Day</h3>
                                    </div>
                                    <div className='flex justify-between '>
                                        <h3>09 jan</h3>
                                        <h3>Full Day</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center my-3">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white font-bold px-4 py-2 rounded-lg"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ApplyLeaveModel
