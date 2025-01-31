import { useState } from "react";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useContext } from "react";
import { ThemeContext } from "../../context/ContextProvider";

const AccountSetting = () => {
    const context = useContext(ThemeContext)
    const [bgImage, setBgImage] = useState(null);
    const [profileImage, setProfileImage] = useState(null);

    const handleBgChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setBgImage(URL.createObjectURL(file));
        }
    };

    const handleProfileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className='bg-[#edeeef] h-[89vh] overflow-auto py-7'>
            <h2 className="text-xl font-semibold mx-5 mb-5">Create Category</h2>

            <div className={`w-[95%] rounded-lg mx-auto p-10 ${context.colors.boxbg}`}>
                <div className="relative h-48  w-full bg-gray-200 rounded-lg ">
                    <img
                        src={bgImage || "https://via.placeholder.com/800x200"}
                        alt="Background"
                        className="w-full h-full rounded-lg object-cover"
                    />
                    <label className="absolute top-2 right-2 bg-white p-2 rounded-full cursor-pointer shadow-md">
                        <CameraAltIcon className="text-blue-600" />
                        <input type="file" className="hidden" onChange={handleBgChange} />
                    </label>

                    {/* Profile Image */}
                    <div className="absolute bottom-[-30px] left-6">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden border bg-gray-300 border-black">
                            <img
                                src={profileImage || "https://via.placeholder.com/100"}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                            <label className="absolute bottom-0 right-0 bg-white p-1 rounded-full cursor-pointer shadow-md">
                                <CameraAltIcon className="text-blue-600" />
                                <input type="file" className="hidden" onChange={handleProfileChange} />
                            </label>
                        </div>
                    </div>
                </div>

                {/* Form Fields */}
                <div className="mt-12 grid grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" className="border p-2 rounded w-full" />
                    <input type="text" placeholder="Last Name" className="border p-2 rounded w-full" />
                    <input type="email" placeholder="Email" className="border p-2 rounded w-full" />
                    <input type="text" placeholder="Phone" className="border p-2 rounded w-full" />
                    <select className="border p-2 rounded w-full">
                        <option>Country</option>
                        <option>USA</option>
                        <option>Canada</option>
                    </select>
                    <input type="text" placeholder="City" className="border p-2 rounded w-full" />
                </div>

                {/* Save Button */}
                <div className="mt-4">
                    <button className={` px-4 py-2 rounded ${context.colors.btn} ${context.colors.btnhover}`}>
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AccountSetting;
