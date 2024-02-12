import React from 'react'
import './Userleft.css'
import { Link } from 'react-router-dom'
const Userleft = () => {
    return (


        <div className='userleft'>
            <ul>
                <li>
                    <div style={{ display: "flex", gap: "20px" ,textDecoration: "none",color:"black"}}> <i class="fa-solid fa-user"></i> <p>ASİMAN QASIMZADƏ</p></div>
                </li>
                <li>
                    <div style={{ display: "flex", gap: "20px" ,textDecoration: "none"}} ><i class="fa-regular fa-circle-user"></i> <p>Müştəri̇ kodu 0256069</p></div>
                </li>
                <li>
                    <Link to="/Bildirişlər" style={{ display: "flex", gap: "20px" ,textDecoration: "none"}} ><i class="fa-regular fa-bell"></i> <p>Bildirişlər</p></Link>
                </li>
                <li>
                    <Link to="/Sifarişlər" style={{ display: "flex", gap: "20px",textDecoration: "none" }} ><i class="fa-solid fa-bag-shopping"></i><p>Sifarişlər</p></Link>
                </li>
                <li>
                    <Link to="/Bağlamalar" style={{ display: "flex", gap: "20px",textDecoration: "none" }} ><i class="fa-solid fa-box-archive"></i> <p>Bağlamalar</p></Link>

                </li> 
                <li>
                <Link to="/Xaricdəkiünvanlar" style={{ display: "flex", gap: "20px",textDecoration: "none" }} ><i class="fa-solid fa-location-dot"></i> <p>Xaricdəki ünvanlar</p></Link>

                </li>
                
                <li>
                    <Link to="/Kuryer" style={{ display: "flex", gap: "20px",textDecoration: "none" }} ><i class="fa-solid fa-user-tie"></i> <p>Kuryer</p></Link>
                </li>
                <li>
                    <Link to="/Kargomat" style={{ display: "flex", gap: "20px",textDecoration: "none" }} ><img style={{ height: "20px", width: "20px" }} src="	https://limak.az/new_front/assets/img/icons/kargomat.svg" alt="" /> <p>Kargomat</p> </Link>

                </li>
                <li>
                    <Link to="/Sorğu" style={{ display: "flex", gap: "20px",textDecoration: "none" }} ><i class="fa-regular fa-circle-question"></i> <p>Sorğu</p></Link>

                </li>
                <li>
                    <Link to="/TRYbalans" style={{ display: "flex", gap: "20px",textDecoration: "none" }} > TRY balans </Link>

                </li>
                <li>
                    <Link to="/AZNbalans" style={{ display: "flex", gap: "20px",textDecoration: "none" }} >AZN Balans</Link>
                </li>
                <li>
                    <Link to="/Tənzimləmələr" style={{ display: "flex", gap: "20px" ,textDecoration: "none"}} >Tənzimləmələr</Link></li>
                <li>
                    <Link to="/Hesabdançıx" style={{ display: "flex", gap: "20px",textDecoration: "none" }} >Hesabdan çıx</Link>

                </li>
            </ul>
        </div>






    )
}

export default Userleft
