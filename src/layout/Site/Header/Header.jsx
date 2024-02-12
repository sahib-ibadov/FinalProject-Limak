import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Header.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Header = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLogin, setIsLogin] = useState(false)
  const [error, setError] = useState(null)

  const [visiblePassword, setVisiblePassword] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const inputRef=useRef()
  const handleChangeVisible=()=>{
    setVisiblePassword(!visiblePassword)
  }
  const loginHandle = (e) => {
    e.preventDefault();


    axios.post("https://localhost:7211/auth/Login", { email: email, password: password }).then(data => {
      localStorage.setItem('token', JSON.stringify(data.data))
      axios.defaults.headers.common['Authorization'] = `Bearer ${data?.data?.token}`;
      setError(null)
      setIsLogin(!isLogin)
      handleClose()
      navigate('/User')
    }).catch(e => {
      setError(e?.response?.data?.message)
    })

  }

  return (
    <div className='header'>
      <img style={{ padding: "20px" }} src="https://limak.az/new_front/assets/logo.svg" alt="" />
      <ul style={{ padding: '0 0 0 10px' }}>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="">Home</Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="TARIFLER">TARIFLER</Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="KALKULYATOR">KALKULYATOR</Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="MAGAZALAR">MAGAZALAR</Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "black", }} to="XƏBƏRLƏR">XƏBƏRLƏR</Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="ƏLAQƏ">ƏLAQƏ</Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "black" }} to="KARGOMAT">KARGOMAT</Link>
        </li>
        <li>
          <button className='buttons'> <Link style={{ textDecoration: "none", color: "black", height: "20px" }} to="Baglamamharadadır">Baglamam haradadır?</Link></button>
        </li>
        <li>
          <button className='buttonss'> <Link style={{ textDecoration: "none", color: "black", height: "20px", color: "white" }} to="Sifariset">SİFARİŞ ET</Link></button>
        </li>

      </ul>
      <div className='icons'>
        <ul>
          <li className='searchForm'>
            <Link>
              <i style={{ color: "black" }} class="fa-solid fa-magnifying-glass"></i>
            </Link>
            <ul className='searchHover'>
              <li>
                <form action="#">
                  <div className='input-group searchInput'>
                    <input type="text" placeholder='Axtar' className='form-control search-input' />
                  </div>
                </form>
              </li>
            </ul>

          </li>
          <li>
            <Link>
              <i style={{ color: "black" }} class="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>
        </ul>
      </div>
      <div className='link'>
        {
          isLogin == true ? <Link className='singIn' to={'/Sifariset'}>Sifaris et</Link> : <button className='singIn' onClick={handleOpen}>Daxil OL </button>
        }


        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <div class="col-md-6 col-12 snipcss-DPx6q">
                <div class="card-auth-header">
                  <img src="https://limak.az/new_front/assets/img/icons/user-color.svg" alt="" class="card-auth-icon" />
                  <h1 class="card-auth-title upper">
                    Hesaba daxil ol
                  </h1>
                </div>
                <form action="/login" method="POST" class="card-auth-form">
                  <span>{error ? error : ""} </span>
                  <input id="login-email" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" type="email" placeholder="E-mail*" required="required" aria-required="true" class="form-control" />
                  <div role="group" class="input-group">
                    <input id="login-password"  value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" type={visiblePassword ? 'text':'password'} placeholder="Şifrə*" required="required" aria-required="true" class="form-control" />
                    <a class="visiblity-btn-password" onClick={()=>{
                      handleChangeVisible()
                    }}>
                      <span aria-hidden="true" class="show-password hide-eye">
                      </span>
                    </a>
                  </div>
                  <fieldset class="form-group" id="__BVID__19">
                    <div>
                      <div class="row">
                        <div class="col-5">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" value="checked" id="__BVID__20" />
                            <label class="custom-control-label" for="__BVID__20">
                              Məni xatırla
                            </label>
                          </div>
                          <div>
                          </div>
                        </div>
                        <div class="col-7">
                          <div class="text-right">
                            <a href="/az/password" target="_self" class="form-link">
                              <img src="https://limak.az/new_front/assets/img/icons/help.svg" alt="" id="tooltip-forgot-password" />
                              <span>
                                Şifrəni unutmusunuz
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <div class="row">
                    <div class="col-6">
                      <div class="login-submit">
                        <button type="submit" onClick={loginHandle} class="btn btn-submit btn-primary">
                          <span>
                            Daxil ol
                          </span>
                        </button>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="login-submit-reg">
                        <a href="/az/register" target="_self" class="btn btn-primary btn-submit">
                          QEYDİYYAT
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>


            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>


    </div>
  )
}

export default Header
