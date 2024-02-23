import React, { useEffect } from 'react'
import './Userleft.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Userleft = () => {
    const [username, setUsername] = useState(localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {})
    const [error, setError] = useState("")
    const [dummy, setDummy] = useState(false)
    const navigate = useNavigate()
    // const [usersurname,setUsersurname]=useState([])


    useEffect(() => {
        axios.get("https://localhost:7211/auth/GetCurrentUserInfo").then(res => {
            setUsername(res.data)
            localStorage.setItem('userInfo', JSON.stringify(res.data))
            setDummy(!dummy)
            console.log(res.data)
            // setUsersurname(res.data)
            // navigate('/')
            // {usersurname?.username}


        }).catch(err => {
            setError(err.message)
        })
    }, [])
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleExit = () => {

        setShowModal(true);
    };
    const handleConfirmExit = () => {
        localStorage.removeItem('userInfo')
        localStorage.removeItem('token')
        localStorage.removeItem('isLogin')
        window.location.href = "http://localhost:3000/";
    };
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    const token = JSON.parse(localStorage.getItem('token'))

    return (


        <div className='userleft ' style={{ width: '30%', backgroundColor: "white" }}>
            <ul>
                <li>
                    <div style={{ display: "flex", gap: "20px", textDecoration: "none", color: "black" }}> <i class="fa-solid fa-user"></i> <p style={{ marginBottom: "0px" }}>{username?.name}</p></div>
                </li>
                <li>
                    <div style={{ display: "flex", gap: "20px", textDecoration: "none" }} ><i class="fa-regular fa-circle-user"></i> <p style={{ marginBottom: "0px" }}>Müştəri̇ kodu 0256069</p></div>
                </li>
                <li>
                    <Link to="/Bildirişlər" style={{ display: "flex", gap: "20px", textDecoration: "none" }} ><i class="fa-regular fa-bell"></i> <p style={{ marginBottom: "0px" }}>Bildirişlər</p></Link>
                </li>
                <li>
                    <Link to="/Sifarişlər" style={{ display: "flex", gap: "20px", textDecoration: "none" }} ><i class="fa-solid fa-bag-shopping"></i><p style={{ marginBottom: "0px" }}>Sifarişlər</p></Link>
                </li>
                <li>
                    <Link to="/Bağlamalar" style={{ display: "flex", gap: "20px", textDecoration: "none" }} ><i class="fa-solid fa-box-archive"></i> <p style={{ marginBottom: "0px" }}>Bağlamalar</p></Link>

                </li>
                <li>
                    <Link to="/Xaricdəkiünvanlar" style={{ display: "flex", gap: "20px", textDecoration: "none" }} ><i class="fa-solid fa-location-dot"></i> <p style={{ marginBottom: "0px" }}>Xaricdəki ünvanlar</p></Link>

                </li>

                <li>
                    <Link to="/Kuryer" style={{ display: "flex", gap: "20px", textDecoration: "none" }} ><i class="fa-solid fa-user-tie"></i> <p style={{ marginBottom: "0px" }}>Kuryer</p></Link>
                </li>
                <li>
                    <Link to="/UserKargomatt" style={{ display: "flex", gap: "20px", textDecoration: "none" }} ><img style={{ height: "20px", width: "20px" }} src="	https://limak.az/new_front/assets/img/icons/kargomat.svg" alt="" /> <p style={{ marginBottom: "0px" }}>kargomat</p> </Link>

                </li>
                <li>
                    <Link to="/Sorğu" style={{ display: "flex", gap: "20px", textDecoration: "none" }} ><i class="fa-regular fa-circle-question"></i> <p style={{ marginBottom: "0px" }}>Sorğu</p></Link>

                </li><li>
                    <Link   style={{ display: "flex", gap: "20px", textDecoration: "none" }} ><i class="fa-solid fa-square-envelope"></i> <p style={{ marginBottom: "0px" }}>Gmail</p></Link>

                </li>

                {/* <li>
                    <Link to="/TRYbalans" style={{ display: "flex", gap: "20px",textDecoration: "none" }} > <p style={{ marginBottom: "0px" }}> TRY balans</p>  </Link>

                </li> */}
                <li>
                    <Link to="/AZNbalans" style={{ display: "flex", gap: "20px", textDecoration: "none" }} >  <p style={{ marginBottom: "0px" }}> AZN Balans</p> </Link>
                </li>
                <li>
                    <Link to="/Tənzimləmələr" style={{ display: "flex", gap: "20px", textDecoration: "none" }} > <p style={{ marginBottom: "0px" }}>Tənzimləmələr </p> </Link></li>
                <li>
                    <button onClick={handleExit} style={{ display: "flex", gap: "20px", textDecoration: "none" }} > <p style={{ marginBottom: "0px" }}>Hesabdan çıx </p> </button>

                </li>
            </ul>
            <div>
                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={handleCloseModal}>&times;</span>
                            <img src="https://limak.az/new_front/assets/img/SehifeYuklenmedi.png" alt="Sehife Yuklenmedi" />
                            <p>Çıxış etməyə əminsiniz?</p>
                            <div style={{ display: "flex", gap: "70px", padding: "30px" }}>
                                <button style={{ width: "100px" }} onClick={handleCloseModal}>XEYR</button>
                                <button style={{ width: "100px" }} onClick={handleConfirmExit}>BƏLİ</button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>






    )
}

export default Userleft
