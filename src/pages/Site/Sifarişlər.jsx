import Userleft from '../../components/Userleft/Userleft'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Sifarisler.css'

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

function Sifarişlər() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ display: "flex",gap:"40px", textAlign: "center" }} >
      <div style={{width:"30%"}} >
        <Userleft />
      </div>
      <div style={{ width: "100%" }}>
        <Box sx={{ width: '60%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label=" Türkiyə" {...a11yProps(0)} />
              <Tab label="Amerika" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div class="d-o1p align-6bb content-qe9 mb-pvw">
              <button type="button" class="btn-kp1 btn-ca3 btn-primary-3ve btn-gkh">
                <span>
                  Yenilə
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-arrow-repeat">
                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z">
                    </path>
                    <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z">
                    </path>
                  </svg>
                </span>
              </button>
              <form class="form-fiq">
                <select class="select-oap" id="__B-1oe">
                  <option value="-1">
                    Hamısı
                  </option>
                  <option value="1">
                    Gözləmədə
                  </option>
                  <option value="2">
                    Icrada
                  </option>
                  <option value="3">
                    Problemli
                  </option>
                </select>
              </form>
            </div>

          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>

            <div class="d-o1p align-6bb content-qe9 mb-pvw">
              <button type="button" class="btn-kp1 btn-ca3 btn-primary-3ve btn-gkh">
                <span>
                  Yenilə
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-arrow-repeat">
                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z">
                    </path>
                    <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z">
                    </path>
                  </svg>
                </span>
              </button>
              <form class="form-fiq">
                <select class="select-oap" id="__B-1oe">
                  <option value="-1">
                    Hamısı
                  </option>
                  <option value="1">
                    Gözləmədə
                  </option>
                  <option value="2">
                    Icrada
                  </option>
                  <option value="3">
                    Problemli
                  </option>
                </select>
              </form>
            </div>



          </CustomTabPanel>
        </Box>
      </div>
    </div>
  )
}

export default Sifarişlər;
