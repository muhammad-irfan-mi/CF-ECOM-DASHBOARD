import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ContextProvider'
import TotalUsage from './component/TotalUsage';
import UsagePerEmployee from './component/UsagePerEmployee';

function AppSummary() {
    const context = useContext(ThemeContext)
    const [activeIndex, setActiveIndex] = useState(0);

    const tabs = [
        "Total Usage",
        "Usage per employee"
    ];

    const renderContent = () => {
        switch (activeIndex) {
            case 0:
                return <TotalUsage />;
            case 1:
                return <UsagePerEmployee />;
            default:
                return <div>No Data</div>;
        }
    };

    return (
        <div className={`h-[89vh] p-5 overflow-auto ${context.colors.bgcolor} ${context.colors.textColor}`}>
            <h1 className={`text-lg tracking-wide ${context.mode == 'dark' ? 'text-white' : 'text-black'}`}>Apps/Websites Usage</h1>
            <div className='flex py-5 gap-5'>
                <div className='w-[35%] h-[85vh] border rounded-md overflow-auto'>
                    <div className={`p-5 py-3 border-b ${context.colors.boxbg}`}>
                        <h3 className='font-semibold'>All app and website</h3>
                    </div>
                    <div className='p-5'>
                        <div className='flex gap-4'>
                            <input type="checkbox" name="" id="" />
                            <span>Unselect All Apps/Sites</span>
                        </div>
                        <h3 className='ml-7 mt-7'>No data found!!!</h3>
                    </div>
                </div>
                <div className='w-[65%] h-[85vh] border rounded-md overflow-auto'>
                    <div className={`flex border-b mb-5 ${context.colors.boxbg}`}>
                        <div>
                            {tabs.map((tab, index) => {
                                const isActive = activeIndex === index;
                                return <button
                                    key={index} onClick={() => setActiveIndex(index)}
                                    className={`px-3 p-2 text-lg font-medium ${isActive ?
                                        context.mode === 'dark'
                                            ? `text-white border-b-2 border-b-white`
                                            : 'text-black border-b-2 border-b-black'
                                        : context.mode === 'dark' ?
                                            `${context.colors.texthover}`
                                            : `border-b-2 border-transparent ${context.colors.borderhover}`
                                        } focus:outline-none`}
                                >
                                    {tab}
                                </button>
                            })}
                        </div>
                    </div>
                    <div className=''>{renderContent()}</div>
                </div>
            </div>
        </div>
    )
}

export default AppSummary
