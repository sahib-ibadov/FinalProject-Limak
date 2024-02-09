import React from 'react'

const XƏBƏRLER = () => {
  return (
    <div style={{minHeight:"60vh"}}>

      <div className='container'>
        <div className='row'>
          <div className='col-3 Cards  ' style={{ height: "320px", width: "300px", backgroundColor: "white", marginTop: "20px", borderRadius: '5px' }}>
            <a href="">

              <img style={{ height: "220px", width: "250px" }} src="https://limakaz.s3.eu-west-2.amazonaws.com/public/news/news-170383622116394.png.jpeg" alt="Yeni il bayramınız mübarək!" />
              <h4 style={{ color: "black", }}>Yeni il bayramınız m...</h4>
              <p><img style={{ height: "16px", width: "16px", color: "black" }} src="https://limak.az/new_front/assets/img/icons/calendar.svg" alt="" />
                <span style={{ height: "220px", width: "250px", color: "black" }}>2023-12-29 11:50:21</span>
              </p>

            </a>
          </div>
        </div>

      </div>

    </div>
  )
}

export default XƏBƏRLER
