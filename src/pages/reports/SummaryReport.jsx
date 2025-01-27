import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../context/ContextProvider";
// import '../../style/Scroll.css'
import SummaryCelander from "../../component/model/SummaryCelander";

const employees = [
    { id: 1, name: "Employee 1", totalMin: '00', totalHour: '00', activemin: '00', activeHour: '00', },
    { id: 2, name: "Employee 2", totalMin: '00', totalHour: '00', activemin: '00', activeHour: '00', },
    { id: 3, name: "Employee 3", totalMin: '00', totalHour: '00', activemin: '00', activeHour: '00', },
    { id: 4, name: "Employee 3", totalMin: '00', totalHour: '00', activemin: '00', activeHour: '00', }
];

const SummaryReport = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedRange, setSelectedRange] = useState("Select Date");
    const context = useContext(ThemeContext)


    return (
        <div className="pt-4 px-10">
            <div className="flex justify-between flex-wrap gap-5">
                <div className="date-range-picker w-[31%]">
                    <h3 className="mb-3 text-start">Date Range</h3>
                    <div
                        className={`selected-range w-full p-2 rounded-md cursor-pointer text-center ${context.colors.boxbg}`}
                        onClick={() => setIsOpen(true)}
                    >
                        {selectedRange}
                    </div>
                    {isOpen && (
                        <SummaryCelander
                            onClose={() => setIsOpen(false)}
                            onRangeSelect={(range) => {
                                setSelectedRange(range);
                                setIsOpen(false);
                            }}
                        />
                    )}
                </div>
                <div className="w-[31%]">
                    <h3 className="mb-3 text-start">Select Team</h3>
                    <select className={` px-4 py-2 w-full text-sm border rounded-md ${context.colors.texthover} ${context.colors.boxbg} ${context.colors.textColor}`}>
                        <option>All Employees</option>
                        <option>Department A</option>
                        <option>Department B</option>
                    </select>
                </div>
                <div className="w-[31%]">
                    <h3 className="mb-3 text-start">Report Type</h3>
                    <select className={` px-4 py-2 w-full text-sm border rounded-md ${context.colors.texthover} ${context.colors.boxbg} ${context.colors.textColor}`}>
                        <option>All Employees</option>
                        <option>Department A</option>
                        <option>Department B</option>
                    </select>
                </div>
                <button className={`p-1 mb-5 px-4 rounded-md ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`} type="button">export</button>
            </div>
            <div
                className="overflow-auto h-[70vh] transition duration-400 scrollbar-hide hover:scrollbar-thin hover:scrollbar-thumb-gray-700 hover:scrollbar-track-gray-400">
                <table className="border-collapse border border-gray-300">
                    {/* Table Header */}
                    <thead className={`sticky top-0 ${context.colors.boxbg} `}>
                        <tr>
                            <th rowSpan={2} className={`border border-gray-300 w-40 ${context.colors.boxbg}`}>Employees</th>
                            <th rowSpan={2} className="border border-gray-300 px-4 font-medium py-2">
                                Total Hours
                            </th>
                            <th rowSpan={2} className="border border-gray-300 px-4 font-medium py-2">
                                Active
                            </th>
                            <th rowSpan={2} className="border border-gray-300 px-6 font-medium py-2">
                                Idle
                            </th>
                            <th rowSpan={2} className="border border-gray-300 px-4 font-medium py-2">
                                Break
                            </th>
                            <th rowSpan={2} className="border border-gray-300 px-4 font-medium py-2">
                                Productive
                            </th>
                            <th rowSpan={2} className="border border-gray-300 px-4 font-medium py-2">
                                Unproductive
                            </th>
                            <th rowSpan={2} className="border border-gray-300 px-4 font-medium py-2">
                                Neutral
                            </th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {employees.map((employee) => (
                            <>
                                <tr key={employee.id}>
                                    {/* Fixed First Column */}
                                    <td className={`border p-4 min-w-40 sticky left-0 ${context.colors.boxbg}`}>
                                        {employee.name}
                                    </td>
                                    <td className="border px-2 w-44 border-gray-300">{employee.activemin}m {employee.activeHour}h</td>
                                    <td className="border px-2 w-44 border-gray-300">{employee.activemin}m {employee.activeHour}h</td>
                                    <td className="border px-2 w-44 border-gray-300">{employee.activemin}m {employee.activeHour}h</td>
                                    <td className="border px-2 w-44 border-gray-300">{employee.activemin}m {employee.activeHour}h</td>
                                    <td className="border px-2 w-44 border-gray-300">{employee.activemin}m {employee.activeHour}h</td>
                                    <td className="border px-2 w-44 border-gray-300">{employee.activemin}m {employee.activeHour}h</td>
                                    <td className="border px-2 w-44 border-gray-300">{employee.activemin}m {employee.activeHour}h</td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SummaryReport;
