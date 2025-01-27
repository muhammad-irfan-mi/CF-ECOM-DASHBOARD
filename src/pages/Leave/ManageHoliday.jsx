import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ContextProvider";
import AddIcon from "@mui/icons-material/Add";
import HolidayCalender from "../../component/model/HolidayCalender";
import Addholiday from "../../component/model/Addholiday";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

function ManageHoliday() {
    const context = useContext(ThemeContext);
    const currentYear = new Date().getFullYear();
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [model, setModel] = useState(false)
    const [selectedId, setSelectedId] = useState(null);
    const handlemodel = (id = null) => {
        if (!model) {
            setModel(true)
            setSelectedId(id);
        }
        else {
            setModel(false)
            setSelectedId(null);
        }
    }
    const [leave, setLeave] = useState([
        {
            title: 'Winter Holiday',
            holidayDate: '23 jan, 2025',
            day: 'Thursday',
            session: 'Full day',
            holidayType: 'office Holiday'
        },
        {
            title: 'Winter Holiday',
            holidayDate: '23 jan, 2025',
            day: 'Thursday',
            session: 'Full day',
            holidayType: 'office Holiday'
        },
        {
            title: 'Winter Holiday',
            holidayDate: '23 jan, 2025',
            day: 'Thursday',
            session: 'Full day',
            holidayType: 'office Holiday'
        },
    ])

    return (
        <div className={`text-center h-[89vh] py-8 overflow-auto ${context.colors.bgcolor} ${context.colors.textColor}`}>
            <div className="flex justify-between items-center px-7">
                {/* Year Selector and Dropdown */}
                <div className="flex space-x-4">
                    <HolidayCalender
                        selectedYear={selectedYear}
                        setSelectedYear={setSelectedYear}
                    />
                    <select
                        className={`w-48 px-4 py-2 text-sm border rounded-md ${context.colors.texthover} ${context.colors.boxbg} ${context.colors.textColor}`}
                    >
                        <option>Select Holiday</option>
                        <option>Public Holiday</option>
                        <option>Office Holiday</option>
                        <option>Floater Holiday</option>
                    </select>
                </div>

                {/* Buttons */}
                <div className="flex gap-8">
                    <button
                        className={`w-48 p-2 px-3 rounded-md ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`}
                        type="button"
                        onClick={() => handlemodel()}
                    >
                        <AddIcon /> Add Holiday
                    </button>
                    <button
                        className={`w-48 p-2 px-3 rounded-md ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`}
                        type="button"
                    >
                        Export
                    </button>
                </div>
            </div>

            <div className="p-5 mt-5">
                <div class="relative overflow-x-auto shadow-md">
                    <table class={`border-collapse w-full text-sm text-left`}>
                        <thead class={`text-md uppercase`}>
                            <tr className=''>
                                <th scope="col" class="px-6 py-4">
                                    S.No
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Holiday Title
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    holiday Date
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Day
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Session
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Holiday Type
                                </th>
                                <th scope="col" class="px-6 py-3">
                                </th>
                                <th scope="col" class="px-6 py-3">
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {leave.map((data, i) => {
                                return <tr key={i} class={`${context.colors.boxbg} odd:${context.colors.table} ${context.colors.tablehover} hover:cursor-pointer`}>
                                    <th scope="row" class="px-6 py-4 font-medium">
                                        {i + 1}
                                    </th>
                                    <td class="px-6 py-4">
                                        {data.title} {data.leaveEnd}
                                    </td>
                                    <td class="px-6 py-4">
                                        {data.holidayDate}
                                    </td>
                                    <td class="px-6 py-4">
                                        {data.day}
                                    </td>
                                    <td class="px-6 py-4">
                                        {data.session}
                                    </td>
                                    <td class="px-6 py-4">
                                        {data.holidayType}
                                    </td>
                                    <td class={`px-6 py-4`}>
                                        <div className={`border px-2 p-1 space-x-2 rounded-lg ${context.colors.texthover}`} onClick={() => handlemodel(i)}>
                                            <ModeEditIcon />
                                            <button>Edit</button>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 space-x-2">
                                        <div className={`border px-2 p-1 space-x-2 rounded-lg ${context.colors.texthover}`}>
                                            <DeleteIcon />
                                            <button>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {model && <Addholiday closeModel={handlemodel} selectedId={selectedId} />}

        </div>
    );
}

export default ManageHoliday;
