import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ContextProvider';

const Timeline = () => {
    const context = useContext(ThemeContext)
    const activityData = [
        { color: 'green-600', label: 'Productive Apps Time' },
        { color: 'red-600', label: 'Unproductive Apps Time' },
        { color: 'blue-600', label: 'Neutral Apps Time' },
        { color: 'orange-500', label: 'Idle Time' },
        { color: 'yellow-500', label: 'Not In Work' },
        { color: 'gray-400', label: 'Untracked' },
    ];

    return (
        <div className={`text-center h-[89vh] p-5 py-10  overflow-auto ${context.colors.bgcolor} ${context.colors.textColor}`}>
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Today Activities</h2>
                <div className="flex gap-4">
                    {activityData.map((item, index) => (
                        <div key={index} className="flex items-center">
                            <span
                                className={`w-4 h-4 rounded-full bg-${item.color} mr-2`}
                                // aria-hidden="true"
                            ></span>
                            <span className="text-sm font-medium">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
            <p className="text-lg mt-10 font-semibold">No data found!!!</p>
        </div>
    );
};

export default Timeline;
