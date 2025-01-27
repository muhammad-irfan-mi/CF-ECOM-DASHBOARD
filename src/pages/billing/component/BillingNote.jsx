import React, { useContext } from 'react'
import { ThemeContext } from '../../../context/ContextProvider'

function BillingNote() {
    const context = useContext(ThemeContext)
    return (
        <div className={`p-5 rounded-md ${context.colors.boxbg} ${context.colors.textColor}`}>
            <h1 className={`text-center my-5 font-semibold text-lg ${context.mode == 'dark' ? 'text-white' : 'text-black'}`}>Notes</h1>
            <div className='px-7 p-3'>
                <ul className='space-y-3 list-disc'>
                    <li className='text-sm'>If you are an Indian customer, 18% of GST will be added externally. Kindly add your GST details during the checkout.
                    </li>
                    <li className='text-sm'>Want to go for an annual plan? Get up to 20% off with the annual subscriptions.
                    </li>
                    <li className='text-sm'>Volume license discounts are available starting for as low as 100 users, with discounts increasing depending on the number of licenses.
                    </li>
                    <li className='text-sm'>Are you a reseller or MSP? Up to 10% margin is available.
                    </li>
                    <li className='text-sm'>For all above queries, contact us through support chat or mail us mirfan.dev0@gmail.com
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default BillingNote
