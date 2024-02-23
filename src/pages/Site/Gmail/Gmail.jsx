import React, { useContext, useEffect, useState } from 'react'
import './Gmail.css'
import Userleft from '../../../components/Userleft/Userleft'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import toast from 'react-hot-toast'
import MainContext from '../../../context/context'

const Gmail = () => {
    const { AppUserId, token } = useParams()
    const [gmail, setGmail] = useState([])
  const { open, setOpen, handleClose, handleOpen } = useContext(MainContext)

     const [loading, setLoading] = useState(false);
    const history=useNavigate()
    const Gmailhadeler = (newGmail) => {
        axios.patch(`https://localhost:7211/auth/ConfirmEmail`,
            {
                appUserId: AppUserId,
                token: token
                
            }).then(res => {
                axios.defaults.headers.common['Authorization'] = `Bearer ${res?.data?.token}`;
                handleOpen()
                toast.success('Seyfeniz Testiqlendi Login Olaraq Kabinetinize Kecid Ede Bilersiz')
                
            }).catch(e=>{
                console.log(e)
                toast.error('Qeydiyyatda Problem Yasandi Zehmet Olmasa Yeniden Qeydiyyatdan Kecin')
                history("/Qediyyat")
                
            })

     
    }
    return (
        <div className='umin'>
            <div style={{ width: "720px" }} >
                <Userleft />
            </div >
            <input value={gmail} onChange={(e) => setGmail(e.target.value)} className='inputGmail' type="text" placeholder='Gmail ' /> <button onClick={() => {
                Gmailhadeler(gmail)
            }} className='buutton' style={{ marginTop: "30px", width: "120px", height: "60px", borderRadius: "7px" }}>sub</button>
        </div>
    )
}

export default Gmail
