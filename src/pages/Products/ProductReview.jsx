import React, { useContext, useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ThemeContext } from "../../context/ContextProvider";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

const ProductReview = () => {
    const context = useContext(ThemeContext)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const initialData = [
        { name: "Baby Doll", image: "image1.png", Customer:'M Irfan', comment:'Hello this is very good product' },
        { name: "Birthday Gift", image: "image2.png", Customer:'M Irfan', comment:'Hello this is very good product' },
        { name: "Cosmetics", image: "image3.png", Customer:'M Irfan', comment:'Hello this is very good product' },
        { name: "Couple Gift", image: "image4.png", Customer:'M Irfan', comment:'Hello this is very good product' },
        { name: "Gadgets", image: "image5.png", Customer:'M Irfan', comment:'Hello this is very good product' },
        { name: "Men's Fashion", image: "image6.png", Customer:'M Irfan', comment:'Hello this is very good product' },
        { name: "Baby Doll", image: "image1.png", Customer:'M Irfan', comment:'Hello this is very good product' },
        { name: "Birthday Gift", image: "image2.png", Customer:'M Irfan', comment:'Hello this is very good product' },
        { name: "Cosmetics", image: "image3.png", Customer:'M Irfan', comment:'Hello this is very good product' },
        { name: "Couple Gift", image: "image4.png", Customer:'M Irfan', comment:'Hello this is very good product' },
        { name: "Gadgets", image: "image5.png", Customer:'M Irfan', comment:'Hello this is very good product' },
        { name: "Men's Fashion", image: "image6.png", Customer:'M Irfan', comment:'Hello this is very good product' },
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
            <div className='w-[97%] mb-6 mx-auto items-center justify-between'>

                <h3 className='text-3xl font-semibold'>Cetagory</h3>
                <div className='my-5 flex justify-between'>
                    <div className='flex bg-white px-3 items-center text-gray-400 rounded-md'>
                        <SearchIcon />
                        <input type="text" name="" id="" placeholder='Search' className='w-full p-3 border-none outline-none text-black' />
                    </div>
                    <button className={`font-semibold text-sm ${context.colors.btn} ${context.colors.btnhover} p-5 py-2 rounded-md `}><AddIcon /> Add Cetagory</button>
                </div>

                <table className="min-w-full overflow-hidden table-auto border-collapse bg-white border border-gray-300 rounded-lg shadow-md">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-5 text-sm text-left border-b">Product</th>
                            <th className="px-4 py-5 text-sm text-left border-b">Customer</th>
                            <th className="px-4 py-5 text-sm text-left border-b">Comment</th>
                            <th className="px-4 py-5 text-sm border-b text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50">
                                <td className="px-4 py-2 text-sm text-gray-600 border-b flex gap-3">
                                    <img src={item.image} alt={item.name} className="w-10 h-10 rounded" />
                                    <h1>{item.name}</h1>
                                </td>
                                <td className="px-4 py-2 text-sm text-gray-600 border-b">{item.Customer}</td>
                                <td className="px-4 py-2 text-sm text-gray-600 border-b">{item.comment}</td>

                                <td className="px-4 py-2 border-b flex justify-center gap-2 text-gray-600">
                                    <Tooltip title="Edit">
                                        <IconButton>
                                            <EditIcon className="hover:text-blue-500" />
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

export default ProductReview;
