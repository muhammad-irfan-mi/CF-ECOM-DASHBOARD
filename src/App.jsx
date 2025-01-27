import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './component/global/Navbar'
import Sidebar from './component/global/Sidebar'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Overview from './pages/overview/Overview'
import Products from './pages/Products/Products'
import CreateProduct from './pages/Products/CreateProduct'
import Order from './pages/Order/Order'
import Cetagory from './pages/cetagory/Category'
import OrderDetail from './pages/Order/OrderDetail'
import Screenshot from './pages/screenshot/Screenshot'
import Billing from './component/billing/Billing'
import ApplyLeave from './pages/Leave/ApplyLeave'
import TimeSheet from './pages/timeSheet/TimeSheet'
import Timeline from './pages/timeline/Timeline'
import Reports from './pages/reports/Reports'
import ManageLeave from './pages/Leave/ManageLeave'
import ManageHoliday from './pages/Leave/ManageHoliday'
import Setting from './pages/setting/Setting'
import ReviewApp from './pages/AppHistory/ReviewApp'
import Apphistory from './pages/AppHistory/Apphistory'
import BillingMain from './pages/billing/BillingMain'
import AppSummary from './pages/AppHistory/AppSummary'

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

            <Route path='/billing-page' element={<Billing />} />
            <Route path='/' element={<Overview />} />
            <Route path='/product' element={<Products />} />
            <Route path='/create-product' element={<CreateProduct />} />
            <Route path='/order' element={<Order />} />
            <Route path='/order-detail' element={<OrderDetail />} />
            <Route path='/cetagory' element={<Cetagory />} />
            <Route path='/apply-leave' element={<ApplyLeave />} />
            <Route path='/manage-leave' element={<ManageLeave />} />
            <Route path='/manage-holiday' element={<ManageHoliday />} />
            <Route path='/time-sheet' element={<TimeSheet />} />
            <Route path='/time-line' element={<Timeline />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/review-app' element={<ReviewApp />} />
            <Route path='/app-history' element={<Apphistory />} />
            <Route path='/billing-main' element={<BillingMain />} />
            <Route path='/app-summary' element={<AppSummary />} />
          </Routes>
        </div>

      </div >
    </>
  )
}

export default App
