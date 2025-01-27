import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ContextProvider";

const CustomReport = () => {
    const context = useContext(ThemeContext)
    const [timeOptions, setTimeOptions] = useState([
        { label: "Total Worked Time", selected: true },
        { label: "Active Time", selected: true },
        { label: "Idle Time", selected: true },
        { label: "Clock In", selected: true },
        { label: "Clock Out", selected: true },
        { label: "Productive Apps Time", selected: true },
        { label: "Unproductive Apps Time", selected: true },
        { label: "Neutral Apps Time", selected: true },
        { label: "Break Time", selected: true },
    ]);

    const handleSelectAll = () => {
        setTimeOptions(timeOptions.map((option) => ({ ...option, selected: true })));
    };

    const handleUnselectAll = () => {
        setTimeOptions(timeOptions.map((option) => ({ ...option, selected: false })));
    };

    const toggleOption = (index) => {
        const updatedOptions = [...timeOptions];
        updatedOptions[index].selected = !updatedOptions[index].selected;
        setTimeOptions(updatedOptions);
    };

    return (
        <div className="p-4 px-7 h-[88vh] overflow-auto text-start">
            {/* Select Date */}
            <div className="mb-4 text-start">
                <label className="block font-medium mb-2">Select Date</label>
                <button className={`px-4 py-2 rounded-md ${context.colors.boxbg}`}>Today</button>
            </div>

            {/* Report Type */}
            <div className="mb-3">
                <label className={`"block font-medium mb-2`}>Report Type</label>
                <div className="flex items-center gap-4">
                    <label className="flex items-center">
                        <input type="radio" name="reportType" className="mr-2" defaultChecked />
                        Team Summary
                    </label>
                    <label className="flex items-center">
                        <input type="radio" name="reportType" className="mr-2" />
                        Organization Summary
                    </label>
                </div>
            </div>

            {/* Select Team */}
            <div className="mb-3">
                <label className="block font-medium mb-2">Select Team</label>
                <select className={`w-[30%] border p-2 rounded-md ${context.colors.boxbg}`}>
                    <option>All Teams</option>
                    <option>Team A</option>
                    <option>Team B</option>
                </select>
            </div>

            {/* Time Section */}
            <div className="mb-3">
                <label className="block font-medium my-4">Time</label>
                <div className="flex justify-end items-center mb-1">
                    <button
                        className="text-blue-500 underline"
                        onClick={handleUnselectAll}
                    >
                        Unselect All
                    </button>
                </div>
                <div className="grid grid-cols-3">
                    {timeOptions.map((option, index) => (
                        <label
                            key={index}
                            className="flex items-center gap-2 p-2 rounded-md"
                        >
                            <input
                                type="checkbox"
                                checked={option.selected}
                                onChange={() => toggleOption(index)}
                            />
                            {option.label}
                        </label>
                    ))}
                </div>
            </div>

            {/* Export Button */}
            <button className="mt-3 w-40 px-4 py-2 bg-blue-500 text-white rounded-md">
                Export as xlsx
            </button>
        </div>
    );
};

export default CustomReport;
