import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ContextProvider";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const PricingQuery = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const context = useContext(ThemeContext)

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={`p-5 rounded-md ${context.colors.boxbg} ${context.colors.textColor}`}>
            <h1 className={`text-center my-5 text-2xl ${context.mode == 'dark' ? 'text-white' : 'text-black'}`}>Frequently Asked Questions</h1>

            <div>
                <h2 id="accordion-flush-heading-1">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full py-5 font-medium rtl:text-right border-b gap-3"
                        onClick={() => toggleAccordion(1)}
                        aria-expanded={activeIndex === 1}
                    >
                        <span className={`${context.mode == 'dark' ? 'text-white' : 'text-black'}`}>Is there any hidden fee in pro plan?</span>
                        {activeIndex === 1 ? <span><KeyboardArrowUpIcon /></span> : <span><KeyboardArrowDownIcon /></span>}
                    </button>
                </h2>
                <div
                    id="accordion-flush-body-1"
                    className={`${activeIndex === 1 ? "block" : "hidden"
                        } py-5 border-b border-gray-200 dark:border-gray-700`}
                >
                    <p className="mb-2 text-sm font-semibold">
                        There are no hidden fees in the Pro plan. Our fees are based on the number of users in your account. For instance, if you have 50 users, you will be charged for 50 licenses.
                    </p>
                </div>
            </div>

            <div>
                <h2 id="accordion-flush-heading-1">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full py-5 font-medium rtl:text-right border-b gap-3"
                        onClick={() => toggleAccordion(2)}
                        aria-expanded={activeIndex === 2}
                    >
                        <span className={`${context.mode == 'dark' ? 'text-white' : 'text-black'}`}>Do I need credit card to try?</span>
                        {activeIndex === 2 ? <span><KeyboardArrowUpIcon /></span> : <span><KeyboardArrowDownIcon /></span>}
                    </button>
                </h2>
                <div
                    id="accordion-flush-body-1"
                    className={`${activeIndex === 2 ? "block" : "hidden"
                        } py-5 border-b border-gray-200 dark:border-gray-700`}
                >
                    <p className="mb-2 text-sm font-semibold">
                        No, you can try the free or trial version without entering any credit card details.
                    </p>
                </div>
            </div>

            <div>
                <h2 id="accordion-flush-heading-1">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full py-5 font-medium rtl:text-right border-b gap-3"
                        onClick={() => toggleAccordion(3)}
                        aria-expanded={activeIndex === 3}
                    >
                        <span className={`${context.mode == 'dark' ? 'text-white' : 'text-black'}`}>Is there any limitations in the free version?</span>
                        {activeIndex === 3 ? <span><KeyboardArrowUpIcon /></span> : <span><KeyboardArrowDownIcon /></span>}
                    </button>
                </h2>
                <div
                    id="accordion-flush-body-1"
                    className={`${activeIndex === 3 ? "block" : "hidden"
                        } py-5 border-b border-gray-200 dark:border-gray-700`}
                >
                    <p className="mb-2 text-sm font-semibold">
                        The free version includes all the important features. The differences are that you can access data from the last 14 days and there is a 10GB free storage limitation on the free plan. After utilizing the 10GB of free storage, tracking will be limited to the timesheet.
                    </p>
                    <p className="mb-2 text-sm font-semibold">
                        You can continue to use the app and site for free to monitor the clock-in and clock-out times of your team members.
                    </p>
                </div>
            </div>

            <div>
                <h2 id="accordion-flush-heading-1">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full py-5 font-medium rtl:text-right border-b gap-3"
                        onClick={() => toggleAccordion(4)}
                        aria-expanded={activeIndex === 4}
                    >
                        <span className={`${context.mode == 'dark' ? 'text-white' : 'text-black'}`}>Can I get a demo?</span>
                        {activeIndex === 4 ? <span><KeyboardArrowUpIcon /></span> : <span><KeyboardArrowDownIcon /></span>}
                    </button>
                </h2>
                <div
                    id="accordion-flush-body-1"
                    className={`${activeIndex === 4 ? "block" : "hidden"
                        } py-5 border-b border-gray-200 dark:border-gray-700`}
                >
                    <p className="mb-2 text-sm font-semibold">
                        Yes, please schedule a 30-minute live demo with our team here.
                    </p>
                </div>
            </div>

            <div>
                <h2 id="accordion-flush-heading-1">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full py-5 font-medium rtl:text-right border-b gap-3"
                        onClick={() => toggleAccordion(5)}
                        aria-expanded={activeIndex === 5}
                    >
                        <span className={`${context.mode == 'dark' ? 'text-white' : 'text-black'}`}>I have used 100% of the storage. Can I delete datato reuse the free storage?</span>
                        {activeIndex === 5 ? <span><KeyboardArrowUpIcon /></span> : <span><KeyboardArrowDownIcon /></span>}
                    </button>
                </h2>
                <div
                    id="accordion-flush-body-1"
                    className={`${activeIndex === 5 ? "block" : "hidden"
                        } py-5 border-b border-gray-200 dark:border-gray-700`}
                >
                    <p className="mb-2 text-sm font-semibold">
                        No, the free storage allocation cannot be reused once it's fully utilized. For further details, please refer to this article.
                    </p>
                </div>
            </div>

            <div>
                <h2 id="accordion-flush-heading-1">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full py-5 font-medium rtl:text-right border-b gap-3"
                        onClick={() => toggleAccordion(6)}
                        aria-expanded={activeIndex === 6}
                    >
                        <span className={`${context.mode == 'dark' ? 'text-white' : 'text-black'}`}>How to change the credit card?</span>
                        {activeIndex === 6 ? <span><KeyboardArrowUpIcon /></span> : <span><KeyboardArrowDownIcon /></span>}
                    </button>
                </h2>
                <div
                    id="accordion-flush-body-1"
                    className={`${activeIndex === 6 ? "block" : "hidden"
                        } py-5 border-b border-gray-200 dark:border-gray-700`}
                >
                    <p className="mb-2">
                        To change your credit card information, please send an email to team@getworkfolio.com requesting the update of your card details.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default PricingQuery;
