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

const RefundRequest = () => {
    const context = useContext(ThemeContext)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const initialData = [
        { id: "#ce8d812a", status: "Pending", name: "Baby Doll", image: "image1.png", amount: 100 },
        { id: "#4c9681ac", status: "Accepted", name: "Birthday Gift", image: "image2.png", amount: 121 },
        { id: "#c8305a8a", status: "Processing", name: "Couple Gift", image: "image4.png", amount: 132 },
        { id: "#f7b1da64", status: "Accepted", name: "Cosmetics", image: "image3.png", amount: 120 },
        { id: "#e6d2c2e3", status: "Processing", name: "Gadgets", image: "image5.png", amount: 110 },
        { id: "#4c9681ac", status: "Accepted", name: "Birthday Gift", image: "image2.png", amount: 22 },
        { id: "#96c813a8", status: "Pending", name: "Men's Fashion", image: "image6.png", amount: 14 },
        { id: "#f7b1da64", status: "Processing", name: "Cosmetics", image: "image3.png", amount: 120 },
        { id: "#c8305a8a", status: "Accepted", name: "Couple Gift", image: "image4.png", amount: 190 },
        { id: "#ce8d812a", status: "Pending", name: "Baby Doll", image: "image1.png", amount: 1120 },
        { id: "#e6d2c2e3", status: "Processing", name: "Gadgets", image: "image5.png", amount: 90 },
        { id: "#96c813a8", status: "Accepted", name: "Men's Fashion", image: "image6.png", amount: 300 },
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

                <h3 className='text-3xl font-semibold mb-5'>Refund Request</h3>
            

                <table className={`min-w-full overflow-hidden table-auto border-collapse border border-gray-300 rounded-lg shadow-md ${context.colors.boxbg}`}>
                    <thead className="bg-gray-300">
                        <tr>
                            <th className="px-4 py-5 text-sm text-left border-b">Order No</th>
                            <th className="px-4 py-5 text-sm text-left border-b">Shop Name</th>
                            <th className="px-4 py-5 text-sm text-left border-b">Product Details</th>
                            <th className="px-4 py-5 text-sm text-left border-b">Amount</th>
                            <th className="px-4 py-5 text-sm text-center border-b">Status</th>
                            <th className="px-4 py-5 text-sm text-center border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="px-4 py-2 text-sm text-gray-600 border-b">{item.id}</td>
                                <td className="px-4 py-2 text-sm text-gray-600 border-b">{item.name}</td>
                                <td className="flex items-center px-4 py-2 text-sm text-gray-600 border-b">
                                    <img src={item.image} alt={item.name} className="w-10 h-10 rounded" />
                                    <span>{item.name}</span>
                                </td>
                                <td className="px-4 py-2 text-sm text-gray-600 border-b">{item.amount}</td>
                                <td className={`px-4 py-2 text-sm text-gray-600 border-b `}>
                                    <span
                                        className={`px-2 py-1 rounded-full text-sm ${getStatusClass(item.status)}`}
                                    >
                                        {item.status}
                                    </span>
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

export default RefundRequest;
