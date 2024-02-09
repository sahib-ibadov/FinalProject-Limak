import React from 'react'
import "./Homesfaris.css"

const HomeSfaris = () => {
  return (
    <div className='auto-container'>
      <div className='outer-box'>
        <div className='tracking-form'>
          <h4 className='title text-center mr-3' style={{ color: "white" }} >Sifaris vermek asandir!</h4>
          <form method="post">
            <div className='row'>
              <div className='form-group col-lg-8 col-md-12 col-sm-12'>
                <input className="order" style={{ width: "100%", height: "110%" }} placeholder='Məhsulun linkini əlavə et' />

              </div>
              <div className='form-group col-lg-4 col-md-12 col-sm-12 d-flex justify-content-end text-end'>

                <button style={{ backgroundColor: "#DD5334" }} className='theme-btn btn-style-one'>
                  <span className='btn-title' style={{ color: "black" }} >Sifaris et</span>
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
