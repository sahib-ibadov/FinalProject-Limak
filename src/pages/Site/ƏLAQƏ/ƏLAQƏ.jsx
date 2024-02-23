import React, { useEffect, useRef, useState } from 'react'
import "./ƏLAQƏ.css"
import axios from 'axios'

const ƏLAQƏ = () => {
  const [elaqe, setElaqe] = useState([])
  useEffect(() => {
    axios.get("https://localhost:7211/warehouses").then(res => {
      setElaqe(res.data)
    }).catch(e => {
      console.log(e)
    })
  }, [])
  const mapRefs = useRef([]);

  const handleActiveRef = (index) => {
    mapRefs.current[index].classList.toggle('openMap');
  };
  return (
    <div>
      {
        elaqe.map((item, index) => {
          return <div className='Elaqe' key={index}>
            <div className='div__umumiii'>
              <div>
                <div className='div__111'>
                  <div>  <img src="https://limak.az/new_front/assets/img/icons/location.svg" alt="" /></div>
                  <div><b>{item.name}</b></div>

                </div>

                <p>{item.location}</p>
                <div className='div__mapp'>
                  <div><img src="	https://limak.az/new_front/assets/img/icons/map.svg" alt="" /></div>
                  <div><button onClick={() => handleActiveRef(index)}>Xəritəyə bax</button></div>
                </div>
              </div>


              <div>
                <div className='div___1111'>
                  <div><img src="https://limak.az/new_front/assets/img/icons/warehouse.svg" alt="" /></div>
                  <div><b>Anbar</b></div>

                </div>

                <p>Bazar ertəsi-şənbə <br />
                  Saat 09:00 - 21:00</p>

                <div className='div___mappp'>
                  <div><img src="https://limak.az/new_front/assets/img/icons/bag.svg" alt="" /></div>
                  <div><b>Sifariş  et xidməti</b></div>

                </div>

                <p>24 saat</p>

              </div>
              <div>
                <div className='div__3333'>
                  <div><img src="	https://limak.az/new_front/assets/img/icons/phone.svg" alt="" /></div>
                  <div><b>{item.phoneNumber}</b></div>
                </div>
                <br />
                <div className='div__alqe'>
                  <div><img src="https://limak.az/new_front/assets/img/icons/mail.svg" alt="" /></div>
                  <div><b>{item.email}</b></div>
                </div>
                <br />
                <div className='div__qulaqliq'>
                  <div><img src="https://limak.az/new_front/assets/img/icons/callcenter.svg" alt="" /> </div>
                  <div><b>Müştəri xidməti</b></div>
                </div>
                <br />
                {/* <p>{item.workingHours}</p> */}
              </div>

            </div>
            <iframe src={item.workingHours} className='mapInElaqe' ref={(el) => (mapRefs.current[index] = el)}  height="450" style={{ border: '0',width:'1070px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </div>
        })
      }
    </div>
  )
}

export default ƏLAQƏ
