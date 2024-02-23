import React, { useEffect, useState } from 'react'
import './Detail.css'
import { useParams } from 'react-router'
import axios from 'axios'
import moment from 'moment'
const Detail = () => {
  const { id } = useParams()
  const [detail, setDetail] = useState({})

  useEffect(() => {
    axios.get(`https://localhost:7211/news/${id}`).then(res => {
      setDetail(res.data)
    })
  }, [])
  return (
    <div>

      <div className="container">
        <div className="row">
          <div className='col-md-8 col-12'>
            <div style={{ marginTop: "50px" }} >
              <img style={{ height: "400px", width: "940px" }} src={detail?.imagePath} alt="" />
              <h4 style={{ marginTop: "60px", fontSize: "32px" }} >{detail?.subject}</h4>
              <p style={{ fontSize: "28px", marginTop: "30px" }} >{detail?.description} </p>

              <div style={{ display: "flex", gap: "45%" }} >
                <div style={{ display: "flex", gap: "20PX", marginTop: "60px" }}>
                  <div>
                    <img src="https://limak.az/new_front/assets/img/icons/calendar.svg" alt="" />
                  </div>
                  <div>
                    <p>{moment(detail?.createdTime).format('MM-DD-YYYY')} {moment(detail?.createdTime).format('h:mm:ss A')}</p>
                  </div>

                </div>
                <div style={{ display: "flex", gap: "10px", marginTop: "60px" }}>
                  <div> <img src="https://limak.az/new_front/assets/img/icons/facebook.svg" alt="" />
                  </div>
                  <div>
                    <img src="	https://limak.az/new_front/assets/img/icons/instagram.svg" alt="" />
                  </div>
                  <div>
                    <img style={{ height: "27px", width: "27px" }} src="https://limak.az/front/new/img/telegram.png" alt="" />
                  </div>
                  <div>
                    <img src="https://limak.az/new_front/assets/img/icons/youtube.svg" alt="" />
                  </div>
                  <div>
                    <img style={{ height: "27px", width: "27px" }} src="	https://limak.az/new_front/assets/img/icons/tik-tok.png" alt="" />
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className='col-md-4 col-12'></div>
        </div>
      </div>
      <div style={{ marginLeft: "35%", marginTop: "30px", marginBottom: "20px" }} >
        <a href="/Xəbərlər" class="btn-k4x btn-7xa">
          <img src="https://limak.az/new_front/assets/img/icons/back.svg" />
          <span>
            Geri
          </span>
        </a>
      </div>


    </div>
  )
}

export default Detail
