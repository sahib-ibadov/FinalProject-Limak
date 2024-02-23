import React, { useState } from 'react'
import './Magazalar.css'
import { useEffect } from 'react'
import axios from 'axios'

const Magazalar = () => {
    const [shops, setShops] = useState([])
    useEffect(() => {
        axios.get('https://localhost:7211/shops').then(res => {
            setShops(res.data)
        })
    }, [])

    return (
        <div className='Magazalar container'>
            <h2>Magazalar</h2>

            <div className="row w-100 ">
                {
                    shops?.slice(0,6).map((item, i) => {
                        return <div key={i} className='col-3'>
                            <div
                            ><a href={item.websitePath} >  <img className='image' style={{ height: "200px", width: "500px" }} src={item.imagePath} alt={item.name} /></a>
                            </div>

                        </div>
                    })
                }
                <a href="MAGAZALAR" style={{ textDecoration: "none", color: "#DD5334", marginTop: "30px" }} > <button className='button__dahacox'>   Daha cox  </button> </a>

            </div>

            {/* <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <div ><a href="" >  <img className='image' src="https://limakaz.s3.eu-west-2.amazonaws.com/public/shops/713.png" alt="" /></a>
                        </div>

                    </div>


                </div>

            </div> */}
            {/* <a href="MAGAZALAR" style={{textDecoration:"none",color:"#DD5334"}} > <button className='button__dahacox'>   Daha cox  </button> </a> */}

        </div>
    )
}

export default Magazalar
