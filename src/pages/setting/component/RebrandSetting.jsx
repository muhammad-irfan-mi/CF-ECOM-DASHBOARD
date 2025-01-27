import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../../context/ContextProvider'

function RebrandSetting() {

    const context = useContext(ThemeContext);
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const handleImage = (e) => {
        const myImage = e.target.files[0];
        if (myImage) {
            setImage(myImage);
            setImageUrl(URL.createObjectURL(myImage));
        }
    };
    useEffect(() => {
        return () => {
            if (imageUrl) {
                URL.revokeObjectURL(imageUrl);
            }
        };
    }, [imageUrl]);

    return (
        <div className={`min-h-[80vh] flex items-center justify-center ${context.colors.textColor}`}>
            <div className='w-[63%]'>
                <div className='px-12'>
                    <h3 className='text-start'>Company Name</h3>
                    <input type="text" name="" id="" className={`my-2 w-full p-3 outline-none rounded-lg focus:outline-blue-600 shadow-2xl border-none focus:shadow-lg ${context.colors.boxbg}`} placeholder='Brand Name' />
                </div>
                <div className='px-12 text-start my-3'>
                    <h3 >Company Logo</h3>
                    <p className='text-sm text-gray-400'>You can replace the Workfolio logo by uploading your company logo.</p>
                </div>
                <div className='px-12 text-start my-2 flex items-center gap-7'>
                    <img src={imageUrl} alt="" className={`w-16 h-16 rounded-md ${context.colors.boxbg}`} />
                    <input type="file" accept="image/*" id="companyLogo" className='hidden' onChange={handleImage} />
                    <span className='hover:underline hover:text-blue-500' onClick={() => document.getElementById('companyLogo').click()}>Upload Your Company Logo</span>
                </div>
                <div className='px-12 text-start my-3'>
                    <p className='text-sm text-gray-400'>Company logo should be in the format of jpg or png.</p>
                </div>
                <div className='text-start ml-12 mt-3'>
                    <button className={`${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover} p-2 px-5 rounded-lg`}>Save Organization Info</button>
                </div>
            </div>
        </div>
    )
}

export default RebrandSetting
