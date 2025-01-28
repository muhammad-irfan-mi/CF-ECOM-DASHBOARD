import React, { useContext, useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ThemeContext } from "../../context/ContextProvider";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

const Brand = () => {
    const context = useContext(ThemeContext)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const initialData = [
        { id: "#ce8d812a", name: "Baby Doll", image: "image1.png", level: 1 },
        { id: "#4c9681ac", name: "Birthday Gift", image: "image2.png", level: 1 },
        { id: "#f7b1da64", name: "Cosmetics", image: "image3.png", level: 1  },
        { id: "#c8305a8a", name: "Couple Gift", image: "image4.png", level: 1  },
        { id: "#e6d2c2e3", name: "Gadgets", image: "image5.png", level: 1},
        { id: "#96c813a8", name: "Men's Fashion", image: "image6.png", level: 1},
        { id: "#ce8d812a", name: "Baby Doll", image: "image1.png", level: 1},
        { id: "#4c9681ac", name: "Birthday Gift", image: "image2.png", level: 1},
        { id: "#f7b1da64", name: "Cosmetics", image: "image3.png", level: 1},
        { id: "#c8305a8a", name: "Couple Gift", image: "image4.png", level: 1},
        { id: "#e6d2c2e3", name: "Gadgets", image: "image5.png", level: 1},
        { id: "#96c813a8", name: "Men's Fashion", image: "image6.png", level: 1},
    ];

    const [data, setData] = useState(initialData);

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = data.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className='bg-[#edeeef] h-[89vh] overflow-auto py-5'>
            <div className={`w-[97%] mb-6 mx-auto items-center justify-between`}>

                <h3 className='text-3xl font-semibold'>Cetagory</h3>
                <div className='my-5 flex justify-between'>
                    <div className={`flex  px-3 items-center text-gray-400 rounded-md ${context.colors.boxbg}`}>
                        <SearchIcon />
                        <input type="text" name="" id="" placeholder='Search' className='w-full p-3 border-none outline-none text-black' />
                    </div>
                    <button className={`font-semibold text-sm ${context.colors.btn} ${context.colors.btnhover} p-5 py-2 rounded-md `}><AddIcon /> Add Cetagory</button>
                </div>

                <table className={`min-w-full overflow-hidden table-auto border-collapse border border-gray-300 rounded-lg shadow-md ${context.colors.boxbg}`}>
                    <thead className="bg-gray-300">
                        <tr>
                            <th className="px-4 py-5 text-sm text-left border-b">ID</th>
                            <th className="px-4 py-5 text-sm text-left border-b">Name</th>
                            <th className="px-4 py-5 text-sm text-left border-b">Image</th>
                            <th className="px-4 py-5 text-sm text-center border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="px-4 py-2 text-sm text-gray-600 border-b">{item.id}</td>
                                <td className="px-4 py-2 text-sm text-gray-600 border-b">{item.name}</td>
                                <td className="px-4 py-2 text-sm text-gray-600 border-b">
                                    <img src={item.image} alt={item.name} className="w-10 h-10 rounded" />
                                </td>
                              
                                <td className="px-4 py-2 border-b flex justify-center gap-2 text-gray-600">
                                    <Tooltip title="Edit">
                                        <IconButton>
                                            <EditIcon  className="hover:text-blue-500"/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Delete">
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
            </div>
        </div>
    );
};

export default Brand;
