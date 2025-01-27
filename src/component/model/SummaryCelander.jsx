import React, { useContext, useState } from "react";
import Calendar from "react-calendar/dist/cjs/Calendar.js";
import "react-calendar/dist/Calendar.css";
import { ThemeContext } from "../../context/ContextProvider";
import { Button } from "@mui/material";  

const SummaryCelander = ({ onClose, onRangeSelect }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [selectedRange, setSelectedRange] = useState("");
  const context = useContext(ThemeContext)

  const handleRangeClick = (range) => {
    const today = new Date();
    let startDate, endDate;

    switch (range) {
      case "Today":
        startDate = endDate = today;
        break;
      case "Yesterday":
        startDate = endDate = new Date(today.setDate(today.getDate() - 1));
        break;
      case "Last 7 Days":
        startDate = new Date(today.setDate(today.getDate() - 6));
        endDate = new Date();
        break;
      case "Last Week":
        const lastWeekStart = new Date(today.setDate(today.getDate() - today.getDay() - 7));
        startDate = lastWeekStart;
        endDate = new Date(today.setDate(lastWeekStart.getDate() + 6));
        break;
      case "This Week":
        const thisWeekStart = new Date(today.setDate(today.getDate() - today.getDay()));
        startDate = thisWeekStart;
        endDate = new Date(today.setDate(thisWeekStart.getDate() + 6));
        break;
      case "This Month":
        startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        break;
      case "Last Month":
        startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        endDate = new Date(today.getFullYear(), today.getMonth(), 0);
        break;
      default:
        break;
    }

    const rangeString = `${range}: ${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
    setSelectedRange(rangeString);
    setDateRange([startDate, endDate]);
  };

  const onCalendarChange = (value) => {
    if (Array.isArray(value)) {
      setDateRange(value);
      const rangeString = `${value[0].toLocaleDateString()} - ${value[1].toLocaleDateString()}`;
      setSelectedRange(rangeString);
    }
  };

  const handleApply = () => {
    onRangeSelect(selectedRange);
    onClose();
  };

  return (
    <div className={`modal fixed inset-0 top-20 z-[99] flex items-center justify-center ${context.colors.textColor}`}>
      <div className={`modal-content p-7 rounded-lg shadow-lg w-[42%] ${context.colors.boxbg}`}>
        <div className="flex justify-between">
          {/* Calendar on the left */}
          <div className="calendar-container w-[47%] ">
            <Calendar
              className={`react-calendar rounded-lg`}
              selectRange={true}
              onChange={onCalendarChange}
              value={dateRange}
            />
          </div>

          {/* Buttons on the right */}
          <div className="filters-container w-[45%]">
            <h3 className="text-start mb-5"> Filter by Period</h3>
            <div className="filters flex flex-wrap gap-2">
              {["Today", "Yesterday", "Last 7 Days", "Last Week", "This Week", "This Month", "Last Month"].map(
                (range) => (
                  <button
                    key={range}
                    className={`filter-button w-[48%] px-2 py-1 rounded-md ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`}
                    onClick={() => handleRangeClick(range)}
                  >
                    {range}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="modal-actions flex justify-between mt-4">
          <Button
          color="info"
          variant="contained"
            className="cancel-button px-4 py-2 bg-gray-300 rounded-md"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
          color="info"
          variant="contained"
            className="apply-button px-4 py-2 rounded-md "
            onClick={handleApply}
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SummaryCelander;