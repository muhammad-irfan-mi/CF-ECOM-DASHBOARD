import React, { useContext, useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeContext } from '../../context/ContextProvider';
import { getAllOrders } from '../../_api/orders';

function Order() {
    const context = useContext(ThemeContext)
    const [orders, setOrders] = useState([])
    useEffect(() => {
        (async () => {
            const o = await getAllOrders()
            console.log({ o })
            setOrders(o)
        })()
    }, [])


    const _orders = [
        {
            qty: 3,
            purchaseDate: "10 Nov 2022",
            billingAddress: "Kelly Williams 777 Brockton Avenue, Abington MA 2351",
            amount: "$350.00",
            status: "Pending",
        },
        {
            qty: 3,
            purchaseDate: "10 Nov 2022",
            billingAddress: "Kelly Williams 777 Brockton Avenue, Abington MA 2351",
            amount: "$350.00",
            status: "Processing",
        },
        {
            qty: 3,
            purchaseDate: "10 Nov 2022",
            billingAddress: "Kelly Williams 777 Brockton Avenue, Abington MA 2351",
            amount: "$350.00",
            status: "Delivered",
        },
        {
            qty: 3,
            purchaseDate: "10 Nov 2022",
            billingAddress: "Kelly Williams 777 Brockton Avenue, Abington MA 2351",
            amount: "$350.00",
            status: "Cancelled",
        },
        {
            qty: 3,
            purchaseDate: "10 Nov 2022",
            billingAddress: "Kelly Williams 777 Brockton Avenue, Abington MA 2351",
            amount: "$350.00",
            status: "Delivered",
        },
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case "Pending":
                return "text-blue-600 bg-blue-100";
            case "Processing":
                return "text-yellow-600 bg-yellow-100";
            case "Delivered":
                return "text-green-600 bg-green-100";
            case "Cancelled":
                return "text-red-600 bg-red-100";
            default:
                return "";
        }
    };
    return (
        <div className='bg-[#edeeef] h-[89vh] overflow-auto py-5'>
            <div className='w-[97%] mb-6 mx-auto items-center justify-between'>

                <h3 className='text-3xl font-semibold'>Order</h3>
                <div className='my-5 flex justify-between'>
                    <div className='flex bg-white px-3 items-center text-gray-400 rounded-md'>
                        <SearchIcon />
                        <input type="text" name="" id="" placeholder='Search' className='w-full p-3 border-none outline-none text-black' />
                    </div>
                    <button className={`font-semibold ${context.colors.btn} ${context.colors.btnhover} p-3 py-2 rounded-md `}><AddIcon /> Create Order</button>
                </div>

                {/* Table Section  */}
                <div className="overflow-x-auto rounded-md bg-white">
                    <table className="min-w-full border-collapse border border-gray-200 text-left">
                        <thead >
                            <tr className="bg-gray-200">
                                <th className="px-4 py-8 border border-b-gray-200">Order ID</th>
                                {/* <th className="px-4 py-8 border border-b-gray-200">Qty</th> */}
                                <th className="px-4 py-8 border border-b-gray-200">Purchase Date</th>
                                <th className="px-4 py-8 border border-b-gray-200">Billing Address</th>
                                <th className="px-4 py-8 border border-b-gray-200">Amount</th>
                                <th className="px-4 py-8 border border-b-gray-200">Status</th>
                                <th className="px-4 py-8 border border-b-gray-200">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders && orders.map((order, index) => (
                                <tr key={index} className="hover:bg-gray-50 border">
                                    <td className="px-4 py-5 text-[12px]">{order.id.slice(0, 8)}...</td>
                                    {/* <td className="px-4 py-5">{order.qty}</td> */}
                                    <td className="px-4 py-5">{order.phoneNumber}</td>
                                    <td className="px-4 py-5">{order.address} ,{order.city}, {order.country}</td>
                                    <td className="px-4 py-5">Rs.{order.totalPrice}</td>
                                    <td className="px-4 py-5">
                                        <span
                                            className={`px-2 py-1 rounded-full text-sm ${getStatusClass(order.status)}`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-5 flex justify-center items-center space-x-2">
                                        <button className="text-gray-600 hover:text-blue-500">
                                            <RemoveRedEyeIcon />
                                        </button>
                                        <button className="text-gray-600 hover:text-red-500">
                                            <DeleteIcon />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Order
