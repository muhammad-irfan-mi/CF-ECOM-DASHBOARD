import { Delete, Edit, Visibility } from '@mui/icons-material'
import { Fab } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { ThemeContext } from '../../context/ContextProvider';
import { deleteProduct, getAllProducts } from '../../_api/products';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const navigate = useNavigate()
    const [product, setProducts] = useState([])

    const fetchAllProducts = async () => {
        console.log("Fetching all products")
        const p = await getAllProducts()
        console.log({ p })
        setProducts(p)
    }
    useEffect(() => {
        fetchAllProducts()
    }, [])
    const context = useContext(ThemeContext)

    const handleCreateProduct = () => {
        navigate('/create-product')
    }
    return (
        <>

            <div className='bg-[#edeeef] h-[89vh] overflow-auto py-5'>
                <div className='w-[97%] mb-6 mx-auto items-center justify-between'>
                    <h3 className='text-3xl font-semibold'>Product</h3>
                    <div className='my-5 flex justify-between'>
                        <div className={`flex px-3 items-center text-gray-400 rounded-md ${context.colors.boxbg}`}>
                            <SearchIcon />
                            <input type="text" name="" id="" placeholder='Search' className='w-full p-3 border-none outline-none text-black' />
                        </div>
                        <button className={`font-semibold ${context.colors.btn} ${context.colors.btnhover} p-3 py-2 rounded-md `} onClick={handleCreateProduct}><AddIcon /> Create Product</button>
                    </div>
                </div>
                <div className='w-[97%] mx-auto'>
                    {product && product.map((item, i) => {
                        return <div key={i} className={`flex items-center justify-between mt-1 rounded-md pl-5 ${context.colors.boxbg}`}>
                            <div className='flex items-center w-48'>
                                <img src={item.picUrl} alt="" className='w-16' />
                                <h3 className='text-lg font-semibold'>{item.name}</h3>
                            </div>
                            <h3 className='text-lg font-semibold'>{item.category}</h3>
                            <div>
                                <h3 className='text-lg font-semibold'>
                                    <img src={item.brandUrl} alt="" className='w-24' />
                                </h3>
                            </div>
                            <h3 className='text-lg font-semibold'>{item.price}</h3>
                            <div className="name w-[15rem] h-[4rem]   flex justify-center gap-4 items-center" >
                                <Fab
                                    size='small'
                                    className='name'
                                    color="info"
                                    aria-label="add">
                                    <Edit />        
                                </Fab>
                                <Fab
                                    onClick={async () => await deleteProduct(item.id)}
                                    size='small'
                                    className='name'
                                    color="error"
                                    aria-label="add">
                                    <Delete />
                                </Fab>
                                <Fab
                                    size='small'
                                    className='name'
                                    color="success"
                                    aria-label="add">
                                    <Visibility />
                                </Fab>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Products