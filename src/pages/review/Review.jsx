import React, { useContext, useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ThemeContext } from "../../context/ContextProvider";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';

const Review = () => {
    const context = useContext(ThemeContext)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const initialData = [
        { customer: "Jane Doe", name: "Baby Doll", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", amount: 100 },
        { customer: "Aman", name: "Birthday Gift", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", amount: 121 },
        { customer: "Processing", name: "Couple Gift", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", amount: 132 },
        { customer: "Jane Doe", name: "Cosmetics", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", amount: 120 },
        { customer: "Aman", name: "Gadgets", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", amount: 110 },
        { customer: "Jane Doe", name: "Birthday Gift", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", amount: 22 },
        { customer: "Pending", name: "Men's Fashion", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", amount: 14 },
        { customer: "Aman", name: "Cosmetics", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", amount: 120 },
        { customer: "Aman", name: "Couple Gift", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", amount: 190 },
        { customer: "Jane Doe", name: "Baby Doll", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", amount: 1120 },
        { customer: "Processing", name: "Gadgets", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", amount: 90 },
        { customer: "Jane Doe", name: "Men's Fashion", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", amount: 300 },
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

    const getStatusClass = (status) => {
        switch (status) {
            case "Pending":
                return "text-blue-600 bg-blue-100";
            case "Accepted":
                return "text-green-600 bg-green-100";
            case "Processing":
                return "text-yellow-600 bg-red-100";
            default:
                return "";
        }
    };

    return (
        <div className='bg-[#edeeef] h-[89vh] overflow-auto py-5'>
            <div className={`w-[97%] mb-6 mx-auto items-center justify-between`}>

                <h3 className='text-3xl font-semibold mb-5'>Product Reviews</h3>


                <table className={`min-w-full overflow-hidden table-auto border-collapse border border-gray-300 rounded-lg shadow-md ${context.colors.boxbg}`}>
                    <thead className="bg-gray-300">
                        <tr>
                            <th className="px-4 py-5 text-sm text-left border-b">Name</th>
                            <th className="px-4 py-5 text-sm text-left border-b">Customer</th>
                            <th className="px-4 py-5 text-sm text-left border-b">Comment</th>
                            <th className="px-4 py-5 text-sm text-left border-b">Rating</th>
                            <th className="px-4 py-5 text-sm text-center border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="flex items-center px-4 py-2 text-sm text-gray-600 border-b">
                                    <img src={item.image} alt={item.name} className="w-10 h-10 rounded" />
                                    <span>{item.name}</span>
                                </td>
                                <td className="px-4 py-2 text-sm text-gray-600 border-b">{item.customer}</td>
                                <td className="px-4 py-2 text-sm text-gray-600 border-b">{item.comment}</td>
                                <td className={`px-4 py-2 text-sm text-yellow-400 border-b `}>
                                   <StarIcon/>
                                   <StarIcon/>
                                   <StarIcon/>
                                   <StarIcon/>
                                   <StarIcon/>
                                </td>

                                <td className="px-4 py-2 border-b flex justify-center gap-2 text-gray-600">
                                    <Tooltip title="Edit">
                                        <IconButton>
                                            <EditIcon className="hover:text-blue-500" />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="View">
                                        <IconButton>
                                            <VisibilityIcon className="hover:text-blue-500" />
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

export default Review;
