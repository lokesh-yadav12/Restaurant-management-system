import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route, Navigate } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Login from "./components/Login"
import PrivateRoute from './components/PrivateRoute'
import 'react-toastify/dist/ReactToastify.css'

export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = '₹'

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '')

  useEffect(() => {
    if (token) localStorage.setItem('token', token)
  }, [token])

  return (
    <div className='bg-gradient-to-r from-yellow-50 to-orange-100 min-h-screen'>
      <Routes>
        {/* Login route always accessible */}
        <Route path="/" element={<Login setToken={setToken} />} />

        {/* Protected routes */}
        <Route
          path="/add"
          element={
            <PrivateRoute token={token}>
              <>
                <Navbar setToken={setToken} />
                <div className='flex w-full'>
                  <Sidebar />
                  <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
                    <Add token={token} />
                  </div>
                </div>
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/list"
          element={
            <PrivateRoute token={token}>
              <>
                <Navbar setToken={setToken} />
                <div className='flex w-full'>
                  <Sidebar />
                  <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
                    <List token={token} />
                  </div>
                </div>
              
            </>
            </PrivateRoute>
          }
        />
        {/* Redirect root / to login if not logged in */}
        <Route path="/" element={token ? <Navigate to="/add" /> : <Navigate to="/login" />} />
        {/* Catch all unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App
