import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ContextProvider";

const CreateCetagory = () => {
    const context = useContext(ThemeContext)
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles(files);
    };

    const removeImage = (index) => {
        const updatedFiles = selectedFiles.filter((_, i) => i !== index);
        setSelectedFiles(updatedFiles);
    };

    return (
        <div className='bg-[#edeeef] h-[89vh] overflow-auto py-7'>
                <h2 className="text-xl font-semibold mx-5 mb-8">Create Category</h2>
            <div className='w-[97%] bg-white p-10 rounded-lg mb-6 mx-auto items-center justify-between'>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                        className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Parent Category</option>
                        <option value="category1">Category 1</option>
                        <option value="category2">Category 2</option>
                    </select>
                </div>
                <div
                    className="border border-dashed bg-[#f6f9fc] rounded-lg p-6 flex flex-col items-center justify-center mb-4 h-72"
                    onClick={() => document.getElementById("fileInput").click()}
                >
                    <input
                        type="file"
                        id="fileInput"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                    {selectedFiles.length === 0 ? (
                        <div className="text-center">
                            <p className="text-gray-500">Drop file here or click to upload</p>
                            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
                                Select Files
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-3 gap-4">
                            {selectedFiles.map((file, index) => (
                                <div key={index} className="relative">
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt="Preview"
                                        className="h-24 w-24 object-cover rounded-lg"
                                    />
                                    <button
                                        onClick={() => removeImage(index)}
                                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex items-center gap-2 mb-4">
                    <input type="checkbox" id="featured" className="w-5 h-5" />
                    <label htmlFor="featured" className="text-gray-600">
                        Featured Category
                    </label>
                </div>
                <button className={`px-4 py-2 rounded-lg ${context.colors.btn} ${context.colors.btnhover} `}>
                    Save Category
                </button>
            </div>
        </div>
    );
};

export default CreateCetagory;
