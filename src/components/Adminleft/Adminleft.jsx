import React from 'react'
import './Adminleft.css'
import { Link, useLocation } from 'react-router-dom'
const Adminleft = () => {
    const location=useLocation( )
    return (
        <div>

            <div className='admin__left'>
                <div className='Home__admin'>
                    <h5 style={{ color: "black" }}> Home </h5>
                    <ul>
                        <li>
                            <Link className={  `Linkkk ${location.pathname=='/admin/Dashboard'? "activeSideBar":""}`} to="/admin/Dashboard" style={{ color: "black" }} ><i class="fa-solid fa-table-columns"></i><p style={{ marginBottom: "0px" }}>Dashboard</p></Link>
                        </li>
                    </ul>
                </div>
                <div className='admin__ui'>
                    <h5 style={{ color: "black" }}>Models</h5>
                    <ul>
                        <li>
                            <Link className={  `Linkkk ${location.pathname=='/Admin/Auth'? "activeSideBar":""}`} to="/Admin/Auth" style={{ color: "black" }}><i class="fa-solid fa-user-lock"></i> <p style={{ marginBottom: "0px" }}>Auth</p></Link>
                        </li>
                        <li>
                            <Link className='Linkkk' to="/Admin/Categories" style={{ color: "black" }}><i class="fa-solid fa-tags"></i><p style={{ marginBottom: "0px" }}>Categories</p></Link>
                        </li>
                        <li>
                            <Link className='Linkkk' to="/Admin/Citizenships" style={{ color: "black" }}><i class="fa-solid fa-passport"></i><p style={{ marginBottom: "0px" }}>Citizenships</p></Link>
                        </li>
                        <li>
                            <Link className='Linkkk' to="/Admin/Countries" style={{ color: "black" }}><i class="fa-regular fa-globe-asia"></i><p style={{ marginBottom: "0px" }}>Countries</p></Link>
                        </li>
                        <li>
                            <Link className='Linkkk' to="/Admin/Deliveries" style={{ color: "black" }}><i class="fa-solid fa-truck"></i><p style={{ marginBottom: "0px" }}>Deliveries</p></Link>
                        </li>
                        <li>
                            <Link className='Linkkk' to="/Admin/DeliveryAreas" style={{ color: "black" }}><i class="fa-solid fa-map-marked-alt"></i><p style={{ marginBottom: "0px" }}>Delivery Areas</p></Link>
                        </li>
                        <li>
                            <Link className='Linkkk' to="/Admin/Genders" style={{ color: "black" }}><i class="fa-solid fa-venus-mars"></i><p style={{ marginBottom: "0px" }}>Genders</p></Link>
                        </li>
                        <li>
                            <Link className='Linkkk' to="/Admin/Kargomats" style={{ color: "black" }}><i class="fa-solid fa-box"></i><p style={{ marginBottom: "0px" }}>Kargomats</p></Link>
                        </li>
                        <li>
                            <Link className='Linkkk' to="/Admin/Notifications" style={{ color: "black" }}><i class="fa-solid fa-bell"></i><p style={{ marginBottom: "0px" }}>Notifications</p></Link>
                        </li>
                        <li>
                            <Link className='Linkkk' to="/Admin/Orders" style={{ color: "black" }}><i class="fa-solid fa-shopping-cart"></i><p style={{ marginBottom: "0px" }}>Orders</p></Link>
                        </li>
                        <li>
                            <Link className='Linkkk' to="/Admin/Shops" style={{ color: "black" }}><i class="fa-solid fa-store"></i><p style={{ marginBottom: "0px" }}>Shops</p></Link>
                        </li>
                        <li>
                            <Link className='Linkkk' to="/Admin/Statuses" style={{ color: "black" }}><i class="fa-solid fa-check-circle"></i><p style={{ marginBottom: "0px" }}>Statuses</p></Link>
                        </li>
                        <li>
                            <Link className='Linkkk' to="/Admin/Transactions" style={{ color: "black" }}><i class="fa-solid fa-exchange-alt"></i><p style={{ marginBottom: "0px" }}>Transactions</p></Link>
                        </li>
                        <li>
                            <Link className='Linkkk' to="/Admin/UserPositions" style={{ color: "black" }}><i class="fa-solid fa-user-tag"></i><p style={{ marginBottom: "0px" }}>User Positions</p></Link>
                        </li>
                        <li>
                            <Link className='Linkkk' to="/Admin/Warehouses" style={{ color: "black" }}><i class="fa-solid fa-warehouse"></i><p style={{ marginBottom: "0px" }}>Warehouses</p></Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Adminleft
