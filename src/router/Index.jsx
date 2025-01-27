import React from 'react'
import { useLocation, Routes, Route } from 'react-router-dom'

function Index() {
    const location = useLocation()
    return (
        <div>
            {location.pathname !== '/' && location.pathname !== '/signup' && <Navbar />}
            <div className='flex'>
                <div className='w-[18%]'>
                    <Sidebar />
                </div>
                <div className='w-[82%]'>
                    <Routes>
                        <Route path='/' element={<Overview />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/forgot' element={<Forgot />} />
                        <Route path='/send-otp' element={<SendOTP />} />
                        <Route path='/confirm-password' element={<ConfirmPassword />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Index
