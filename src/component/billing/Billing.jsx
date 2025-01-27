import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ContextProvider'

function Billing() {
    const context = useContext(ThemeContext)
    const name = 'Muhammad Irfan'
    return (
        <div className={`text-center h-[89vh] p-3 px-10 overflow-auto ${context.colors.bgcolor} ${context.colors.textColor}`}>
            <div className={`w-[78%] rounded-md my-4 mx-auto p-10  text-center ${context.colors.boxbg} ${context.colors.textColor}`}>
                <h3 className='text-lg  '>Dear {name}, Please upgrade your plan to use this page.</h3>
                <button className={`p-2 px-3 my-5 rounded-full ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`}>Visit Billing Page</button>
            </div>
            <h3>To know more about the timelapse video, pls refer this link.</h3>
        </div>
    )
}

export default Billing
