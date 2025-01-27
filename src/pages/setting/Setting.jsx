import React, { useContext, useState } from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import AddchartIcon from '@mui/icons-material/Addchart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TuneIcon from '@mui/icons-material/Tune';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { ThemeContext } from "../../context/ContextProvider";
import WidgetsIcon from '@mui/icons-material/Widgets';
// import DailyAttendence from "./DailyAttendence";
// import MonthlyAttendence from "./MonthlyAttendence";
// import MOnthlyInOut from "./MOnthlyInOut";
// import LateClockIn from "./LateClockIn";
// import OverTime from "./OverTime";
import Billing from "../../component/billing/Billing";
import DailyAttendence from "../reports/DailyAttendence";
import MonthlyAttendence from "../reports/MonthlyAttendence";
import MOnthlyInOut from "../reports/MOnthlyInOut";
import LateClockIn from "../reports/LateClockIn";
import OverTime from "../reports/OverTime";
import CustomReport from "../reports/CustomReport";
import ManageTeam from "./component/ManageTeam";
import ManageEmployee from "./component/ManageEmployee";
import EmailReport from "./component/EmailReport";
import RebrandSetting from "./component/RebrandSetting";
import LeaveSetting from "./component/LeaveSetting";
import TrackSetting from "./component/TrackSetting";
// import SummaryReport from "./SummaryReport";
// import CustomReport from "./CustomReport";

function Setting() {
    const context = useContext(ThemeContext);

    const members = [
        { id: 1, name: "Manage Teams", component: <ManageTeam />, icon: <PeopleAltIcon /> },
        { id: 2, name: "Manage Employees", component: <ManageEmployee />, icon: <PersonAddIcon /> },
        { id: 3, name: "Track Setting", component: <TrackSetting/>, icon: <TuneIcon /> },
        { id: 4, name: "Risk User Setting", component: <Billing/>, icon: <NotificationsIcon /> },
        { id: 5, name: "Email Reports", component: <EmailReport/>, icon: <EmailIcon /> },
        { id: 6, name: "Rebrand Setting", component: <RebrandSetting/>, icon: <LocalFloristIcon /> },
        { id: 7, name: "Leave Setting", component: <LeaveSetting/>, icon: <WidgetsIcon /> }
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
                {selectedMember &&
                    <>
                        <div className="flex justify-between items-center">
                            {/* <h2 className="text-2xl font-bold">{selectedMember.name}</h2> */}
                        </div>
                        <div className="my-1">{selectedMember.component}</div>
                    </>}
            </div>
        </div>
    );
}

export default Setting;
