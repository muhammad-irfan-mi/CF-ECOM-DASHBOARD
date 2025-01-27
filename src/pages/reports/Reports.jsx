import React, { useContext, useState } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import AddchartIcon from '@mui/icons-material/Addchart';
import AirplayIcon from '@mui/icons-material/Airplay';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import PollIcon from '@mui/icons-material/Poll';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { ThemeContext } from "../../context/ContextProvider";
import DailyAttendence from "./DailyAttendence";
import MonthlyAttendence from "./MonthlyAttendence";
import MOnthlyInOut from "./MOnthlyInOut";
import LateClockIn from "./LateClockIn";
import OverTime from "./OverTime";
import Billing from "../../component/billing/Billing";
import SummaryReport from "./SummaryReport";
import CustomReport from "./CustomReport";

function Reports() {
    const context = useContext(ThemeContext);

    const members = [
        { id: 1, name: "Daily Attendance", component: <DailyAttendence />, icon: <DateRangeIcon /> },
        { id: 2, name: "Monthly Attendance", component: <MonthlyAttendence />, icon: <CalendarMonthIcon /> },
        { id: 3, name: "Monthly In Out", component: <MOnthlyInOut/>, icon: <AccessTimeIcon /> },
        { id: 4, name: "Late Clock In", component: <LateClockIn/>, icon: <HistoryToggleOffIcon /> },
        { id: 5, name: "Over Time Report", component: <OverTime/>, icon: <MoreTimeIcon /> },
        { id: 6, name: "Custom Report", component: <CustomReport/>, icon: <AddchartIcon /> },
        { id: 7, name: "Apps & Site Usage", component: <Billing/>, icon: <AirplayIcon /> },
        { id: 8, name: "Work Activity Log", component: <Billing/>, icon: <BrowseGalleryIcon /> },
        { id: 9, name: "Work Load Analysis", component: <Billing/>, icon: <PollIcon /> },
        { id: 10, name: "Shift Time Report", component: <Billing/>, icon: <TrackChangesIcon /> },
        { id: 11, name: "Summary Report", component: <SummaryReport/>, icon: <SummarizeIcon /> },
    ];
    const [selectedMember, setSelectedMember] = useState(members[0]);

    return (
        <div
            className={`text-center h-[89vh] flex overflow-auto ${context.colors.bgcolor} ${context.colors.textColor}`}
        >
            {/* Sidebar */}
            <div className="w-[20%]">
                <div className="border-r h-[89vh] overflow-hidden border-r-gray-400">
                    {members.map((member) => (
                        <button
                            key={member.id}
                            className={`flex items-center w-full my-1 p-2 px-3 ${context.colors.textColor} ${context.colors.texthover} ${selectedMember?.id === member.id
                                    ? "bg-[#18181b] text-white"
                                    : ""
                                }`}
                            onClick={() => setSelectedMember(member)}
                        >
                            {/* Circle with first letter */}
                            <div className=" flex items-center mr-3">
                                {member.icon}
                            </div>
                            {member.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="w-[80%] h-[89vh] overflow-hidden">
                {selectedMember ? (
                    <>
                        <div className="flex justify-between items-center">
                            {/* <h2 className="text-2xl font-bold">{selectedMember.name}</h2> */}
                        </div>
                        <div className="my-1">{selectedMember.component}</div>
                    </>
                ) : (
                    <div
                        className={`${context.mode === "dark" ? "text-gray-200" : " text-[#7d7d85]"
                            }`}
                    >
                        <h1 className="text-2xl font-bold">Select a Member</h1>
                        <p className="mt-3 text-lg">
                            Click on a name from the sidebar to view details.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Reports;
