import React, { useContext, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from '../../context/ContextProvider';
import AllTeamModel from '../model/AllTeamModel'
import InviteUser from '../model/InviteUser'

function Navbar() {
    const [model, setModel] = useState(false)
    const [userModal, setUserModal] = useState(false)
    const location = useLocation();
    const context = useContext(ThemeContext)

    const handleTeamModel = () => setModel(!model)
    const handleAddUserModel = () => {
        setUserModal(!userModal)
    }

    return (
        <>
            <div className={`w-full h-[67px] flex justify-between items-center shadow-lg ${context.colors.boxbg}`}>
                <div className={`flex items-center justify-between gap-7 w-full px-5`}>
                    <button className={` px-4 py-2 rounded ${context.colors.btn} ${context.colors.btnhover}`} onClick={handleAddUserModel}>
                        Add User
                    </button>
                    <div className='flex gap-5'>
                        <div className={`flex items-center pl-3 bg-[#2b3445] text-white border rounded-md`}>
                            <SearchIcon />
                            <input
                                type="text"
                                placeholder="Search Anythings ..."
                                className={`ml-3 p-2 w-full outline-none border-none bg-transparent`}
                            />
                        </div>
                        <div className={`${context.mode == 'dark' ? "text-[#b2b2b6]" : "text-[#7d7d85]"}`}>
                            <IconButton size="large" color="inherit" >
                                <NotificationsIcon className='text-gray-500' />
                            </IconButton>
                            <IconButton size="large" color="inherit" onClick={handleTeamModel}>
                                <AccountCircle className='text-gray-500' />
                            </IconButton>
                        </div>
                    </div>
                </div>
                {model && <AllTeamModel closeModel={handleTeamModel} />}
                {userModal && <InviteUser closeModel={handleAddUserModel} />}
            </div >
        </>
    )
}

export default Navbar
