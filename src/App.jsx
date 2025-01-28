import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './component/global/Navbar'
import Sidebar from './component/global/Sidebar'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Overview from './pages/overview/Overview'
import Products from './pages/Products/Products'
import CreateProduct from './pages/Products/CreateProduct'
import Order from './pages/Order/Order'
import Brand from './pages/barnd/Brand'
import Cetagory from './pages/cetagory/Category'
import OrderDetail from './pages/Order/OrderDetail'
import ProductReview from './pages/Products/ProductReview'
import CreateCetagory from './pages/cetagory/CreateCetagory'
import CreateBrand from './pages/barnd/CreateBrand'

function App() {
  const location = useLocation();
  const [token, setToken] = useState('');


  return (
    <>
      <div className='flex '>
        <div className='w-[20%]'>
          <Sidebar />
        </div>
        <div className='w-[80%]'>
          <Navbar />
          <Routes>

            {/* <Route path='/billing-page' element={<Billing />} /> */}
            <Route path='/' element={<Overview />} />
            <Route path='/product' element={<Products />} />
            <Route path='/create-product' element={<CreateProduct />} />
            <Route path='/product-review' element={<ProductReview />} />
            <Route path='/order' element={<Order />} />
            <Route path='/order-detail' element={<OrderDetail />} />
            <Route path='/cetagory' element={<Cetagory />} />
            <Route path='/create-cetagory' element={<CreateCetagory />} />
            <Route path='/brand' element={<Brand />} />
            <Route path='/create-brand' element={<CreateBrand />} />
          </Routes>
        </div>

      </div >
    </>
  )
}

export default App
