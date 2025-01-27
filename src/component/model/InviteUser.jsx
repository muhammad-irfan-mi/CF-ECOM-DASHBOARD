// import React, { useState } from "react";
// import CloseIcon from "@mui/icons-material/Close";
// import { ToastContainer, toast } from "react-toastify";
// // import { inviteUser } from "../../Api/invite/InviteUser";

// function InviteUser({ closeModal }) {
//     const [formData, setFormData] = useState({
//         empName: "",
//         empEmail: "",
//         empId: "",
//         empRole: "",
//         teamName: "",
//     });

//     const handleFormData = (e) => {
//         setFormData((prev) => ({
//             ...prev,
//             [e.target.name]: e.target.value,
//         }));
//     };

//     const handleSubmit = async () => {
//         const { empName, empEmail, empRole, teamName } = formData;
//         if (!empName || !empEmail || !empRole || !teamName) {
//             toast.error("Please fill all required fields!");
//             return;
//         }

//         try {
//             const response = await inviteUser(formData.empName, formData.empEmail, formData.empId, formData.empRole, formData.teamName);
//             if (response.ok) {
//                 toast.success("User added and invited successfully!");
//                 closeModal();
//             } else {
//                 toast.error("Failed to add user. Please try again.");
//             }
//         } catch (err) {
//             console.error("Error:", err);
//             toast.error("An error occurred. Please try again.");
//         }
//     };

//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white rounded-lg w-[75%] h-[70vh] overflow-auto shadow-lg p-6 relative">
//                 {/* Modal Header */}
//                 <div className="flex justify-between items-center border-b pb-3">
//                     <h2 className="text-md">Add New Employees</h2>
//                     <button onClick={closeModal} className="text-gray-500 hover:text-gray-800">
//                         <CloseIcon />
//                     </button>
//                 </div>

//                 {/* Modal Content */}
//                 <div className="py-6 space-y-4">
//                     {/* Employee Form */}
//                     <div className="flex flex-wrap items-center gap-5">
//                         <div>
//                             <label className="block text-sm font-medium">
//                                 Employee Name <span className="text-red-500">*</span>
//                             </label>
//                             <input
//                                 type="text"
//                                 name="empName"
//                                 value={formData.empName}
//                                 onChange={handleFormData}
//                                 placeholder="Enter employee name"
//                                 className="bg-transparent border rounded-md p-2 w-full"
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium">
//                                 Employee Email <span className="text-red-500">*</span>
//                             </label>
//                             <input
//                                 type="email"
//                                 name="empEmail"
//                                 value={formData.empEmail}
//                                 onChange={handleFormData}
//                                 placeholder="Enter employee email"
//                                 className="border bg-transparent rounded-md p-2 w-full"
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium">
//                                 Employee ID <span className="text-gray-400">(Optional)</span>
//                             </label>
//                             <input
//                                 type="text"
//                                 name="empId"
//                                 value={formData.empId}
//                                 onChange={handleFormData}
//                                 placeholder="Enter Employee ID"
//                                 className="border bg-transparent rounded-md p-2 w-full"
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium">
//                                 Role <span className="text-red-500">*</span>
//                             </label>
//                             <select
//                                 name="empRole"
//                                 value={formData.empRole}
//                                 onChange={handleFormData}
//                                 className="border bg-transparent rounded-md p-2 w-full"
//                             >
//                                 <option value="">Role...</option>
//                                 <option value="Team Member">Team Member</option>
//                                 <option value="Team Head">Team Head</option>
//                                 <option value="Admin">Admin</option>
//                             </select>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium">
//                                 Team Name <span className="text-red-500">*</span>
//                             </label>
//                             <select
//                                 name="teamName"
//                                 value={formData.teamName}
//                                 onChange={handleFormData}
//                                 className="border bg-transparent rounded-md p-2 w-40"
//                             >
//                                 <option value="">Team...</option>
//                                 <option value="Team A">Team A</option>
//                                 <option value="Team B">Team B</option>
//                                 <option value="Team C">Team C</option>
//                             </select>
//                         </div>
//                     </div>

//                     {/* Add Another User */}
//                     <button className="text-blue-600 text-sm font-medium hover:underline mt-4">
//                         + Add another user
//                     </button>
//                 </div>

//                 {/* Role Explanation */}
//                 <div className="mt-6 text-sm text-gray-600 border-t pt-3">
//                     <p>
//                         <strong>Team Member:</strong> A person you want to be monitored
//                     </p>
//                     <p>
//                         <strong>Team Head:</strong> Can see their team members' tracking data in Workfolio website
//                     </p>
//                     <p>
//                         <strong>Admin:</strong> Has control over everything from adding members, creating teams, and seeing tracking data
//                     </p>
//                 </div>

//                 {/* Footer Buttons */}
//                 <div className="flex justify-end items-center gap-4 mt-6 border-t pt-4">
//                     <button
//                         onClick={closeModal}
//                         className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
//                     >
//                         Cancel
//                     </button>
//                     <button
//                         onClick={handleSubmit}
//                         className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//                     >
//                         Add & Invite Users
//                     </button>
//                 </div>
//                 <ToastContainer />
//             </div>
//         </div>
//     );
// }

// export default InviteUser;
