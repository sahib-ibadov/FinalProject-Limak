import React from 'react'
import Userleft from '../../../components/Userleft/Userleft'
import { Link } from 'react-router-dom'

const User = () => {
    return (
        <div className='container'  >

            <div className="row" style={{ display: "flex" }}>
                <div className='d-none d-md-block col-md-4 col-lg-3 col-12'>
                    <Userleft />
                </div>
                {/* <div className='col-sm-12 col-md-8 col-lg-9' style={{ display: "flex", gap: "20px" }} >
                    <div class="card-p6q" style={{height:"150px" ,width:"120px",textAlign:"center",justifyContent:"center"}}>
                        <img style={{ marginLeft: "29px" }} src="https://limak.az/new_front/assets/img/dashboard/icons/bag-color.svg" />
                        <h4 class="title-b2h">
                            Sifarişlər
                        </h4>
                    </div>
                    <a href="">
                        <div class="card-p6q">
                            <img style={{ marginLeft: "70px" }} src="https://limak.az/new_front/assets/img/dashboard/icons/file-color.svg" />
                            <h4 class="title-iwi">
                                Bəyan Gözləyən
                            </h4>
                        </div>
                    </a>
                    <div class="card-6oi">
                        <img style={{ marginLeft: "45px" }} src="https://limak.az/new_front/assets/img/dashboard/icons/box-color.svg" />
                        <h4 class="title-jbs">
                            Bağlamalar
                        </h4>
                    </div>
                    <div class="card-lkb">
                        <img style={{ marginLeft: "90px" }} src="https://limak.az/new_front/assets/img/dashboard/icons/location-color.svg" />
                        <h4 class="title-id7">
                            Xaricdəki ünvanlar
                        </h4>
                    </div>
                    <div class="card-o39">
                        <img style={{ marginLeft: "21px" }} src="https://limak.az/new_front/assets/img/dashboard/icons/employee-color.svg" />
                        <h4 class="title-8q3">
                            Kuryer
                        </h4>
                    </div>
                    <div class="card-7o6">
                        <img  style={{ marginLeft: "15px" }}  src="https://limak.az/new_front/assets/img/dashboard/icons/chat-color.svg"/>
                            <h4 class="title-wtc">
                                Sorğu
                            </h4>
                    </div>





                </div> */}
            </div>

        </div>
    )
}

export default User
