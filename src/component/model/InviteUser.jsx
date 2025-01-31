import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ToastContainer, toast } from "react-toastify";
// import { inviteUser } from "../../Api/invite/InviteUser";

function InviteUser({ closeModel }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleFormData = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async () => {
        const { name, email, password } = formData;
        if (!email || !password ) {
            toast.error("Please fill all required fields!");
            return;
        }

        try {
            const response = await inviteUser(formData.name, formData.email, formData.password);
            if (response.ok) {
                toast.success("User added and invited successfully!");
                closeModal();
            } else {
                toast.error("Failed to add user. Please try again.");
            }
        } catch (err) {
            console.error("Error:", err);
            toast.error("An error occurred. Please try again.");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg w-[30%] h-[70vh] shadow-lg p-6 relative">
                {/* Modal Header */}
                <div className="flex justify-between items-center border-b pb-3">
                    <h2 className="text-md">Add New User</h2>
                    <button onClick={closeModel} className="text-gray-500 hover:text-gray-800">
                        <CloseIcon />
                    </button>
                </div>

                {/* Modal Content */}
                <div className="py-6 space-y-4">
                    {/* Employee Form */}
                    <div className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium">
                                 Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleFormData}
                                placeholder="Enter name"
                                className="bg-transparent border rounded-md p-2 w-full"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">
                                 Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleFormData}
                                placeholder="Enter email"
                                className="border bg-transparent rounded-md p-2 w-full"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="empId"
                                value={formData.password}
                                onChange={handleFormData}
                                placeholder="Enter Password"
                                className="border bg-transparent rounded-md p-2 w-full"
                            />
                        </div>
                    </div>
                </div>


                {/* Footer Buttons */}
                <div className="flex justify-center items-center gap-4 my-2 border-t pt-4">
                    <button
                        onClick={closeModel}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Add Users
                    </button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
}

export default InviteUser;
