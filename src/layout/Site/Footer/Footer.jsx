import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footerrr' >

      <div className='foterrr'>

        <div className='footer__section1'>
          <a href=""> <img src="https://limak.az/new_front/assets/img/logo-white.svg" alt="" /></a>
          <div className='div__a'>
            <div><a href=""><img src="https://limak.az/new_front/assets/img/app-store.svg" alt="" /></a></div>
            <div><a href=""><img src="https://limak.az/new_front/assets/img/google-play.svg" alt="" /></a></div>
          </div>
        </div>

        <div className='divv__123'>
          <p><a style={{ color: "white" }} href="" >Tariflər</a></p>
          <p><a style={{ color: "white" }} href="">Kalkulyator</a></p>
          <p><a style={{ color: "white" }} href="">Magazalra</a></p>
        </div>

        <div className='divv__123'>
          <p><a style={{ color: "white" }} href="">Xəbətlər</a></p>
          <p><a style={{ color: "white" }} href="">Qaydalar</a></p>
          <p><a style={{ color: "white" }} href="">Suallar</a></p>
        </div >
        <div className='divv__123'>
          <p><a style={{ color: "white" }} href="">Haqqimizda</a></p>
          <p><a style={{ color: "white" }} href="">Gizlilik şərtləri</a></p>
          <p><a style={{ color: "white" }} href="">Əlaqə</a></p>
        </div>
        <div>
          <div style={{ marginTop: "30px" }}><a href=""><img src="	https://limak.az/new_front/assets/img/hot-line.svg" alt="" /></a></div>
          <div className='div__aa'>
            <a href=""><img src="https://limak.az/new_front/assets/img/icons/facebook.svg" alt="" /></a>
            <a href=""><img src="https://limak.az/new_front/assets/img/icons/instagram.svg" alt="" /></a>
            <a href=""><img style={{ height: "24px" }} src="	https://limak.az/front/new/img/telegram.png" alt="" /></a>
            <a href=""><img src="https://limak.az/new_front/assets/img/icons/youtube.svg" alt="" /></a>
            <a href=""><img style={{ height: "23px" }} src="	https://limak.az/new_front/assets/img/icons/tik-tok.png" alt="" /></a>


          </div>
        </div>

      </div>

      <div className='footerSvg'>
        <p style={{ color: "white" }}>© 2019 - 2024 Limak.az | Bütün hüquqlar qorunur</p>
        <div className='div__image'>
          <img src="https://limak.az/new_front/assets/img/visa.svg" alt="" />
          <img src="https://limak.az/new_front/assets/img/mastercard.svg" alt="" />
        </div>
      </div>






    </div>
  )
}

export default Footer
