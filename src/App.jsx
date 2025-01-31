import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './component/global/Navbar'
import Sidebar from './component/global/Sidebar'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Products from './pages/Products/Products'
import CreateProduct from './pages/Products/CreateProduct'
import Order from './pages/Order/Order'
import Brand from './pages/barnd/Brand'
import Cetagory from './pages/cetagory/Category'
import OrderDetail from './pages/Order/OrderDetail'
import ProductReview from './pages/Products/ProductReview'
import CreateCetagory from './pages/cetagory/CreateCetagory'
import CreateBrand from './pages/barnd/CreateBrand'
import RefundRequest from './pages/refund/RefundRequest'
import Review from './pages/review/Review'
import AccountSetting from './pages/setting/AccountSetting'
import Video from './pages/video/Video'
import DashBoard from './pages/dashBoard/DashBoard'

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
            <Route path='/' element={<DashBoard />} />
            <Route path='/product' element={<Products />} />
            <Route path='/create-product' element={<CreateProduct />} />
            <Route path='/product-review' element={<ProductReview />} />
            <Route path='/order' element={<Order />} />
            <Route path='/order-detail' element={<OrderDetail />} />
            <Route path='/cetagory' element={<Cetagory />} />
            <Route path='/create-cetagory' element={<CreateCetagory />} />
            <Route path='/brand' element={<Brand />} />
            <Route path='/create-brand' element={<CreateBrand />} />
            <Route path='/refund-request' element={<RefundRequest />} />
            <Route path='/review' element={<Review />} />
            <Route path='/video' element={<Video />} />
            <Route path='/account-setting' element={<AccountSetting />} />
          </Routes>
        </div>

      </div >
    </>
  )
}

export default App
