import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { string } from 'yup'


const YENİLİKLƏR = () => {
  const [news, setNews] = useState([])
  useEffect(() => {
    axios.get('https://localhost:7211/news').then(res => {
      setNews(res.data)
    }).catch(e => { console.log(e) })
  }, [])
  return (
    <div style={{ marginLeft: "160px", marginTop: "90px" }}>
      <h2>YENİLİKLƏR VƏ ELANLAR</h2>
      <div className='container'>
        <div className='row'style={{gap:"35px"}}>
          {
            news.map((item, i) => {
              return <div className='col-3 Cards  ' key={i} style={{ height: "300px", width: "270px", backgroundColor: "white", marginTop: "20px", borderRadius: '5px' }}>
                <a href="">

                  <img style={{ height: "220px", width: "250px" }} src={item.imagePath} />
                  <h4 style={{ color: "black", }}>{item.description}</h4>
                  <p><img style={{ height: "16px", width: "16px", color: "black" }} src="https://limak.az/new_front/assets/img/icons/calendar.svg" alt="" />
                    <span style={{ height: "220px", width: "250px", color: "black" }}>{item.createdTime.substring(0, 10)}</span>
                  </p>

                </a>
              </div>
            })
          }

        </div>

      </div>
      <a href="MAGAZALAR" style={{ textDecoration: "none", color: "#DD5334" }} > <button className='button__dahacox'style={{marginTop:"20px"}}>   Daha cox  </button> </a>
    </div>
  )
}

export default YENİLİKLƏR
