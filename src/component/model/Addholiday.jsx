import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ContextProvider'
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';

function Addholiday({ closeModel, selectedId }) {
    const context = useContext(ThemeContext)
    return (
        <div className={`${context.colors.boxbg} ${context.colors.textColor} w-[30%] h-[74vh] absolute top-[15%] left-[35%]`}>
            <div className='flex items-center justify-between pl-2 py-2 border-b'>
                <h2 className='pl-4'>Add Holiday</h2>
                <Button color='black' onClick={closeModel}><CloseIcon /></Button>
            </div>
            <div className='p-6 text-start'>
                <div>
                    <p>Holiday Date</p>
                    <input type="date" name="" id="" className={`w-full my-2 p-1 bg-transparent border rounded-md ${context.colors.borderhover} ${context.mode == 'dark' ? 'border-white' : 'border-black'}`} />
                </div>
                <div>
                    <p>Holiday Title</p>
                    <input type="text" name="" id="" placeholder='Enter holiday title' className={`w-full my-2 p-1 bg-transparent border rounded-md ${context.colors.borderhover} ${context.mode == 'dark' ? 'border-white' : 'border-black'}`} />
                </div>
                <div>
                    <p>Holiday Session</p>
                    <select name="" id="" className={`w-full my-2 p-1 bg-transparent border rounded-md ${context.colors.borderhover} ${context.mode == 'dark' ? 'border-white' : 'border-black'}`} >
                        <option value="">Select Holiday Session</option>
                        <option value="">Full Day</option>
                        <option value="">First Half</option>
                        <option value="">Second Half</option>
                    </select>
                </div>
                <div>
                    <p>Holiday Type</p>
                    <select name="" id="" className={`w-full my-2 p-1 bg-transparent border rounded-md ${context.colors.borderhover} ${context.mode == 'dark' ? 'border-white' : 'border-black'}`}>
                        <option value="">Select Holiday Type</option>
                        <option value="">Public Holiday</option>
                        <option value="">office Holiday</option>
                        <option value="">Floater Holiday</option>
                    </select>
                </div>
            </div>
            <div className='flex justify-center gap-8'>
                {selectedId == null ? <button className={`${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover} px-5 p-2 rounded-lg`}>Add holiday</button> : <button className={`${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover} px-5 p-2 rounded-lg`}>Save Changes</button>}
                <button className={`${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover} px-5 p-2 rounded-lg`}>Cancel</button>
            </div>
        </div>
    )
}

export default Addholiday
