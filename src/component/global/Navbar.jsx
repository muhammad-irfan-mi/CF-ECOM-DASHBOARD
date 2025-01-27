import React, { useContext, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/images/timelogo.png'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupsIcon from '@mui/icons-material/Groups';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from '../../context/ContextProvider';
import AllTeamModel from '../model/AllTeamModel'

function Navbar() {
    const [model, setModel] = useState(false)
    const [userModal, setUserModal] = useState(false)
    const location = useLocation();
    const context = useContext(ThemeContext)
    console.log(context, "Irfan")

    const handleMode = () => {
        if (context.mode == 'dark') {
            context.setMode('light')
        }
        else {
            context.setMode('dark')
        }
    }
    const handleTeamModel = () => {
        setModel(!model)
    }

    return (
        <>
            <div className={`w-full h-[67px] flex justify-between items-center shadow-lg `}>
                {/* {context.mode == 'dark' ? <img src={logo} alt="" className='w-20 invert filter' /> :
                    <img src={logo} alt="" className='w-20' />} */}
                <div className={`flex items-center justify-end gap-7 w-full px-5`}>
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
                             <NotificationsIcon className='text-gray-500'/>
                        </IconButton>
                        <IconButton size="large" color="inherit"onClick={handleTeamModel}>
                            <AccountCircle className='text-gray-500'/>
                        </IconButton>
                    </div>
                </div>
                {model && <AllTeamModel closeModel={handleTeamModel} />}
            </div >
        </>
    )
}

export default Navbar
