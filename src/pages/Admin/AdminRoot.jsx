import React from 'react'
import Header from '../../layout/Admin/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../layout/Admin/Footer/Footer'
import Adminleft from '../../components/Adminleft/Adminleft'

const AdminRoot = () => {
  return (
    <div style={{display:"flex",alignItems:"ennter cer"}}>
      <Header/>
      <Adminleft/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AdminRoot
