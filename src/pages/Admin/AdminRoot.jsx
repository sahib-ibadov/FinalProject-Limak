import React from 'react'
import Header from '../../layout/Admin/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../layout/Admin/Footer/Footer'

const AdminRoot = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AdminRoot
