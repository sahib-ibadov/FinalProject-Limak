import React, { useEffect, useState } from 'react'
import './Bildirisler.css'
import Userleft from '../../components/Userleft/Userleft'
import axios from 'axios'

const Bildirişlər = () => {
  const [notifications,setNotifications]=useState([])
  useEffect(()=>{
    axios.get("https://localhost:7211/notifications").then(res=>{
      setNotifications(res.data)
    }).catch(e=>{
      console.log(e)
    })
  },[])
  return (
    <div style={{display:"flex",gap:"1px",marginLeft:"90px"}}>
      <div style={{width:""}}>
        <Userleft/>
      </div>
      <div className='Bildirisler  '>
        <div class="d-poa align-db8 content-dkm mb-tqm mt-5">
          <button type="button" class="btn-qmc btn-o3t btn-primary-bdq btn-mam">
            <span>
              Yenilə
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" class="bi bi-arrow-repeat">
                <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z">
                </path>
                <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z">
                </path>
              </svg>
            </span>
          </button>
          <button type="button" class="btn-qmc btn-o3t btn-primary-bdq btn-mam">
            <span>
              Hamısını oxu
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" class="bi bi-check2-all">
                <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z">
                </path>
                <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z">
                </path>
              </svg>
            </span>
          </button>
        </div>
        <div class="card-pqd item-4vk">
          <div class="card-s4w">
            <div>
              <div class="table-czo">
                <table class="table-r5e table-3qz table-az5">
                  <thead>
                    <tr>
                      <th>
                        <div>
                          №
                        </div>
                      </th>
                      <th>
                        <div>
                          Mövzu
                        </div>
                      </th>
                      <th>
                        <div>
                          Tarix
                        </div>
                      </th>
                      <th>
                        <div>
                          Əməliyyat
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>
                         {
                              notifications.map((item,i)=>{
                                return <li key={i}>{item}</li>
                              })
                         }
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Bildirişlər
