import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ContextProvider'
import WorkLoadAnalysis from '../../component/chart/WorkLoadAnalysis'
import { Typography } from '@mui/material'
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


function DashBoard() {
    const context = useContext(ThemeContext)
    const [count, setCount] = useState(4)
    const [data, setData] = useState([
        {
            text: "Total User",
        },
        {
            text: "Total Sales",
        },
        {
            text: "Total Ravenue",
        },
        {
            text: "Total Traffic",
        }
    ])

    const initialData = [
        { name: "Baby Doll", image: "image1.png", email: 'mirfan.dev0@gmail.com', purchase: "10" },
        { name: "Birthday Gift", image: "image2.png", email: 'mirfan.dev0@gmail.com', purchase: "10" },
        { name: "Cosmetics", image: "image3.png", email: 'mirfan.dev0@gmail.com', purchase: "10" },
        { name: "Couple Gift", image: "image4.png", email: 'mirfan.dev0@gmail.com', purchase: "10" },
        { name: "Gadgets", image: "image5.png", email: 'mirfan.dev0@gmail.com', purchase: "10" },
        { name: "Men's Fashion", image: "image6.png", email: 'mirfan.dev0@gmail.com', purchase: "10" },
        { name: "Baby Doll", image: "image1.png", email: 'mirfan.dev0@gmail.com', purchase: "10" },
        { name: "Birthday Gift", image: "image2.png", email: 'mirfan.dev0@gmail.com', purchase: "10" },
        { name: "Cosmetics", image: "image3.png", email: 'mirfan.dev0@gmail.com', purchase: "10" },
        { name: "Couple Gift", image: "image4.png", email: 'mirfan.dev0@gmail.com', purchase: "10" },
        { name: "Gadgets", image: "image5.png", email: 'mirfan.dev0@gmail.com', purchase: "10" },
        { name: "Men's Fashion", image: "image6.png", email: 'mirfan.dev0@gmail.com', purchase: "10" },
    ];

    const [user, setUser ] = useState(initialData);
    const [currentPage, setCurrentPage] = useState(1);
    const namesPerPage = 5;
    const totalPages = Math.ceil(data.length / namesPerPage);
    const startIndex = (currentPage - 1) * namesPerPage;
    const currentData = user.slice(startIndex, startIndex + namesPerPage);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    return (
        // 27272a
        <div className='bg-[#edeeef] h-[89vh] overflow-auto p-5'>
            <div className=''>
                <h3 className={`text-2xl font-semibold `}>Overview</h3>
                <div className={`flex gap-2`}>
                    {data.map((data, i) => {
                        return <div key={i} className={`w-[25%] my-2 p-3 py-5 rounded-md ${context.colors.boxbg}`}>
                            <h3>{data.text}</h3>
                            <p className={`mt-3 text-2xl font-semibold`}>{count}</p>
                        </div>
                    })}
                </div>
                <div className={`flex flex-wrap gap-3 my-3`}>
                    <div className={`w-[49%] h-[55vh] p-4 rounded-md ${context.colors.boxbg}`}>
                        <WorkLoadAnalysis />
                    </div>
                    <div className={`w-[49%] h-[55vh] p-4 rounded-md ${context.colors.boxbg}`}>
                        <Typography variant='h6' className={`text-2xl font-semibold`}>Total Traffic Analysis</Typography>
                        <h3 className={`text-center mt-10`}>No Data Found</h3>
                    </div>
                </div >

                <table className={`min-w-full overflow-hidden table-auto border-collapse border border-gray-300 rounded-lg shadow-md ${context.colors.boxbg}`}>
                    <thead className="bg-gray-300">
                        <tr>
                            <th className="px-4 py-5 text-sm text-left border-b">Profile</th>
                            <th className="px-4 py-5 text-sm text-left border-b">Name</th>
                            <th className="px-4 py-5 text-sm text-left border-b">Email</th>
                            <th className="px-4 py-5 text-sm text-center border-b">Total Purchase</th>
                            <th className="px-4 py-5 text-sm text-center border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((name) => (
                            <tr key={name.id} className="hover:bg-gray-50">
                                <td className="px-4 py-2 text-sm text-gray-600 border-b">
                                    <img src={name.image} alt={name.name} className="w-10 h-10 rounded-full border border-black" />
                                </td>
                                <td className="px-4 py-2 text-sm text-gray-600 border-b">{name.name}</td>
                                <td className="px-4 py-2 text-sm text-gray-600 border-b">{name.email}</td>
                                <td className="px-4 py-2 text-sm text-gray-600 border-b">{name.purchase}</td>

                                <td className="px-4 py-2 border-b flex justify-center gap-2 text-gray-600">
                                    <Tooltip title="View">
                                        <IconButton>
                                            <DeleteIcon className="hover:text-red-500" />
                                        </IconButton>
                                    </Tooltip>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="flex justify-center items-center mt-4 gap-2">
                    <IconButton onClick={() => handlePageChange(currentPage - 1)}>
                        <ChevronLeftIcon />
                    </IconButton>
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
                        {currentPage}
                    </div>
                    <IconButton
                        onClick={() => handlePageChange(currentPage + 1)}
                    // disabled={currentPage === totalPages}
                    >
                        <ChevronRightIcon />
                    </IconButton>
                </div>

            </div >
        </div>
    )
}

export default DashBoard
