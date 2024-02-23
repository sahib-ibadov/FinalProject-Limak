import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './Xeberler.css'
const XƏBƏRLER = () => {
  const [news, setNews] = useState([])
  useEffect(() => {
    axios.get('https://localhost:7211/news').then(res => {
      setNews(res.data)
    }).catch(e => { console.log(e) })
  }, [])
  return (
    <div style={{ minHeight: "60vh" }}>

      <div className='container'>
        <div className='row' style={{gap:"40px"}}>
          {
            news.map((item, i) => {
              return <div  className='col-4 Cards  ' key={i} style={{ height: "300px", width: "270px", backgroundColor: "white", marginTop: "20px", borderRadius: '5px' }}>
                <Link to={`/xeberler/${item.id}`}>

                  <img style={{ height: "220px", width: "250px" }} src={item.imagePath} />
                  <h4 style={{ color: "black", }}>{item.description}</h4>

                  <p><img style={{ height: "16px", width: "16px", color: "black" }} src="https://limak.az/new_front/assets/img/icons/calendar.svg" alt="" />
                    <span style={{ height: "220px", width: "250px", color: "black" }}>{item.createdTime.substring(0, 10)}</span>
                  </p>


                </Link>
              </div>
            })
          }

        </div>
      </div>

    </div>

  )
}

export default XƏBƏRLER
