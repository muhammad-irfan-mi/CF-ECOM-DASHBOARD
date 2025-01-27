import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../context/ContextProvider";
// import '../../style/Scroll.css'

const employees = [
    { id: 1, name: "Employee 1" },
    { id: 2, name: "Employee 2" },
    { id: 3, name: "Employee 3" },
    { id: 4, name: "Employee 3" },
    { id: 5, name: "Employee 3" },
    { id: 6, name: "Employee 3" },
    { id: 7, name: "Employee 3" }
];

const LateClockIn = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [daysInMonth, setDaysInMonth] = useState([]);
    const context = useContext(ThemeContext)
    useEffect(() => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const days = new Array(new Date(year, month + 1, 0).getDate())
            .fill(null)
            .map((_, index) => {
                const date = new Date(year, month, index + 1);
                return {
                    day: index + 1,
                    dayName: date.toLocaleDateString("en-US", { weekday: "long" }),
                };
            });
        setDaysInMonth(days);
    }, [currentMonth]);

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-6 px-7">
                <div className="flex space-x-4">
                    <select className={`w-48 px-4 py-1 text-sm border rounded-md ${context.colors.texthover} ${context.colors.boxbg} ${context.colors.textColor}`}>
                        <option>All Employees</option>
                        <option>Department A</option>
                        <option>Department B</option>
                    </select>
                    <input
                        type="month"
                        value={`${currentMonth.getFullYear()}-${String(
                            currentMonth.getMonth() + 1
                        ).padStart(2, "0")}`}
                        onChange={(e) =>
                            setCurrentMonth(new Date(e.target.value + "-01"))
                        }
                        className={`w-48 px-4 py-1 text-sm border rounded-md ${context.colors.texthover} ${context.colors.boxbg} ${context.colors.textColor}`}
                    />
                </div>
                <button className={`p-1 px-4 rounded-md ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`} type="button">export</button>
            </div>
            <div
                className="overflow-auto h-[70vh] transition duration-400 scrollbar-hide hover:scrollbar-thin hover:scrollbar-thumb-gray-700 hover:scrollbar-track-gray-400">
                <table className="border-collapse border border-gray-300">
                    {/* Table Header */}
                    <thead className={`sticky top-0 ${context.colors.boxbg} z-[99]`}>
                        <tr>
                            <th rowSpan={2} className={`border border-gray-300 py-6 w-64 h-[88px] fixed ${context.colors.boxbg}`}>Employees</th>
                            <th rowSpan={2} className="border border-gray-300 px-4 py-2">
                                Late Clock-In Days
                            </th>

                            {daysInMonth.map((day) => (
                                <th colSpan={2} key={day.day} className="border border-gray-300  px-4 py-2 text-center">
                                    <div>{String(day.day).padStart(2, "0")}</div>
                                </th>
                            ))}
                        </tr>
                        <tr>

                            {daysInMonth.map((day) => (
                                <>
                                    <th className="border border-gray-300 px-4 py-2 text-center">
                                        <div className="text-sm text-gray-500 w-16">Late By</div>
                                    </th>
                                    <th className="border border-gray-300 px-4 py-2 text-center">
                                        <div className="text-sm text-gray-500">Actual</div>
                                    </th>
                                </>
                            ))}
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {employees.map((employee) => (
                            <>
                                <tr key={employee.id}>
                                    {/* Fixed First Column */}
                                    <td className={`border p-4 min-w-64 sticky left-0 ${context.colors.boxbg}`}>
                                        {employee.name}
                                    </td>
                                    <td className="border min-w-28 border-gray-300">2</td>
                                    {daysInMonth.map((day) => (
                                        <>
                                            <td colSpan={2} className="border border-gray-300 text-center">
                                                <div> - </div>
                                            </td>
                                        </>
                                    ))}
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LateClockIn;
