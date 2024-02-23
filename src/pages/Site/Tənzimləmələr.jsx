import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Tənzimləmələr.css'
import axios from 'axios'
import { useFormik } from 'formik';
import * as Yup from 'yup';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Tənzimləmələr = () => {
  const [value, setValue] = useState('1');
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [warehouseId, setWarehouseId] = useState(0)
  const [birtday, setBirtday] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")


  useEffect(() => {
    axios.get('https://localhost:7211/auth/GetCurrentUserInfo')
      .then(res => {
        console.log('salam');
        console.log(res.data);
        setName(res.data.name)
        setSurname(res.data.surname)
        setWarehouseId(res.data.warehouseId)
        setBirtday(res.data.birtday)
        setEmail(res.data.email)
        setPhoneNumber(res.data.phoneNumber)
      })
      .catch(error => {
        console.error('Error fetching user info:', error);
      });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const submitForm = (e) => {
    e.preventDefault();
    try {
      const data = new FormData()

      data.append("name", name)
      data.append("surname", surname)
      data.append("warehouseId", warehouseId)
      data.append("birtday", birtday)
      data.append("email", email)
      data.append("phoneNumber", phoneNumber)

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Hesab məlumatları" {...a11yProps(0)} />
            <Tab label="qrtgqert" {...a11yProps(1)} />
            <Tab label="dtjhrehy" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div class="card-hco">
            <div>
              <form onSubmit={submitForm} class="form-j7l">
                <div class="row-13e">
                  <div class="col-3it col-iht">
                    <input value={name} name='name' onChange={(e) => setName(e.target.value)} id="nam-zhm" type="text" placeholder="Ad" class="form-control-bsq" />
                    <div class="invalid-pt8">
                    </div>
                  </div>
                  <div class="col-3it col-iht">
                    <input value={surname} name='surname' onChange={(e) => setSurname(e.target.value)} id="sur-89k" type="text" placeholder="Soyad" class="form-control-bsq" />
                    <div class="invalid-pt8">
                    </div>
                  </div>


                  <div class="col-3it col-iht">
                    <input value={warehouseId} name='surname' onChange={(e) => setWarehouseId(e.target.value)} id="sur-89k" type="text" placeholder="Soyad" class="form-control-bsq" />
                    <div class="invalid-pt8">
                    </div>
                  </div>


                  <div class="col-3it col-iht">
                    <input value={birtday} name='surname' onChange={(e) => setBirtday(e.target.value)} id="sur-89k" type="text" placeholder="Soyad" class="form-control-bsq" />
                    <div class="invalid-pt8">
                    </div>
                  </div>


                  <div class="col-3it col-iht">
                    <input value={email} name='surname' onChange={(e) => setEmail(e.target.value)} id="sur-89k" type="text" placeholder="Soyad" class="form-control-bsq" />
                    <div class="invalid-pt8">
                    </div>
                  </div>

                  <div class="col-3it col-iht">
                    <input value={phoneNumber} name='surname' onChange={(e) => setPhoneNumber(e.target.value)} id="sur-89k" type="text" placeholder="Soyad" class="form-control-bsq" />
                    <div class="invalid-pt8">
                    </div>
                  </div>

                </div>
                <button type='submit'>Submit</button>
              </form>
            </div>
          </div>
        </CustomTabPanel>

      </Box>
    </div>
  )
}

export default Tənzimləmələr;
