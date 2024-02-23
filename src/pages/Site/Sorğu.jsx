import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./Sorgo.css"
import Userleft from '../../components/Userleft/Userleft';

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

const Sorugu = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (


    <div style={{ display: "flex",alignItems:'center', gap: "30px" }}>
      <div className='userleft'>
        <Userleft />
      </div  >

      <Box sx={{ width: '70%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Yeni Sorğu" {...a11yProps(0)} />
            <Tab label="Sorğularım" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div class="card-igi w-100  ">
            <form>
              <div class="row-5on">
                <div class="col-wo6 col-2fp">
                  <fieldset class="form-group-qj5">
                    <div>
                      <div class="check-xnp custom-94w radio-kqn">
                        <input type="radio" name="some-radios" class="input-4gf" value="1" id="__B-6yq" onclick="handleRadioClick(this)" />
                        <label class="label-not" for="__BVID__103">
                          Türkiyə
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div class="col-wo6 col-2fp ">
                  <fieldset class="form-group-qj5 ">
                    <div>
                      <div class="check-xnp custom-94w radio-kqn ">
                        <input type="radio" name="some-radios" class="input-4gf" value="2" id="__B-k2h" onclick="handleRadioClick(this)" />
                        <label class="label-not" for="__BVID__105">
                          Amerika
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div class="col-ae2 col-2fp">
                  <select class="select-ycp" id="__B-ol4">
                    <option value="">
                      -- Mövzu seçin --
                    </option>
                    <option value="5">
                      Gecikən sifariş
                    </option>
                    <option value="7">
                      Mənə aid olmayan bağlama
                    </option>
                    <option value="9">
                      Kuryer
                    </option>
                    <option value="3">
                      Şikayət və təklif
                    </option>
                    <option value="1">
                      Digər
                    </option>
                  </select>
                </div>
                <div class="col-2fp">
                  <textarea id="tex-tr1" placeholder="Qeyd" class="form-control-km4 style-jtHcp">
                  </textarea>
                </div>
              </div>
              <div class="footer-vkt">
                <fieldset class="form-group-qj5">
                  <div>
                    <div class="custom-2s1">
                      <input type="file" id="fil-n1y" class="input-wow style-QCNtr" />
                      <label for="file-upload" data-browse="Qeyd" class="label-1ex">
                        <span class="block-seo form-897 style-iONvt" id="style-iONvt">
                          No file chosen
                        </span>
                      </label>
                    </div>
                  </div>
                </fieldset>
                <button type="button" class="btn-nj7 btn-lfl upp-px4 btn-primary-b2i">
                  TƏSDİQ ET
                </button>
              </div>
            </form>
          </div>



        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>

          <div class="card-c7l w-100">
            <div>
              <form>
                <div class="row-vje">
                  <div class="d-qdi col-vpe col-klw">
                    <button type="button" class="btn-3ka header-2y5 mr-1yd btn-primary-rpx style-7DD22" id="style-7DD22">
                      <span>
                        <svg data-v-66fe60cf="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" class="bi bi-arrow-repeat">
                          <path data-v-66fe60cf="" d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z">
                          </path>
                          <path data-v-66fe60cf="" fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z">
                          </path>
                        </svg>
                      </span>
                    </button>
                    <div class="input-k54 search-ab1">
                      <input type="text" class="form-control-9qb" id="__B-ozc" />
                      <div class="input-jzs">
                        <button type="button" class="btn-3ka info-lpb">
                          <i class="search-k4s">
                          </i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="item-azn col-k92 col-klw">
                    <select class="float-dcl my-hns py-g8z select-vk5" id="__B-3ws">
                      <option value="-1">
                        Hamısı
                      </option>
                      <option value="1">
                        Gözləmədə
                      </option>
                      <option value="3">
                        Icrada
                      </option>
                      <option value="4">
                        Tamamlanmış
                      </option>
                    </select>
                  </div>
                </div>
              </form>
              <div class="table-81o">
                <table class="table-av5 table-p6c table-ls1">
                  <thead>
                    <tr>
                      <th>
                        <div>
                          ID
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
                          Status
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
                          <div class="d-qdi content-myz">
                            <h3>
                              Sorğu tapılmadı.
                            </h3>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>


        </CustomTabPanel>
      </Box>
    </div>
  );
}

export default Sorugu;
