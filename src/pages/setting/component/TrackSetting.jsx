import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ContextProvider";

function TrackSetting() {
    const context = useContext(ThemeContext)
    // State for Work Day Settings
    const [workDays, setWorkDays] = useState({
        Monday: true,
        Tuesday: true,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: true,
        Sunday: false,
    });

    // State for Untracked Hours Settings
    const [includeUntrackedHours, setIncludeUntrackedHours] = useState(false);
    const [enableProject, setEnableProject] = useState(false);
    const [leaveManagement, setLeaveManagement] = useState(true);
    const [manualTime, setManualTime] = useState(false);
    const [untrackedHours, setUntrackedHours] = useState(false);
    const [emailReport, setEmailReport] = useState({
        showAllUsers: true,
        excludeAdminUsers: false,
        excludeAdminAndHeadUsers: false,
    });

    // State for Email Report Settings
    const [emailReportSettings, setEmailReportSettings] = useState({
        showAllUsers: true,
        excludeAdminUsers: false,
        excludeAdminAndHeadUsers: false,
    });

    // State for Screenshot Settings
    const [screenCaptureSettings, setScreenCaptureSettings] = useState({
        enableScreenCapture: true,
        blurScreenCapture: false,
        screenCaptureInterval: "Every 10 mins",
    });

    // State for Idle Time Settings
    const [idleTimeSettings, setIdleTimeSettings] = useState({
        idleTimeThreshold: 1,
    });

    // State for Permissions
    const [permissions, setPermissions] = useState({
        hideAdminTrackingData: true,
        allowEmployeeToSeeScreenCapture: false,
        allowEmployeeToDeleteScreenCapture: true,
        allowHeadsToDeleteAndExportScreenCapture: true,
        allowEmployeeToSeeTimesheet: true,
        allowEmployeeToSeeTimeLapseVideo: true,
        allowHeadsToReviewAppsAndSites: true,
        allowEmployeeToAccessWebsite: true,
        hideAdminTrackingDataAllPage: true,
    });

    // Function to handle Work Day checkboxes
    const handleWorkDayChange = (day) => {
        setWorkDays({ ...workDays, [day]: !workDays[day] });
    };

    // Function to handle Untracked Hours checkbox
    const handleIncludeUntrackedHoursChange = () => {
        setIncludeUntrackedHours(!includeUntrackedHours);
    };
    const handleEnableProject = () => {
        setEnableProject(!enableProject);
    };
    const handleLeaveManagement = () => {
        setLeaveManagement(!leaveManagement);
    };
    const handleManualTime = () => {
        setManualTime(!manualTime);
    };
    const handleUntrackedHours = () => {
        setUntrackedHours(!untrackedHours);
    };
    const handleEmailReport = () => {
        setEmailReport(!emailReport);
    };

    return (
        <div className={`"container text-start mx-auto p-4 h-[88vh] overflow-auto  ${context.colors.bgcolor} ${context.colors.textColor}`}>
            <div className="grid grid-cols-2 gap-4 ">
                <div className="left">
                    {/* Work Day Settings */}
                    <div className={`p-4 rounded-lg ${context.colors.boxbg}`}>
                        <h2 className="text-xl font-semibold mb-2">Work Day Settings</h2>
                        <h2>Chose Work day</h2>
                        <div className="grid grid-cols-3 gap-2">
                            {Object.keys(workDays).map((day) => (
                                <label
                                    key={day}
                                    className={`flex items-center p-2 rounded-md ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={workDays[day]}
                                        onChange={() => handleWorkDayChange(day)}
                                        className="mr-2"
                                    />
                                    <span className="">{day}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    {/* Work Time Settings */}
                    <div className={`p-4 rounded-lg mt-3 ${context.colors.boxbg}`}>
                        <h2 className="text-xl font-semibold mb-2">Work Time Settings</h2>

                        {/* Expected Work Hours */}
                        <div className="flex">
                            <label htmlFor="expectedWorkHours" className="block w-full">
                                <span className="">Expected work hours</span>
                                <select
                                    id="expectedWorkHours"
                                    className="border focus:outline-gray-400 rounded-md p-1 mt-1 w-[76%] bg-transparent"
                                >
                                    {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                                        <option key={hour} value={hour}>
                                            {hour} Hour{hour > 1 ? "s" : ""}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>

                        {/* Minimum Productive Work Hours */}
                        <div className="flex mt-2">
                            <label
                                htmlFor="minimumProductiveWorkHours"
                                className="block w-full"
                            >
                                <span className="">
                                    Minimum productive work hours
                                </span>
                                <select
                                    id="minimumProductiveWorkHours"
                                    className="border focus:outline-gray-400 bg-transparent rounded-md p-1 mt-1 w-[76%]"
                                >
                                    {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                                        <option key={hour} value={hour}>
                                            {hour} Hour{hour > 1 ? "s" : ""}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>

                        {/* organization */}
                        <div className="flex mt-2">
                            <label htmlFor="organizationTimezone" className="block w-full">
                                <span className="">Organization timezone</span>
                                <select
                                    id="organizationTimezone"
                                    className="border focus:outline-gray-400 bg-transparent rounded-md p-1 mt-1 w-[76%]"
                                >
                                    {[
                                        "America/New_York",
                                        "America/Chicago",
                                        "America/Denver",
                                        "America/Los_Angeles",
                                        "America/Phoenix",
                                        "America/Anchorage",
                                        "America/Honolulu",
                                        "America/Indianapolis",
                                        "America/Detroit",
                                        "America/Miami",
                                        "America/Dallas",
                                        "America/Seattle",
                                    ].map((city) => (
                                        <option key={city} value={city}>
                                            {city.replace("America/", "").replace("_", " ")}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>

                        {/* check in */}
                        <div className="flex mt-2">
                            <label htmlFor="organizationTimezone" className="block w-full">
                                <span className="">Expected Check-In</span>
                                <div className={`text-center rounded-md p-1 mt-1 w-[36%] ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`}>
                                    Check-in Time
                                </div>
                            </label>
                        </div>
                    </div>
                    {/* project */}
                    <div className={`p-3 mt-3 rounded-lg h-auto ${context.colors.boxbg}`}>
                        <h2 className="text-xl font-semibold mb-2">Project Management</h2>
                        <div className="mt-2">
                            <label className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    value="include"
                                    checked={enableProject}
                                    onChange={handleEnableProject}
                                    className="mr-2"
                                />
                                <span className="">Enable project management</span>
                            </label>
                        </div>

                        <div className="flex flex-col mt-2">
                            <label htmlFor="organizationTimezone" className="w-full">
                                <span className=" block">Project currency</span>
                                <select
                                    id="organizationTimezone"
                                    className="border focus:outline-gray-400 bg-transparent rounded-md p-1 mt-1 w-[76%]"
                                >
                                    {[
                                        "United States Dollar",
                                        "America/Chicago",
                                        "America/Denver",
                                        "America/Los_Angeles",
                                        "America/Phoenix",
                                        "America/Anchorage",
                                        "America/Honolulu",
                                        "America/Indianapolis",
                                        "America/Detroit",
                                        "America/Miami",
                                        "America/Dallas",
                                        "America/Seattle",
                                    ].map((city) => (
                                        <option key={city} value={city}>
                                            {city.replace("America/", "").replace("_", " ")}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                    </div>

                    {/* Leave management */}
                    <div className={`mt-4 p-3 rounded-lg ${context.colors.boxbg}`}>
                        <h2 className="text-xl font-semibold mb-2">Leave Management</h2>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={leaveManagement}
                                onChange={handleLeaveManagement}
                                className="mr-2"
                            />
                            <span className="">Enable Leave Management</span>
                        </div>
                    </div>

                    {/* manual time */}
                    <div className={`mt-4 p-3 rounded-lg ${context.colors.boxbg}`}>
                        <h2 className="text-xl font-semibold mb-2">Manual Time</h2>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={manualTime}
                                className="mr-2"
                                onChange={handleManualTime}
                            />
                            <span className="">
                                Enable manual time to everyone
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right colomn */}
                <div className="right">
                    {/* Untracked Hours Settings */}
                    <div className={`p-3 rounded-lg ${context.colors.boxbg}`}>
                        <h2 className="text-xl font-semibold mb-2">
                            Untracked Hours Settings
                        </h2>
                        <div className="flex items-center">
                            <span className="">
                                Exclude hours with internet interruptions in total work hours?
                            </span>
                        </div>
                        <div className="">
                            <label className="flex items-center mb-3">
                                <input
                                    type="radio"
                                    value="exclude"
                                    checked={untrackedHours}
                                    onChange={handleUntrackedHours}
                                    className="mr-2"
                                />
                                <span className="">
                                    Yes - Exclude the untracked hours from total work time
                                </span>
                            </label>
                        </div>
                        <div>
                            <label className="flex items-center mb-3">
                                <input
                                    type="radio"
                                    value="include"
                                    checked={!untrackedHours}
                                    onChange={handleUntrackedHours}
                                    className="mr-2"
                                />
                                <span className="">
                                    No - Include the untracked hours to total work time
                                </span>
                            </label>
                        </div>
                    </div>
                    {/* Email */}
                    <div className={`p-3 rounded-lg h-auto mt-2 ${context.colors.boxbg}`}>
                        <h2 className="text-xl font-semibold mb-2">
                            Email Report Settings
                        </h2>
                        <div className="mt-2">
                            <label className="flex items-center mb-2">
                                <input
                                    type="radio"
                                    value="exclude"
                                    checked={emailReport}
                                    onChange={handleEmailReport}
                                    className="mr-2"
                                />
                                <span className="">Show all users in report</span>
                            </label>
                        </div>

                        <div>
                            <label className="flex items-center mb-2">
                                <input
                                    type="radio"
                                    value="include"
                                    checked={!emailReport}
                                    onChange={handleEmailReport}
                                    className="mr-2"
                                />
                                <span className="">
                                    Exclude admin users in report
                                </span>
                            </label>
                        </div>

                        <div>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    value="include"
                                    checked={!emailReport}
                                    onChange={handleEmailReport}
                                    className="mr-2"
                                />
                                <span className="">
                                    Exclude admin & head users in report
                                </span>
                            </label>
                        </div>
                    </div>
                    {/* screen setting */}
                    <div className={` p-3 mt-3 rounded-lg h-auto ${context.colors.boxbg}`}>
                        <h2 className="text-xl font-semibold mb-2">Screen Settings</h2>
                        <div className="mt-2">
                            <label className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    checked={true}
                                    disabled
                                    className="mr-2"
                                />
                                <span className="">Enable screen capture</span>
                            </label>
                        </div>

                        <div className="mt-2">
                            <label className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    value="include"
                                    checked={includeUntrackedHours}
                                    onChange={handleIncludeUntrackedHoursChange}
                                    className="mr-2"
                                />
                                <span className="">Blur screen capture</span>
                            </label>
                        </div>

                        <div className="flex mt-2 text-start">
                            <label htmlFor="organizationTimezone" className="block w-full">
                                <span className="">Screen capture interval</span>
                                <select
                                    id="organizationTimezone"
                                    className="border focus:outline-gray-400 bg-transparent rounded-md p-1 mt-1 w-[76%]"
                                >
                                    {[
                                        "Every 10 mins",
                                        "Every 11 mins",
                                        "Every 12 mins",
                                        "Every 13 mins",
                                        "Every 14 mins",
                                        "Every 15 mins",
                                    ].map((min, i) => (
                                        <option key={i} value={min}>
                                            {min}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>

                        <div className="mt-2">
                            <label className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    checked={true}
                                    disabled
                                    className="mr-2"
                                />
                                <span className="">Allow to generate timelapse video</span>
                            </label>
                        </div>
                    </div>

                    {/* Ldle Time Setting */}
                    <div className={`mt-4 text-start p-3 rounded-lg ${context.colors.boxbg}`}>
                        <h2 className="text-xl font-semibold mb-2">Idle Time Setting</h2>
                        <div className="flex flex-col mt-2">
                            <label htmlFor="organizationTimezone" className="w-full">
                                <span className=" block">
                                    Start to consider as idle if the employee is inactive for
                                </span>
                                <select
                                    id="organizationTimezone"
                                    className="border focus:outline-gray-400 bg-transparent rounded-md p-1 mt-1 w-[26%]"
                                >
                                    {[
                                        "1 min",
                                        "2 min",
                                        "3 min",
                                        "4 min",
                                        "5 min",
                                        "6 min",
                                        "7 min",
                                        "8 min",
                                        "9 min",
                                        "10 min",
                                        "11 min",
                                        "12 min",
                                        "13 min",
                                        "14 min",
                                        "15 min",
                                        "16 min",
                                    ].map((min, i) => (
                                        <option key={i} value={min}>
                                            {min}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                    </div>

                    {/* premission */}

                    <div className={`mt-4 p-3  rounded-lg ${context.colors.boxbg}`}>
                        <h2 className="text-xl font-semibold">Premissions</h2>
                        <div className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                value={permissions.hideAdminTrackingData}
                                className="mr-2"
                            />
                            <span className="">
                                Hide the admin's tracking data from the team head view
                            </span>
                        </div>

                        <div className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                value={permissions.allowEmployeeToSeeScreenCapture}
                                disabled
                                className="mr-2"
                            />
                            <span className="">Allow the employee to see their screen capture</span>
                        </div>

                        <div className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                value={permissions.allowEmployeeToDeleteScreenCapture}
                                disabled
                                className="mr-2"
                            />
                            <span className="">
                                Allow the employee to delete their screen capture
                            </span>
                        </div>

                        <div className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                value={permissions.allowHeadsToDeleteAndExportScreenCapture}
                                className="mr-2"
                            />
                            <span className="">Allow heads to delete & export their team member's screenshot</span>
                        </div>

                        <div className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                value={permissions.allowEmployeeToSeeTimesheet}
                                disabled
                                className="mr-2"
                            />
                            <span className="">
                                Allow the employee to see their timesheet
                            </span>
                        </div>

                        <div className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                value={permissions.allowEmployeeToSeeTimeLapseVideo}
                                disabled
                                className="mr-2"
                            />
                            <span className="">
                                Allow the employee to see their time-lapse video
                            </span>
                        </div>

                        <div className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                value={permissions.allowHeadsToReviewAppsAndSites}
                                className="mr-2"
                            />
                            <span className="">Allow heads to review app & sites</span>
                        </div>

                        <div className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                value={permissions.allowEmployeeToAccessWebsite}
                                className="mr-2"
                            />
                            <span className="">Allow the employee to access website</span>
                        </div>

                        <div className="flex items-center mb-2">
                            <input
                                type="checkbox"
                                value={permissions.hideAdminTrackingDataAllPage}
                                className="mr-2"
                            />
                            <span className="">
                                Hide the admin's data from all pages
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrackSetting;
