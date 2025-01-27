import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../../context/ContextProvider'
import ActiveLeaveType from './ActiveLeaveType';
import ArchivedLeave from './ArchivedLeave';
import EditIcon from '@mui/icons-material/Edit';
import { Modal, Box, TextField, Button, Typography } from "@mui/material";


function LeaveSetting() {
    const context = useContext(ThemeContext)
    const tabs = [
        "Active Leave Type",
        "Archived Leaves"
    ];

    const [shortLeave, setShortLeave] = useState('')
    const [activeIndex, setActiveIndex] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [leaveMinutes, setLeaveMinutes] = useState("");
    const [editUserTag, setEditUserTag] = useState(false);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const handleSubmit = () => {
        setShortLeave(leaveMinutes);
        handleCloseModal();
    };

    const openUserTag = () => {
        setEditUserTag(true)
    }
    const closeUserTag = () => {
        setEditUserTag(false)
    }

    const renderContent = () => {
        switch (activeIndex) {
            case 0:
                return <ActiveLeaveType />;
            case 1:
                return <ArchivedLeave />;
            default:
                return <div>No Data</div>;
        }
    };

    return (
        <div className='p-5 h-[88vh] overflow-auto scrollbar-hide'>
            <div className={`${context.colors.boxbg} ${context.colors.textColor} rounded-md p-3`}>
                <div className='flex justify-between items-center'>
                    <h1>Leave Type Settings</h1>
                    <span className='hover:underline hover:text-blue-500'>Leave Type Settings</span>
                </div>
                <div className="border-b mt-3 text-start">
                    {tabs.map((tab, index) => {
                        const isActive = activeIndex === index;
                        return <button
                            key={index} onClick={() => setActiveIndex(index)}
                            // onClick={() => setSelectedTab(tab)}
                            className={`mr-3 px-2 text-sm font-medium ${isActive ?
                                context.mode === 'dark'
                                    ? `text-white border-b-[1px] border-b-white`
                                    : 'text-black border-b-[1px] border-b-black'
                                : context.mode === 'dark' ?
                                    `${context.colors.texthover}`
                                    : `border-b-2 border-transparent ${context.colors.borderhover}`
                                } focus:outline-none`}
                        >
                            {tab}
                        </button>
                    })}
                </div>
                <div className="mt-1">{renderContent()}</div>
            </div>
            <div className='flex justify-between mt-3'>
                <div className={`w-[49%] h-[1%] p-3 ${context.colors.boxbg} rounded-md`}>
                    <div className='flex justify-between'>
                        <h1>Short Leave</h1>
                        <span
                            className="hover:underline hover:text-blue-500 cursor-pointer"
                            onClick={handleOpenModal}
                        >
                            {shortLeave === "" ? "Enable Short Leave" : "Disable Short Leave"}
                        </span>
                    </div>
                    {shortLeave === "" ? (
                        <h1 className="mt-7">Yet to enable short leave.</h1>
                    ) : (
                        <div
                            className={`${context.colors.boxbg} p-3 rounded-lg flex justify-between text-sm mt-4`}
                        >
                            <h1>Short Leave: {shortLeave} Minutes</h1>
                            <span
                                className="hover:underline cursor-pointer"
                                onClick={handleOpenModal}
                            >
                                Edit
                            </span>
                        </div>
                    )}
                    {/* Modal Component */}
                    <Modal open={openModal} onClose={handleCloseModal}>
                        {shortLeave === "" ? (
                            // Existing Modal for enabling short leave
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: 400,
                                    bgcolor: "background.paper",
                                    boxShadow: 24,
                                    p: 4,
                                    borderRadius: 2,
                                }}
                            >
                                <Typography variant="h6" component="h2" mb={2}>
                                    Create Short Leave
                                </Typography>
                                <Typography mb={2}>
                                    Allowed short leave duration for a month period *
                                </Typography>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <TextField
                                        fullWidth
                                        type="number"
                                        variant="outlined"
                                        placeholder="Enter the value in minutes"
                                        value={leaveMinutes}
                                        onChange={(e) => setLeaveMinutes(e.target.value)}
                                    />
                                    <Typography>Minutes</Typography>
                                </div>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 3 }}
                                    onClick={handleSubmit}
                                >
                                    Create Short Leave
                                </Button>
                            </Box>
                        ) : (
                            // New Modal for disabling short leave
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: 400,
                                    bgcolor: "background.paper",
                                    boxShadow: 24,
                                    p: 4,
                                    borderRadius: 2,
                                }}
                            >
                                <Typography variant="h6" component="h2" mb={2}>
                                    Disable Short Leave
                                </Typography>
                                <Typography mb={2}>
                                    Are you sure to disable the short leave option? <br />
                                    Later you can enable the short leave option whenever it’s required.
                                </Typography>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        onClick={handleCloseModal}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => {
                                            setShortLeave("");
                                            handleCloseModal();
                                        }}
                                    >
                                        Disable Short Leave
                                    </Button>
                                </div>
                            </Box>
                        )}
                    </Modal>


                </div>
                <div className={`w-[49%] text-start p-3 ${context.colors.boxbg} rounded-md`}>
                    <h3 className='font-semibold'>Who can manage leaves & holidays?</h3>
                    <ol className='text-[12px] mt-2 text-red-400'>
                        <li>1. The selected users will get an email notification when someone applies for the leave</li>
                        <li>2. They have control to approve/reject all the applied leaves</li>
                        <li>3. They can add or edit the holidays</li>
                        <li>4. They can access all the members' leave details</li>
                    </ol>
                    <div className='flex gap-5 mt-3'>
                        <select name="" disabled={!editUserTag} id="" className='w-[80%] p-2 bg-transparent border rounded-lg'>
                            <option value="">Ahmad</option>
                            <option value="">Ali</option>
                            <option value="">Irfan</option>
                        </select>
                        <button className={`p-2 rounded-lg ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`} onClick={openUserTag}>
                            <EditIcon />
                        </button>
                    </div>
                    {editUserTag && <div className='flex justify-center gap-3 mt-3'>
                        <button className={`p-2 rounded-lg ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`}>
                            Save Changes
                        </button>
                        <button className={`p-2 rounded-lg ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`} onClick={closeUserTag}>
                            Close
                        </button>
                    </div>}
                </div>
            </div>

            <div className='flex justify-between mt-3 mb-14'>
                <div className={`w-[49%] text-start p-3 ${context.colors.boxbg} rounded-md`}>
                    <h3 className='font-semibold'>Annual Cycle Year Configuration</h3>
                    <p className='text-[12px] mt-2'>Choose the required annual cycle. Based on your selection, the leave balance will get reset.</p>
                    <select name="" id="" className=' w-[100%] my-2 p-2 bg-transparent border rounded-md'>
                        <option value="" className='bg-transparent'>Celander Year (1st jan to 31st dec)</option>
                        <option value="" className='bg-transparent'>Celander Year (1st april to 31st march)</option>
                    </select>
                    <div className='flex justify-center my-3'>
                        <button className={`${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover} p-2 rounded-lg`}>Save Changes</button>
                    </div>
                </div>
                <div className={`w-[49%] h-[1%] p-3 ${context.colors.boxbg} rounded-md`}>
                    <div className='flex justify-between'>
                        <h1>Permission</h1>
                    </div>
                    <div className={`rounded-lg flex text-sm my-4`}>
                        <input type="checkbox" name="" id="" className='w-5' />
                        <span className='ml-3'>Enable apply leave for past days</span>
                    </div>
                    <div className='flex justify-center my-3'>
                        <button className={`${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover} p-2 rounded-lg`}>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaveSetting
