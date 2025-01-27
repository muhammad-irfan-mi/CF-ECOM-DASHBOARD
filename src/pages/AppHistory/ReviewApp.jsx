import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ContextProvider'
import Unreviewed from './component/Unreviewed';
import Reviewedapp from './component/Reviewedapp';
import TopUsedApp from './component/TopUsedApp';

function ReviewApp() {
    const context = useContext(ThemeContext)
    const [activeIndex, setActiveIndex] = useState(0);

    const tabs = [
        "Unreviewed Apps",
        "Reviewed Apps",
        "Top Used Apps"
    ];

    const renderContent = () => {
        switch (activeIndex) {
            case 0:
                return <Unreviewed />;
            case 1:
                return <Reviewedapp />;
            case 2:
                return <TopUsedApp />;
            // case 3:
            //     return <Uninformedleave />;
            default:
                return <div>No Data</div>;
        }
    };

    return (
        <div className={`p-6 h-[89vh] overflow-auto ${context.colors.bgcolor} ${context.colors.textColor}`}>
            <div className='flex justify-between items-start'>
                <div>
                    <h3 className='font-medium text-lg'>Review apps & websites for Organization</h3>
                    <h3 className='mt-1 text-sm text-gray-400'>Note:</h3>
                    <h3 className='text-sm text-gray-400'>Filter the team name to review the apps & websites in team-wise.</h3>
                    <h3 className='text-sm text-gray-400'>The status change may take up to 100 minutes to reflect and will be applied to future data.</h3>
                </div>
                <button className={`mt-1 px-3 py-2 rounded-md ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`}>Export</button>
            </div>
            <div className={`my-3 h-[70vh] ${context.colors.boxbg} rounded-md`}>
                <div className="flex border-b mb-5">
                    <div>
                        {tabs.map((tab, index) => {
                            const isActive = activeIndex === index;
                            return <button
                                key={index} onClick={() => setActiveIndex(index)}
                                // onClick={() => setSelectedTab(tab)}
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
                <div>{renderContent()}</div>
            </div>
        </div>
    )
}

export default ReviewApp
