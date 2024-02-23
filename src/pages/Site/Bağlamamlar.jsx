import './Baglamalar.css'

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Userleft from '../../components/Userleft/Userleft';



function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Bağlamamlar = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (


    <div className='d-flex align-items-center container'>
      <div className="row ">
        <div style={{width:"300px"}} className="col-md-4">
          <Userleft />
        </div>

        <div className="col-md-8">
          <div className='div__box w-100 '>
            <div className='w-100'>
              <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Türkiye" {...a11yProps(0)} />
                    <Tab label="Amerika" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                  <div className='w-100'>
                    <div className='select__button w-100'>
                      <div>
                        <button className='buutton'> Yenilə</button>
                      </div>
                      <div>
                        <select className='selecttt' name="" id="">
                          <option value="">hamısı</option>
                          <option value="">Sifariş verildi</option>
                          <option value="">Bəyan gözləyən</option>
                          <option value="">İmtina edilib</option>
                          <option value="">Bəyan edilib</option>
                          <option value="">İadə ləğv edildi</option>


                        </select>
                      </div>
                    </div>
                    <div class="card-qy4 w-100 my-3">
                      <div class="table-cof">
                        <table class="table-eet table-547 table-1nn">
                          <thead class="align-fdj">
                            <tr>
                              <th class="m-6qy">
                                <div class="checkbox-l3l custom-3ht checkbox-oki">
                                  <input type="checkbox" class="input-dcm" value="true" id="__B-clc" />
                                  <label class="label-81j" for="__BVID__142">
                                  </label>
                                </div>
                              </th>
                              <th>
                                Sifariş№
                              </th>
                              <th>
                                Çatdırılma
                              </th>
                              <th>
                                Mağaza
                              </th>
                              <th>
                                Status
                              </th>
                              <th class="text-7i9">
                                Əməliyyat
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div class="d-cwi content-2vv">
                                  <h3>
                                    Bağlama tapılmadı.
                                  </h3>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="card-bta w-100">
                      <div class="footer-cck">
                        <div class="package-kl2">
                          <div class="label-oxo">
                            <i>
                            </i>
                            <span>
                              Çatdırılma:
                            </span>
                          </div>
                          <div>
                            <span class="package-6ds">
                              0
                              <sup class="man-yjk">
                                M
                              </sup>
                            </span>
                            <span class="package-6ds">
                              0.00
                              <sup>
                                $
                              </sup>
                            </span>
                            <span class="package-6ds">
                              Balansım:
                              <span>
                                0
                              </span>
                              <sup class="man-yjk">
                                M
                              </sup>
                            </span>
                          </div>
                        </div>
                        <div class="upload-sko package-n9w">
                          <button type="button" class="btn-ock btn-1ld info-yvm btn-primary-7pd dis-r7m">
                            <span>
                              Balansdan Ödə
                            </span>
                          </button>
                          <button type="button" class="btn-ock btn-1ld btn-4gc btn-primary-7pd dis-r7m">
                            <span>
                              Kartdan Ödə
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>


                  </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                  <div className='select__amerika w-100'>
                    <div className='select__button w-100'>
                      <div>
                        <button className='buutton'> Yenilə</button>
                      </div>
                      <div>
                        <select className='selecttt' name="" id="">
                          <option value="">hamısı</option>
                          <option value="">Sifariş verildi</option>
                          <option value="">Bəyan gözləyən</option>
                          <option value="">İmtina edilib</option>
                          <option value="">Bəyan edilib</option>
                          <option value="">İadə ləğv edildi</option>


                        </select>
                      </div>
                    </div>
                    <div class="card-qy4 w-100 my-3">
                      <div class="table-cof">
                        <table class="table-eet table-547 table-1nn">
                          <thead class="align-fdj">
                            <tr>
                              <th class="m-6qy">
                                <div class="checkbox-l3l custom-3ht checkbox-oki">
                                  <input type="checkbox" class="input-dcm" value="true" id="__B-clc" />
                                  <label class="label-81j" for="__BVID__142">
                                  </label>
                                </div>
                              </th>
                              <th>
                                Sifariş№
                              </th>
                              <th>
                                Çatdırılma
                              </th>
                              <th>
                                Mağaza
                              </th>
                              <th>
                                Status
                              </th>
                              <th class="text-7i9">
                                Əməliyyat
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div class="d-cwi content-2vv">
                                  <h3>
                                    Bağlama tapılmadı.
                                  </h3>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="card-bta w-100">
                      <div class="footer-cck">
                        <div class="package-kl2">
                          <div class="label-oxo">
                            <i>
                            </i>
                            <span>
                              Çatdırılma:
                            </span>
                          </div>
                          <div>
                            <span class="package-6ds">
                              0
                              <sup class="man-yjk">
                                M
                              </sup>
                            </span>
                            <span class="package-6ds">
                              0.00
                              <sup>
                                $
                              </sup>
                            </span>
                            <span class="package-6ds">
                              Balansım:
                              <span>
                                0
                              </span>
                              <sup class="man-yjk">
                                M
                              </sup>
                            </span>
                          </div>
                        </div>
                        <div class="upload-sko package-n9w">
                          <button type="button" class="btn-ock btn-1ld info-yvm btn-primary-7pd dis-r7m">
                            <span>
                              Balansdan Ödə
                            </span>
                          </button>
                          <button type="button" class="btn-ock btn-1ld btn-4gc btn-primary-7pd dis-r7m">
                            <span>
                              Kartdan Ödə
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>


                  </div>
                </CustomTabPanel>

              </Box>
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}

export default Bağlamamlar;
