
import './MAGAZALAR.css'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';




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

const MAGAZALAR = () => {


  const [countries, setCountries] = React.useState([])
  console.log(countries)
  const [shops, setShops] = useState([])
  const [countryId, setCountryId] = useState(1)
  const [pageId, setPageId] = useState(1)
  const [categoryId, setCategoryId] = useState(null)
  const [category, setCategory] = useState(0)
  console.log(shops)
  console.log(category)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('https://localhost:7211/countries').then(res => { setCountries(res.data) }).catch(e => { console.log(e); })
    axios.get('https://localhost:7211/categories').then(res => { setCategories(res.data) }).catch(e => { console.log(e); })
    axios.get('https://localhost:7211/shops').then(res => {
      setShops(res.data)

      console.log(res.data);
    }).catch(e => console.log(e))
  }, [])


  const setShopsByCategory = (id) => {
    setCategoryId(id)
    axios.get(`https://localhost:7211/shops?country=${countryId}&category=${id}&page=${pageId}`).then(res=>{
      setShops(res.data)
    }).catch(e=>console.log(e))

  }

  const setShopsByCountry = (id) => {
    setCountryId(id)
    axios.get(`https://localhost:7211/shops?country=${id}&category=${categoryId}&page=${pageId}`).then(res=>{
      setShops(res.data)
    }).catch(e=>console.log(e))

  }

  return (
    <div className='Mazgazlar__div'>
      <div class="card card-sidebar snipcss-ReQT2">
        <ul class="nav flex-column">

          {
            categories.map((item, i) => {
              return <li onClick={() => { setShopsByCategory(item.id) }} key={i} class="nav-item">
                <button href="/az/stores/1?category=0" target="_self" class="nav-link">
                  <span style={{ overflow:'hidden'}} class="nav-icon">
                    <img src={item.imagePath} alt="" />
                  </span>
                  {item.name}
                </button>
              </li>
            })
          }

        </ul>
      </div>


      <div>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={1} aria-label="basic tabs example">

              {
                countries?.map((item, i) => {
                  return <Tab onClick={()=>{
                    setShopsByCountry(item.id)
                  }} label={item.name} {...a11yProps()} key={i + 1} />

                })
              }

            </Tabs>
          </Box>
          {
            countries?.map((item, i) => {
              return <CustomTabPanel index={i + 1} key={i + 1}>
                <div className="row">
                  {
                    shops?.map
                      ((item, index) => {
                        return <div key={index} className='col-4'>
                          <div ><a href={item.websitePath} >  <img className='image' style={{ height: "100px", width: "700px" }} src={item.imagePath} alt={item.name} /></a>
                          </div>

                        </div>
                      })
                  }

                </div>



              </CustomTabPanel>

            })
          }




        </Box>


        <div class="store-list">
          <div data-id="1" class="active active-tab tab-pane">
            <div class="row">

              {shops.map((shop, i) => {

                return (
                  <div key={i} class="col-md-6 col-lg-4 col-6 item-box" data-item="electronic">
                    <a href={shop.websitePath}
                      target="_blank" class="store-item">
                      <article class="card">
                        <img src={shop.imagePath}
                          alt={shop.name} class="card-img" style={{ width: "70%" }} />
                      </article>
                    </a>
                  </div>)
              })}

            </div>
          </div>
        </div>



      </div>


    </div>
  )
}

export default MAGAZALAR



