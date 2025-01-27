import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ContextProvider";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const HolidayCalender = ({ selectedYear, setSelectedYear }) => {
  const currentYear = new Date().getFullYear();
  const [startYear, setStartYear] = useState(Math.floor(currentYear / 10) * 10);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const context = useContext(ThemeContext)

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const renderYears = () => {
    const years = [];
    for (let i = startYear; i < startYear + 10; i++) {
      years.push(
        <button
          key={i}
          onClick={() => {
            setSelectedYear(i);
            setDropdownOpen(false);
          }}
          className={`px-4 py-2 text-center border rounded hover:bg-blue-500 hover:text-white ${
            i === selectedYear ? "bg-blue-500 text-white" : `${context.colors.boxbg}`
          }`}
        >
          {i}
        </button>
      );
    }
    return years;
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        readOnly
        value={selectedYear}
        onClick={toggleDropdown}
        className={`"w-full px-4 py-2 border rounded cursor-pointer ${context.colors.boxbg}`}
        placeholder="Select Year"
      />
      {dropdownOpen && (
        <div className="absolute left-0 w-full mt-2 border rounded shadow-md z-10">
          <div className={`flex items-center justify-between px-4 py-2  border-b ${context.colors.boxbg}`}>
            <button
              onClick={() => setStartYear((prev) => prev - 10)}
              className="px-2 py-1 text-gray-600 rounded hover:bg-gray-200"
            >
              <ArrowLeftIcon/>
            </button>
            <span className="font-medium">{`${startYear} - ${startYear + 9}`}</span>
            <button
              onClick={() => setStartYear((prev) => prev + 10)}
              className="px-2 py-1 text-gray-600 rounded hover:bg-gray-200"
            >
              <ArrowRightIcon/>
            </button>
          </div>
          {/* Year Grid */}
          <div className={`grid grid-cols-3 gap-2 p-4 ${context.colors.boxbg}`}>{renderYears()}</div>
        </div>
      )}
    </div>
  );
};

export default HolidayCalender;
