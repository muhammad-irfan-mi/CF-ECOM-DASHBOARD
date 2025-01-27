import React, { useContext } from "react";
import {
    Home, People, CameraAlt, VideoLibrary, BarChart, Event, CalendarToday, BeachAccess, RateReview, History, Summarize, Settings, CreditCard
} from "@mui/icons-material";
import TextsmsIcon from '@mui/icons-material/Textsms';
import WarningIcon from '@mui/icons-material/Warning';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ContextProvider";


function Sidebar() {
    const context = useContext(ThemeContext)
    console.log('sidebar', context)
    return (
        <div className={`h-[100vh] border-r overflow-auto w-full shadow-md py-6 p-4 pb-2 transition duration-400 scrollbar-hide hover:scrollbar-thin hover:scrollbar-thumb-gray-700 hover:scrollbar-track-gray-400 ${context.colors.boxbg} ${context.colors.textColor} `}>
            <div className="flex flex-col gap-4 ">
                {/* Overview Section */}
                <div>
                    <h2 className={`text-[12px] uppercase mb-2 ${context.mode == "dark" ? 'text-gray-200' : 'text-[#7d7d85]'}`}>
                        DashBoard
                    </h2>
                    <div className={`flex items-center gap-3 cursor-pointer ${context.mode == 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>
                        <Link to={'/'}>
                            <Home fontSize="medium" />
                            <span className="text-lg ml-3">DashBoard</span>
                        </Link>
                    </div>
                </div>

                {/* Product */}
                <div>
                    <h2 className={`text-[12px] uppercase mb-2 ${context.mode == "dark" ? 'text-gray-200' : 'text-[#7d7d85]'}`}>
                        Products
                    </h2>
                    <div className="flex flex-col gap-3">
                        <div className={`flex items-center gap-3 cursor-pointer ${context.mode == 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>
                            <Link to={'/product'}>
                                <CameraAlt fontSize="small" />
                                <span className="text-lg ml-3">Product List</span>
                            </Link>
                        </div>
                        <div className={`flex items-center gap-3 cursor-pointer ${context.mode == 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>
                            <Link to={'/create-product'}>
                                <VideoLibrary fontSize="small" />
                                <span className="text-lg ml-3">Create Product</span>
                            </Link>
                        </div>
                        <div className={`flex items-center gap-3 cursor-pointer ${context.mode == 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>
                            <Link to={'product-review'}>
                                <WatchLaterIcon fontSize="small" />
                                <span className="text-lg ml-3">Product Review</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Cetagories */}
                <div>
                    <h2 className={`text-[12px] uppercase mb-2 ${context.mode == "dark" ? 'text-gray-200' : 'text-[#7d7d85]'}`}>
                        Cetagories
                    </h2>
                    <div className="flex flex-col gap-3">
                        <div className={`flex items-center gap-3 cursor-pointer ${context.mode == 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>
                            <Link to={'cetagory'}>
                                <CameraAlt fontSize="small" />
                                <span className="text-lg ml-3">Cetagory List</span>
                            </Link>
                        </div>
                        <div className={`flex items-center gap-3 cursor-pointer ${context.mode == 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>
                            <Link to={'create-cetagory'}>
                                <VideoLibrary fontSize="small" />
                                <span className="text-lg ml-3">Create Cetagories</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Brand */}
                <div>
                    <h2 className={`text-[12px] uppercase mb-2 ${context.mode == "dark" ? 'text-gray-200' : 'text-[#7d7d85]'}`}>
                        Brand
                    </h2>
                    <div className="flex flex-col gap-3">
                        <div className={`flex items-center gap-3 cursor-pointer ${context.mode == 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>
                            <Link>
                                <CameraAlt fontSize="small" />
                                <span className="text-lg ml-3">Brand List</span>
                            </Link>
                        </div>
                        <div className={`flex items-center gap-3 cursor-pointer ${context.mode == 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>
                            <Link>
                                <VideoLibrary fontSize="small" />
                                <span className="text-lg ml-3">Create Brand</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Orders */}
                <div>
                    <h2 className={`text-[12px] uppercase mb-2 ${context.mode == "dark" ? 'text-gray-200' : 'text-[#7d7d85]'}`}>
                        Orders
                    </h2>
                    <div className="flex flex-col gap-3">
                        <div className={`flex items-center gap-3 cursor-pointer ${context.mode == 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>
                            <Link to={'/order'}>
                                <CameraAlt fontSize="small" />
                                <span className="text-lg ml-3">Order List</span>
                            </Link>
                        </div>
                        <div className={`flex items-center gap-3 cursor-pointer ${context.mode == 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>
                            <Link to={'/order-detail'}>
                                <VideoLibrary fontSize="small" />
                                <span className="text-lg ml-3">Order Detail</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Refunds */}
                <div>
                    <h2 className={`text-[12px] uppercase mb-2 ${context.mode == "dark" ? 'text-gray-200' : 'text-[#7d7d85]'}`}>
                        Refunds
                    </h2>
                    <div className="flex flex-col gap-3">
                        <div className={`flex items-center gap-3 cursor-pointer ${context.mode == 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>
                            <Link>
                                <CameraAlt fontSize="small" />
                                <span className="text-lg ml-3">Refunds Request</span>
                            </Link>
                        </div>
                        <div className={`flex items-center gap-3 cursor-pointer ${context.mode == 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>
                            <Link>
                                <VideoLibrary fontSize="small" />
                                <span className="text-lg ml-3">Refunds Setting</span>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className={`flex items-center gap-3 cursor-pointer ${context.mode == 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>
                    <Link>
                        <CameraAlt fontSize="small" />
                        <span className="text-lg ml-3">Reviews</span>
                    </Link>
                </div>
                <div className={`flex items-center gap-3 cursor-pointer ${context.mode == 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>
                    <Link>
                        <CameraAlt fontSize="small" />
                        <span className="text-lg ml-3">Account Setting</span>
                    </Link>
                </div>
                <div className={`flex items-center gap-3 cursor-pointer ${context.mode == 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>
                    <Link>
                        <CameraAlt fontSize="small" />
                        <span className="text-lg ml-3">Log Out</span>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Sidebar;
