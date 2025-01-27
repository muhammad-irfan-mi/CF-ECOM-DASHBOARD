import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ContextProvider";
import WorkedEmployee from "../reports/DailyAttendenceComponenet/WorkedEmployee";
import AbsentEmployee from "../reports/DailyAttendenceComponenet/AbsentEmployee";
import LateEmployee from "../reports/DailyAttendenceComponenet/LateEmployee";
import Uninformedleave from "../reports/DailyAttendenceComponenet/Uninformedleave";
import PendingLeave from "./LeaveStatus/PendingLeave";
import ApprovedLeave from "./LeaveStatus/ApprovedLeave";
import RejectedLeave from "./LeaveStatus/RejectedLeave";
import AllLeave from "./LeaveStatus/AllLeave";

const ManageLeave = () => {
    const context = useContext(ThemeContext)
    const tabs = [
        "Approval Pending Leave",
        "Approved Leave",
        "Rejected Leave",
        "All Leaves",
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const renderContent = () => {
        switch (activeIndex) {
            case 0:
                return <PendingLeave />;
            case 1:
                return <ApprovedLeave />;
            case 2:
                return <RejectedLeave />;
            case 3:
                return <AllLeave />;
            default:
                return <div>No Data</div>;
        }
    };

    return (
        <div className={`text-center h-[89vh]  overflow-auto ${context.colors.bgcolor} ${context.colors.textColor}`}>
            {/* Tabs */}
            <div className="flex border-b mb-5">
                <div className="">
                    {tabs.map((tab, index) => {
                        const isActive = activeIndex === index;
                        return <button
                            key={index} onClick={() => setActiveIndex(index)}
                            // onClick={() => setSelectedTab(tab)}
                            className={`px-5 p-2 text-lg font-medium ${isActive ?
                                context.mode === 'dark'
                                    ? `text-white border-b-2 border-b-white`
                                    : 'text-black border-b-2 border-b-black'
                                : context.mode === 'dark' ?
                                    `${context.colors.texthover}`
                                    : `border-b-2 border-transparent ${context.colors.borderhover}`
                                } focus:outline-none`}
                        >
                            {tab}
                        </button>
                    })}
                </div>
            </div>

            {/* Filters */}
            <div className="flex justify-between items-center mb-6 px-7">
                <div className="flex space-x-4">
                    <select className={`w-48 px-4 py-2 text-sm border rounded-md ${context.colors.texthover} ${context.colors.boxbg} ${context.colors.textColor}`}>
                        <option>All Employees</option>
                        <option>Department A</option>
                        <option>Department B</option>
                    </select>
                    <select className={`w-48 px-4 py-2 text-sm border rounded-md ${context.colors.texthover} ${context.colors.boxbg} ${context.colors.textColor}`}>
                        <option>All Leaves</option>
                        <option>Complete</option>
                        <option>Short</option>
                    </select>
                </div>
                <button className={`p-2 px-3 rounded-md ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`} type="button">export</button>
            </div>
            
            {/* Data  */}
            <div>
            <div className="mt-10">{renderContent()}</div>
            </div>
        </div>
    );
};

export default ManageLeave;
