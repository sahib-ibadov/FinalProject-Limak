import React from 'react'
import "./Homesfaris.css"
import { Link } from 'react-router-dom'

const HomeSfaris = () => {
  return (
    <div className='auto-container'>
      <div className='outer-box'>
        <div className='tracking-form'>
          <h4 className='title text-center mr-3' style={{ color: "white" }} >Sifaris vermek asandir!</h4>
          <form method="post" onSubmit={(e)=>{
            e.preventDefault()
            
          }}>
            <div className='row'>
              <div className='form-group col-lg-8 col-md-12 col-sm-12'>
                <input className="order" style={{ width: "100%", height: "110%" }} placeholder='Məhsulun linkini əlavə et' />

              </div>
              <div className='form-group col-lg-4 col-md-12 col-sm-12 d-flex justify-content-end text-end'>

                <button style={{ backgroundColor: "#DD5334" }} className='theme-btn btn-style-one'>
                  <Link className='text-light' style={{textDecoration:'none'}} to='/Sifariset'> <span className='btn-title'> Sifaris et</span></Link>
                </button>
              </div>

            </div>
          </form>


        </div>
      </div>
    </div>
  )
}

export default HomeSfaris
