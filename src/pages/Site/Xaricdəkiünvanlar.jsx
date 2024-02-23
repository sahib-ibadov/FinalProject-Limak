import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import './Xaricdekiunvanlar.css'
import Userleft from '../../components/Userleft/Userleft';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  const [shops, setShops] = React.useState([])


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

const Xaricdəkiünvanlar = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
       
       
    <div style={{display:"flex" ,gap:"30px"}}>
      <div style={{width:"30% "}}>
        <Userleft/>
      </div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label=" Türkiyə" {...a11yProps(0)} />
            <Tab label="Amerika" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div>
            <header class="header-p28  ">
              <div class="list-group-6ih">
                <div class="list-group-item-ooi">
                  <h5 class="label-h1p">
                    Ad, Soyad
                  </h5>
                  <div class="item-6tg">
                    <p class="item-79x select-bic">
                      0256069 - LİMAK TAŞIMACILIK DIŞ TİCARET LİMİTED ŞİRKETİ
                    </p>
                    <div class="cop-8p2">
                      <button type="button" class="btn-gjc btn-link-cz9">
                        <i class="icon-2jq">
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="list-group-item-ooi">
                  <h5 class="label-h1p">
                    Adres başlığı
                  </h5>
                  <div class="item-6tg">
                    <p class="item-79x select-bic">
                      LİMAK - 0256069 - Asiman Qasımzadə
                    </p>
                    <div class="cop-8p2">
                      <button type="button" class="btn-gjc btn-link-cz9">
                        <i class="icon-2jq">
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="list-group-item-ooi item-pby">
                  <h5 class="label-h1p">
                    Adres satır 1
                  </h5>
                  <p class="label-fwk">
                    ( Müştəri kodu,ad və soyadınızla birgə tam olaraq kopyalayın )
                  </p>
                  <div class="item-6tg">
                    <p class="item-79x select-bic">
                      0256069 Asiman Qasımzadə,Gürsel mah.Bahçeler cad. Erdoğan iş merkezi 37-39B
                    </p>
                    <div class="cop-8p2">
                      <button type="button" class="btn-gjc btn-link-cz9">
                        <i class="icon-2jq">
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <div class="footer-dnb">
              <div class="list-group-rji list-group-fzr">
                <div class="list-group-item-3r9">
                  <h5 class="label-8y9">
                    İl-Şehir
                  </h5>
                  <p class="item-7fg">
                    Istanbul
                  </p>
                </div>
                <div class="list-group-item-3r9">
                  <h5 class="label-8y9">
                    Semt
                  </h5>
                  <p class="item-7fg">
                    Gürsel
                  </p>
                </div>
                <div class="list-group-item-3r9">
                  <h5 class="label-8y9">
                    TC kimlik
                  </h5>
                  <p class="item-7fg">
                    35650276048
                  </p>
                </div>
              </div>
              <div class="list-group-rji list-group-fzr">
                <div class="list-group-item-3r9">
                  <h5 class="label-8y9">
                    İlçe
                  </h5>
                  <p class="item-7fg">
                    Kağıthane
                  </p>
                </div>
                <div class="list-group-item-3r9">
                  <h5 class="label-8y9">
                    ZIP/Post kodu
                  </h5>
                  <p class="item-7fg">
                    34400
                  </p>
                </div>
                <div class="list-group-item-3r9">
                  <h5 class="label-8y9">
                    Cep telefon
                  </h5>
                  <p class="item-7fg">
                    05364700021
                  </p>
                </div>
              </div>
              <div class="list-group-rji list-group-fzr">
                <div class="list-group-item-3r9">
                  <h5 class="label-8y9">
                    Vergi dairesi
                  </h5>
                  <p class="item-7fg">
                    Şişli
                  </p>
                </div>
                <div class="list-group-item-3r9">
                  <h5 class="label-8y9">
                    Ülke
                  </h5>
                  <p class="item-7fg">
                    Türkiye
                  </p>
                </div>
                <div class="list-group-item-3r9">
                  <h5 class="label-8y9">
                    Vergi numarası
                  </h5>
                  <p class="item-7fg">
                    6081089593
                  </p>
                </div>
              </div>
              <div class="list-group-rji list-group-fzr">
                <div class="list-group-item-3r9">
                  <h5 class="label-8y9">
                  </h5>
                  <p class="item-7fg">
                  </p>
                </div>
                <div class="list-group-item-3r9">
                  <h5 class="label-8y9">
                  </h5>
                  <p class="item-7fg">
                  </p>
                </div>
                <div class="list-group-item-3r9">
                  <h5 class="label-8y9">
                    Trendyol SMS
                  </h5>
                  <p class="item-7fg">
                    05356191259
                  </p>
                </div>
              </div>
            </div>
            <div class="style-alZFe" id="style-alZFe">
  <div class="list-group-5gv">
    <div class="list-group-item-78s">
      <h2 class="label-68e style-XI7Yo" id="style-XI7Yo">
        İş saatları:
      </h2>
      <p class="item-vo8 style-7F57M" id="style-7F57M">
        Həftəiçi 5 gün: 09:00 - 17:00 
        <br />
        Şənbə: 09:00 - 14:00
     <br />
        Bazar günü qeyri-iş günüdür.
      </p>
    </div>
  </div>
</div>

            
            


          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          sahib ///
        </CustomTabPanel>

      </Box>

    </div>
  )
}

export default Xaricdəkiünvanlar
