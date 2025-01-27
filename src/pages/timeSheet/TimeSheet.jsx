import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ContextProvider';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function TimeSheet() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const context = useContext(ThemeContext)

    // Dropdown options
    const options = [
        "Clock In",
        "Clock Out",
        "Worked Hours",
        "Active Time",
        "Break Time",
        "Idle Time",
        "Productive Apps Time",
        "Unproductive Apps Time",
        "Neutral Apps Time",
        "Untrack Time",
        "Worked Days",
    ];

    // Data to display for each person
    const peopleData = [
        {
            name: "Awais Ishaq",
            data: [
                { label: "Clock In", value: "00:00" },
                { label: "Clock Out", value: "00:00" },
                { label: "Worked Hours", value: "00:00m" },
                { label: "Active Time", value: "00:00m" },
                { label: "Break Time", value: "00:00m" },
                { label: "Idle Time", value: "00:00m" },
                { label: "Productive Apps Time", value: "00:00" },
                { label: "Unproductive Apps Time", value: "00:00" },
                { label: "Neutral Apps Time", value: "00:00" },
                { label: "Untrack Time", value: "00:00" },
                { label: "Worked Days", value: "00:00" },
            ],
        },
        {
            name: "Awais Ishaq",
            data: [
                { label: "Clock In", value: "00:00" },
                { label: "Clock Out", value: "00:00" },
                { label: "Worked Hours", value: "00:00m" },
                { label: "Active Time", value: "00:00m" },
                { label: "Break Time", value: "00:00m" },
                { label: "Idle Time", value: "00:00m" },
                { label: "Productive Apps Time", value: "00:00" },
                { label: "Unproductive Apps Time", value: "00:00" },
                { label: "Neutral Apps Time", value: "00:00" },
                { label: "Untrack Time", value: "00:00" },
                { label: "Worked Days", value: "00:00" },
            ],
        },
        {
            name: "Awais Ishaq",
            data: [
                { label: "Clock In", value: "00:00" },
                { label: "Clock Out", value: "00:00" },
                { label: "Worked Hours", value: "00:00m" },
                { label: "Active Time", value: "00:00m" },
                { label: "Break Time", value: "00:00m" },
                { label: "Idle Time", value: "00:00m" },
                { label: "Productive Apps Time", value: "00:00" },
                { label: "Unproductive Apps Time", value: "00:00" },
                { label: "Neutral Apps Time", value: "00:00" },
                { label: "Untrack Time", value: "00:00" },
                { label: "Worked Days", value: "00:00" },
            ],
        },
    ];

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedOptions([...options]);
        } else {
            setSelectedOptions([]);
        }
    };

    const handleOptionChange = (option) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((item) => item !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    return (
        <>
            <div className={`text-center h-[89vh]  overflow-auto ${context.colors.bgcolor} ${context.colors.textColor}`}>
                {/* Header */}
                <div className="py-5 p-5 flex justify-between items-center">
                    <div className="flex items-center">
                        <h1 className="font-semibold text-lg">
                            Note: Learn about timesheets effortlessly with{" "}
                            <Link
                                to="#"
                                className="text-blue-600 border-b border-blue-600 hover:no-underline"
                            >
                                this Link.
                            </Link>
                        </h1>
                    </div>

                    {/* Filter Dropdown */}
                    <div className="flex items-center gap-3">
                        <h1 className="text-lg">Filter Columns</h1>
                        <div className="relative rounded-lg w-52">
                            <div
                                onClick={toggleDropdown}
                                className={`p-2 border-gray-300 rounded flex justify-between items-center cursor-pointer ${context.colors.boxbg}`}
                            >
                                {/* {isOpen ? "You Selected This" : "Select Columns"} */}
                                {isOpen ? (
                                    <>
                                        Selected
                                        <KeyboardArrowUpIcon />
                                    </>
                                ) : (
                                    <>
                                        Select
                                        <KeyboardArrowDownIcon/>
                                    </>
                                )}
                            </div>

                            {isOpen && (
                                <div className={`absolute top-full mt-2 w-full rounded shadow-lg z-10 max-h-64 overflow-y-auto ${context.colors.boxbg} ${context.colors.textColor}`}>
                                    <div className="px-4 py-2 border-b border-gray-200">
                                        <label className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                checked={selectedOptions.length === options.length}
                                                onChange={handleSelectAll}
                                                className="form-checkbox h-4 w-4 text-blue-600"
                                            />
                                            <span>Select All</span>
                                        </label>
                                    </div>
                                    {options.map((option, index) => (
                                        <div key={index} className="px-4 py-2 border-b border-gray-200">
                                            <label className="flex items-center space-x-2">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedOptions.includes(option)}
                                                    onChange={() => handleOptionChange(option)}
                                                    className="form-checkbox h-4 w-4 text-blue-600"
                                                />
                                                <span>{option}</span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <button className={`"text-white bg-blue-600 px-4 py-1 rounded-lg ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`}>
                            <span className="text-xl">&#8595;</span> Export
                        </button>
                    </div >
                </div>

                <div className="mt-10">
                    <div className="flex justify-between items-center capitalize text-md border-b-2 border-slate-500">
                        <div className="w-[22%] text-start px-7 py-4">employee</div>
                        <div className="flex items-center w-[56%] justify-between px-3 border-slate-500">
                            <span className={`cursor-not-allowed flex items-center text-center h-6 w-6 text-md rounded-full ${context.colors.boxbg}`}>
                                <KeyboardArrowLeftIcon />
                            </span>
                            Today (13 Jan,2025)
                            <span className={`cursor-not-allowed flex items-center text-center h-6 w-6 text-md rounded-full ${context.colors.boxbg}`}>
                                <ChevronRightIcon />
                            </span>
                        </div>
                        <div className='w-[20%] text-start'> TOTAL WORK SUMMARY </div>
                    </div>

                    {peopleData.map((person, personIndex) => (
                        <div
                            key={personIndex}
                            className="flex justify-between mt-5 w-[100%]"
                        >
                            <div className="flex px-7 items-center w-[22%]">
                                <span className="bg-slate-500 rounded-full flex justify-center items-center text-white font-bold w-8 h-8">
                                    {person.name.charAt(0)}
                                </span>
                                <h2 className="text-lg font-semibold ml-2">{person.name}</h2>
                            </div>

                            <div className="flex justify-between items-center w-[78%] relative">
                                {/* Border styling with height */}
                                <div className="absolute left-0 top-[-75px] h-96  bottom-20 w-0.5 bg-gray-400"></div>

                                {/* Inner Boxes */}
                                <div className="flex justify-between items-center w-full">
                                    {/* Box 1 */}
                                    <div className="w-60 flex flex-col p-2 transition-transform duration-300 border rounded-lg border-dashed border-blue-600 mx-5">
                                        {selectedOptions.length === 0 ? (
                                            <p className="text-gray-500 font-bold flex w-[100%] justify-between items-center">
                                                Select something
                                            </p>
                                        ) : (
                                            person.data
                                                .filter((item) => selectedOptions.includes(item.label))
                                                .map((item, index) => (
                                                    <div
                                                        className="flex justify-between w-full"
                                                        key={index}
                                                    >
                                                        <p>{item.value}</p>
                                                        <p className="font-bold w-[55%] text-start">{item.label.split(" ")[0]}</p>
                                                    </div>
                                                ))
                                        )}
                                    </div>

                                    {/* Box 2 */}
                                    <div className={`w-48 flex flex-col p-2 transition-transform duration-300 border rounded-lg border-dashed  mx-5 border-blue-600`}>
                                        {selectedOptions.length === 0 ? (
                                            <p className="text-gray-500 font-bold flex w-[100%] justify-between items-center">
                                                Select something
                                            </p>
                                        ) : (
                                            person.data
                                                .filter((item) => selectedOptions.includes(item.label))
                                                .map((item, index) => (
                                                    <div
                                                        className="flex justify-between w-full"
                                                        key={index}
                                                    >
                                                        <p>{item.value}</p>
                                                        <p className="font-bold w-[60%] text-start">{item.label.split(" ")[0]}</p>
                                                    </div>
                                                ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default TimeSheet
