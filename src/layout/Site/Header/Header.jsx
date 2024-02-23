import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Header.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import MainContext from '../../../context/context';
import { jwtDecode } from 'jwt-decode';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

const Header = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }




  const { open, setOpen, handleClose, handleOpen } = useContext(MainContext)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin') ? localStorage.getItem('isLogin') : false)
  const [error, setError] = useState(null)
  const [error2, setError2] = useState(null)
  const [search, setSearch] = useState("")
  const [input, setInput] = useState("")
  const [news, setNews] = useState([])
  console.log(search)
  useEffect(() => {
    axios.get(`https://localhost:7211/news?search=${search}`).then(res => {
      setNews(res.data)

    }).catch(e => {
      setError2(e?.response?.data?.message)
      setNews([])
    })
  }, [search])



  const [visiblePassword, setVisiblePassword] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const inputRef = useRef()
  const handleChangeVisible = () => {
    setVisiblePassword(!visiblePassword)
  }
  const loginHandle = (e) => {
    e.preventDefault();


    axios.post("https://localhost:7211/auth/Login", { email: email, password: password }).then(data => {
      localStorage.setItem('token', JSON.stringify(data.data))
      axios.defaults.headers.common['Authorization'] = `Bearer ${data?.data?.token}`;
      setIsLogin(true)
      localStorage.setItem('isLogin', true)

      setError(null)

      handleClose()
      navigate('/User')
    }).catch(e => {
      setError(e?.response?.data?.message)
    })

  }


  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const inputRef2 = useRef()
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    if (userInfo) {
      setIsLogin(true)
      localStorage.setItem('isLogin', true)
    }
  }, [])
  return (
    <div className='header'>
      <div>
        <Modal
          open={open2}
          onClose={handleClose2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" className='text-center' variant="h6" component="h2">
              News Search
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>

              <div className="row">
                {
                  news.map((item, i) => {
                    return <div className='col-3 Cards  ' key={i} style={{ height: "300px", width: "270px", backgroundColor: "white", marginTop: "20px", borderRadius: '5px' }}>
                      <a href="" style={{ textDecoration: 'none' }}>

                        <img style={{ height: "220px", width: "250px" }} src={item.imagePath} />
                        <h4 style={{ color: "black", }}>{item.description}</h4>
                        <h4 style={{ color: "black", }}>{item.subject}</h4>
                        <p><img style={{ height: "16px", width: "16px", color: "black" }} src="https://limak.az/new_front/assets/img/icons/calendar.svg" alt="" />
                          <span style={{ height: "220px", width: "250px", color: "black" }}>{item.createdTime.substring(0, 10)}</span>
                        </p>

                      </a>
                    </div>
                  })
                }
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
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
          <button className='buttons'> <Link style={{ textDecoration: "none", color: "white", height: "20px" }} to="Baglamamharadadır">Baglamam haradadır?</Link></button>
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
                <form action="#" onSubmit={(e) => {
                  e.preventDefault()
                  setSearch(inputRef2.current.value)
                  handleOpen2()
                  inputRef2.current.value = ''
                }} >
                  <div className='input-group searchInput'>
                    <input type="text" placeholder='Axtar' className='form-control search-input' ref={inputRef2} />
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
              <div className="row">
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
                      <input id="login-password" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" type={visiblePassword ? 'text' : 'password'} placeholder="Şifrə*" required="required" aria-required="true" class="form-control" />
                      <a class="visiblity-btn-password" onClick={() => {
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
                            <div className="App">
                              <button onClick={()=>{
                                openModal()
                                closeModal()
                              }}  className='btn danger' >Şifrəni unutmusuz</button>
                              {modalOpen &&
                                <div className="modal">
                                  <div className="modal-content">
                                    <span className="close" onClick={closeModal}>&times;</span>
                                   <input type="text" placeholder='Gmail' />
                                  </div>
                                </div>
                              }
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
                          <Link to='/Qediyyat' class="btn btn-primary btn-submit">
                            QEYDİYYAT
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className='col-md-6 col-12' >
                  <img src="https://limak.az/new_front/assets/img/login-image.svg" alt="" />
                </div>
              </div>


            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>

            </Typography>
          </Box>
        </Modal>
      </div>


    </div>
  )
}

export default Header
