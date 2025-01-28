import React, { useContext, useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeContext } from '../../context/ContextProvider';


function OrderDetail() {
    const context = useContext(ThemeContext)
    const status = [
        { name: "status" },
        { name: "Delivered" },
        { name: "Proccessing" },
        { name: "Cancelled" },
    ]

    const [products, setProducts] = useState({
        orderId: "f0ba538b-c8f3-45ce-b6c1-209cf07ba5f8",
        placedOn: "10 Nov, 2022",
        status: "Delivered",
        products: [
            {
                name: "Budi 2017",
                price: 226.00,
                quantity: 1,
                image: "https://via.placeholder.com/150?text=Car+Image",
                properties: "Black, L",
            },
            {
                name: "Budi 2017",
                price: 226.00,
                quantity: 15,
                image: "https://via.placeholder.com/150?text=Car+Image",
                properties: "Black, L",
            },
            {
                name: "Budi 2017",
                price: 226.00,
                quantity: 11,
                image: "https://via.placeholder.com/150?text=Car+Image",
                properties: "Black, L",
            },
        ],
    });

    return (
        <div className='bg-[#edeeef] h-[89vh] overflow-auto py-5'>

            <div className='w-[97%] mx-auto'>
                <h3 className='text-3xl font-semibold'>Order List</h3>
                <div className={`border p-5 my-6 rounded-md ${context.colors.boxbg}`}>
                    <div className='text-gray-500 flex text-sm'>
                        <h3>Order ID: <h2 className='text-black inline'>{products.orderId}</h2></h3>
                        <h3 className='ml-14'>Placed on: <h2 className='text-black inline'>{products.placedOn}</h2></h3>
                    </div>
                    <div className='flex gap-5 my-6'>
                        <input type="text" name="" id="" className='w-full border p-3 rounded-md outline-blue-500' placeholder='Add Product' />
                        <select name="status" id="staustcheck" className='w-full p-2 rounded-md border'>
                            {status.map((name, i) => {
                                return <option value={name.name} key={i}>{name.name}</option>
                            })}
                        </select>
                    </div>
                    {products.products.map((data, i) => {
                        return <div className='flex justify-between items-center text-gray-500 my-7' key={i}>
                            <div className='flex'>
                                <img src={data.image} alt="Error" className='border h-16 rounded-md' />
                                <div className='ml-5'>
                                    <h2>{data.name}</h2>
                                    <div className='my-3 flex justify-between'>
                                        <h3>${data.price} X </h3>
                                        <h3 className='bg-gray-300 px-1 rounded-md'> {data.quantity} </h3>
                                    </div>
                                </div>
                            </div>
                            <h2>Product properties: {data.properties}</h2>
                            <DeleteIcon />
                        </div>
                    })}
                </div>
                <div className='flex gap-8'>
                    <div className={`border w-[50%] p-5  rounded-md ${context.colors.boxbg}`}>
                        <form action="">
                            <div>
                                <label htmlFor="">Shipping Address</label>
                                <textarea name="" rows={4} id="" className='p-5 w-full border outline-none rounded-lg' placeholder='Kelly Williams 777 Brockton Avenue, Abington MA 2351'></textarea>
                            </div>
                            <div className='my-5'>
                                <label htmlFor="">Costumer's Note</label>
                                <textarea name="" rows={4} id="" className='p-5 w-full border outline-none rounded-lg' placeholder='Please deliver ASAP.'></textarea>
                            </div>
                        </form>
                    </div>
                    <div className={`border w-[50%] p-5 h-[20%] rounded-md ${context.colors.boxbg}`}>
                        <h3 className='text-md text-gray-700 font-medium'>Total Summary</h3>
                        <div className='flex justify-between items-center my-5 text-sm text-gray-500'>
                            <h3 className=''>Subtotal</h3>
                            <h3 className='font-medium'>$350</h3>
                        </div>
                        <div className='flex justify-between text-sm items-center text-gray-500'>
                            <h3>Shipping Fee:</h3>
                            <div className='flex gap-3 items-center'>
                                <h3 className='font-medium'>$</h3>
                                <input type="number" className='border w-16 p-2 rounded-md border-gray-300' placeholder='10' />
                            </div>
                        </div>
                        <div className='flex justify-between my-5 text-sm items-center text-gray-500'>
                            <h3>Discount:</h3>
                            <div className='flex gap-3 items-center'>
                                <h3 className='font-medium'>$</h3>
                                <input type="number" className='border w-16 p-2 rounded-md border-gray-300' placeholder='10' />
                            </div>
                        </div>
                        <hr />
                        <div className='flex justify-between font-medium text-gray-700 my-5 text-sm'>
                            <h3>Total:</h3>
                            <h3>$350</h3>
                        </div>
                        <h3 className='text-sm text-gray-700 font-medium'>Paid by Credit/Debit Card</h3>
                    </div>
                </div>
                <button className={`my-8 font-semibold ${context.colors.btn} ${context.colors.btnhover} p-3 py-2 rounded-md `}> Save Changes</button>
            </div>
        </div>
    )
}

export default OrderDetail
