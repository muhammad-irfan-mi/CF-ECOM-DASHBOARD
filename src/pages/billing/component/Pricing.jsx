import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ContextProvider'

function Pricing() {
    const context = useContext(ThemeContext)

    return (
        <div>
            <h3 className={`text-3xl text-center font-semibold my-5 ${context.mode == 'dark' ? 'text-white' : 'text-black'}`}>
                Monthly Pricing
            </h3>
            <div className="flex gap-1 w-[70%] mx-auto pb-5">
                {/* Hobby Plan */}
                <div className={`w-[50%] rounded-3xl border p-5 ${context.colors.textColor} shadow-2xl`}>
                    <h3 id="tier-hobby" className="text-base/7 font-semibold text-blue-500">
                        Hobby
                    </h3>
                    <p className="mt-4 flex items-baseline gap-x-2">
                        <span className={`text-5xl font-semibold ${context.mode == 'dark' ? 'text-white' : 'text-black'}`}>
                            $0
                        </span>
                        <span className="text-base">/user/month</span>
                    </p>
                    <p className={`mt-5 ${context.mode == 'dark' ? 'text-white' : 'text-black'}`}>
                        You are in free plan <br />
                        You have used 0% of your storage
                    </p>
                    <ul className="mt-5 text-sm space-y-3">
                        <li className="flex gap-x-3">Unlimited users</li>
                        <li className="flex gap-x-3">Up to 2 teams</li>
                        <li className="flex gap-x-3">Computer activity tracking</li>
                        <li className="flex gap-x-3">Timesheet and attendance</li>
                        <li className="flex gap-x-3">Custom rules to detect slacking employees</li>
                        <li className="flex gap-x-3">Employee work screenshots every 10 minutes</li>
                        <li className="flex gap-x-3">Last 14 days data retention</li>
                        <li className="flex gap-x-3">10 GB file storage limit</li>
                        <li className="flex gap-x-3"><del>Last 3 months screenshot retention</del></li>
                        <li className="flex gap-x-3"><del>Timelapse videos of work progress</del></li>
                        <li className="flex gap-x-3"><del>Data Export to CSV, XLS</del></li>
                        <li className="flex gap-x-3"><del>Live Support</del></li>
                    </ul>
                    <button className={`mt-10 w-full border px-5 p-2 transition duration-400  rounded-lg   ${context.mode == 'dark' ? 'hover:border-white hover:text-white text-[#b2b2b6] border-[#b2b2b6]' : "hover:border-black hover:text-black border-[#7d7d85] text-[#7d7d85]"}`}>Get Started Free</button>
                </div>

                {/* Enterprise Plan */}
                <div className={`w-[50%] rounded-3xl p-5 ${context.colors.boxbg} ${context.colors.textColor} shadow-2xl`}>
                    <h3
                        id="tier-enterprise"
                        className="text-base/7 font-semibold text-blue-500"
                    >
                        Enterprise
                    </h3>
                    <p className="mt-4 flex items-baseline gap-x-2">
                        <span className={`text-5xl font-semibold ${context.mode == 'dark' ? 'text-white' : 'text-black'}`}>
                            $4.99
                        </span>
                        <span className="text-base">/user/month</span>
                    </p>
                    <p className={`mt-5 text-sm w-[80%] ${context.mode == 'dark' ? 'text-white' : 'text-black'}`}>
                        For long teams optimizing their work productivity for the long term
                    </p>
                    <ul className="mt-5 text-sm space-y-3">
                        <li className="flex gap-x-3">Unlimited tracking</li>
                        <li className="flex gap-x-3">Unlimited teams</li>
                        <li className="flex gap-x-3">Computer activity tracking</li>
                        <li className="flex gap-x-3">Timesheet and attendance</li>
                        <li className="flex gap-x-3">Custom rules to detect slacking employees</li>
                        <li className="flex gap-x-3">Employee work screenshots every 1 minute</li>
                        <li className="flex gap-x-3">Last 1 year data retention</li>
                        <li className="flex gap-x-3">Unlimited Storage</li>
                        <li className="flex gap-x-3">Last 3 months screenshot retention</li>
                        <li className="flex gap-x-3">Timelapse videos of work progress</li>
                        <li className="flex gap-x-3">Data Export to CSV, XLS</li>
                        <li className="flex gap-x-3">Live Support</li>
                    </ul>
                    <button
                        className={`mt-10 w-full px-5 p-2 transition duration-400  rounded-lg ${context.colors.btnbg} ${context.colors.btntext} ${context.colors.btnhover}`}
                    >
                        Start 14 days trial
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pricing
