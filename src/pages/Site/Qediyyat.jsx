import React, { useContext, useEffect, useState } from 'react'
import './Qediyyat.css'
import axios from 'axios'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import MainContext from '../../context/context';
import { useNavigate } from 'react-router';
const Qediyyat = () => {
  const [gender, setGender] = useState([])
  const [genderError, setGenderError] = useState(null)
  const [userPositions, setUserPositions] = useState([])
  const [positionsError, setPositionsError] = useState(null)
  const [citizenship, setCitizensspit] = useState([])
  const [citiError, setCitiError] = useState(null)
  const [warehouses, setWarehouses] = useState([])
  const [warehousesError, setWarehousesError] = useState(null)



  useEffect(() => {
    axios.get('https://localhost:7211/genders').then(res => {
      setGender(res.data)
      setGenderError(null)
    }).catch(err => {
      setGenderError(err?.response?.data?.message)

    })
    axios.get('https://localhost:7211/warehouses').then(res => {
      setWarehouses(res.data)
      setWarehousesError(null)
    }).catch(err => {
      setWarehousesError(err?.response?.data?.message)
    })


    axios.get('https://localhost:7211/userPositions').then(res => {
      setUserPositions(res.data)
      setPositionsError(null)
    }).catch(err => {
      setPositionsError(err?.response?.data?.message)

    })
    axios.get('https://localhost:7211/citizenships').then(res => {
      setCitizensspit(res.data)
      setCitiError(null)
    }).catch(err => {
      setCitiError(err?.response?.data?.message)

    })
  }, [])

  const [registerError, setRegisterError] = useState(null)
  const { open, setOpen, handleClose, handleOpen } = useContext(MainContext)
  const navigate = useNavigate()
  console.log(registerError)
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      seriaNumber: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      finCode: "",
      birtday: "",
      location: "",
      genderId: 0,
      citizenshipId: 0,
      userPositionId: 0,
      warehouseId: 0,


    },
 
    onSubmit: async (values) => {
      console.log(values)
      axios.post("https://localhost:7211/auth/Register", values).then(data => {
        localStorage.setItem('token', JSON.stringify(data.data))
        axios.defaults.headers.common['Authorization'] = `Bearer ${data?.data?.token}`;
        setRegisterError(null)
        navigate('/')
        
      }).catch(e => {
        setRegisterError(e?.response?.data?.message)
        console.log(e);
      })
    },
  });
  return (
    <div>
      <div data-v-2c23f5c2="" className="card-v85 card-wpm card-x8o mb-z8s">
        <div data-v-2c23f5c2="" className="header-4e7">
          <img data-v-2c23f5c2="" src="https://limak.az/az/assets/img/icons/user-plus-color.svg" className="card-5g1" />
          <h1 data-v-2c23f5c2="" className="title-91n upp-nfj">
            İSTİFADƏÇİ
            <b>
              QEYDİYYATI
            </b>
          </h1>
        </div>
        <form data-v-2c23f5c2="" onSubmit={formik.handleSubmit} className="form-6om">

          <div data-v-2c23f5c2="" className="row-wtz">
            <div data-v-2c23f5c2="" className="col-m43 col-oig">
              <h3 data-v-2c23f5c2="" className="title-rj3">
                Profil məlumatları
              </h3>
              <div data-v-2c23f5c2="" className="row-wtz">
                <div data-v-2c23f5c2="" className="col-oig">
                  <select value={formik.values.userPositionId} name='userPositionId' onChange={formik.handleChange} onBlur={formik.handleBlur} data-v-2c23f5c2="" className="select-gmy" id="__B-wxr">
                    {
                      userPositions.map((item, index) => {
                        return <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      })
                    }


                  </select>
                </div>
                <div data-v-2c23f5c2="" className="col-3l9">
                  <input value={formik.values.name} name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} data-v-2c23f5c2="" id="reg-n25" type="text" placeholder="Ad" className="form-control-7oo" />
                </div>
                <div data-v-2c23f5c2="" className="col-3l9">
                  <input value={formik.values.surname} name='surname' onChange={formik.handleChange} onBlur={formik.handleBlur} data-v-2c23f5c2="" id="reg-grb" type="text" placeholder="Soyad" className="form-control-7oo" />
                </div>
                <div data-v-2c23f5c2="" className="col-oig">
                  <input value={formik.values.email} name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} data-v-2c23f5c2="" id="ema-5vw" type="email" placeholder="E-mail" className="form-control-7oo" />
                </div>
                <div data-v-2c23f5c2="" className="col-oig">
                  <div data-v-2c23f5c2="" className="input-ar3 input-ls8">
                    <div data-v-2c23f5c2="" className="input-cjm">
                      <div data-v-2c23f5c2="" className="dropdown-8n8 btn-wjj">
                        <button type="button" className="btn-zxj dropdown-x5v btn-phd">
                          050
                        </button>
                        <ul className="dropdown-menu-a92">
                          <li data-v-2c23f5c2="">
                            <a href="#" className="dropdown-item-ojt">
                              055
                            </a>
                          </li>
                          <li data-v-2c23f5c2="">
                            <a href="#" className="dropdown-item-ojt">
                              099
                            </a>
                          </li>
                          <li data-v-2c23f5c2="">
                            <a href="#" className="dropdown-item-ojt">
                              050
                            </a>
                          </li>
                          <li data-v-2c23f5c2="">
                            <a href="#" className="dropdown-item-ojt">
                              051
                            </a>
                          </li>
                          <li data-v-2c23f5c2="">
                            <a href="#" className="dropdown-item-ojt">
                              010
                            </a>
                          </li>
                          <li data-v-2c23f5c2="">
                            <a href="#" className="dropdown-item-ojt">
                              010
                            </a>
                          </li>
                          <li data-v-2c23f5c2="">
                            <a href="#" className="dropdown-item-ojt">
                              077
                            </a>
                          </li>
                          <li data-v-2c23f5c2="">
                            <a href="#" className="dropdown-item-ojt">
                              070
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <input value={formik.values.phoneNumber} name='phoneNumber' onChange={formik.handleChange} onBlur={formik.handleBlur} id="pho-ttk"  placeholder="Telefon" className="form-control-7oo" />
                  </div>
                </div>
                <input placeholder='Password' type="text" value={formik.values.password} name='password' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                <input placeholder='confirmPassword' type="text" value={formik.values.confirmPassword} name='confirmPassword' onChange={formik.handleChange} onBlur={formik.handleBlur} />

                <div data-v-2c23f5c2="" className="col-m43 col-oig">
                  <select value={formik.values.warehouseId} name='warehouseId' onChange={formik.handleChange} onBlur={formik.handleBlur} data-v-2c23f5c2="" id="del-81s" className="select-gmy">
                    {
                      warehouses.map((item, i) => {
                        return <option key={i} value={item.id}>
                          {item.name}
                        </option>
                      })
                    }

                  </select>
                </div>
                <div data-v-2c23f5c2="" className="col-m43 col-oig">
                  <select data-v-2c23f5c2="" className="select-gmy" id="__B-zij">
                    <option value="">
                      Bildiriş tipi
                    </option>
                    <option value="1">
                      SMS
                    </option>
                    <option value="2">
                      Whatsapp
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div data-v-2c23f5c2="" className="col-m43 col-oig">
              <h3 data-v-2c23f5c2="" className="title-rj3">
                Şəxsiyyət vəsiqəsi məlumatları
              </h3>
              <div data-v-2c23f5c2="" className="row-wtz">
                <div data-v-2c23f5c2="" className="col-oig">
                  <select value={formik.values.citizenshipId} name='citizenshipId' onChange={formik.handleChange} onBlur={formik.handleBlur} data-v-2c23f5c2="" className="select-gmy" id="__B-55k">
                    {
                      citizenship.map((item, index) => {
                        return <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      })
                    }


                  </select>
                </div>
                <div data-v-2c23f5c2="" className="col-oig">
                  <input value={formik.values.seriaNumber} name='seriaNumber' onChange={formik.handleChange} onBlur={formik.handleBlur} data-v-2c23f5c2="" id="ser-i2s" type="text" placeholder="Seriya nömrəsi" className="form-control-7oo" />
                </div>
                <div data-v-2c23f5c2="" className="col-oig">
                  <div data-v-0aea046e="" data-v-2c23f5c2="" id="style-xTwrN" className="style-xTwrN">
                    <div data-v-0aea046e="" className="form-control-7oo wrapper-idl">
                      <input type="date" id="" value={formik.values.birtday} name='birtday' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    </div>
                  </div>
                </div>
                <div data-v-2c23f5c2="" className="col-oig">
                  <select value={formik.values.genderId} name='genderId' onChange={formik.handleChange} onBlur={formik.handleBlur} data-v-2c23f5c2="" className="select-gmy" id="__B-14g">
                    {
                      gender.map((item, index) => {
                        return <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      })
                    }


                  </select>
                </div>
                <div data-v-2c23f5c2="" className="col-oig">
                  <input value={formik.values.finCode} name='finCode' onChange={formik.handleChange} onBlur={formik.handleBlur} data-v-2c23f5c2="" id="reg-xkw" type="text" placeholder="FİN *" className="form-control-7oo" />
                  <a data-v-2c23f5c2="" className="btn-5wo style-kT7wA" id="style-kT7wA">
                    <svg data-v-2c23f5c2="" width="25px" fill="#485056" height="25px" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path data-v-2c23f5c2="" d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 6.5c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" fill-rule="nonzero">
                      </path>
                    </svg>
                  </a>
                </div>
                <div data-v-2c23f5c2="" className="col-oig">
                  <input value={formik.values.location} name='location' onChange={formik.handleChange} onBlur={formik.handleBlur} data-v-2c23f5c2="" id="reg-j3h" type="text" placeholder="Ş/V-dəki ünvan" className="form-control-7oo" />
                </div>
              </div>
            </div>
          </div>
          <div data-v-2c23f5c2="" className="footer-p62">
            <div data-v-2c23f5c2="" className="checkbox-cam custom-8if checkbox-bwf style-svWIn" id="style-svWIn">
              <input id="che-1r7" type="checkbox" name="checkbox-accepted" className="input-soe" value="accepted" />
              <label for="checkbox-accepted" className="label-hqz">
                <a data-v-2c23f5c2="" href="javascript:void(0)">
                  İstifadəçi qaydaları ilə razıyam
                </a>
              </label>
            </div>
            <button type='submit' className="btn-zxj btn-tok form-3qi btn-primary-xq9">
              <span data-v-2c23f5c2="">
                QEYDİYYAT
              </span>
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Qediyyat
