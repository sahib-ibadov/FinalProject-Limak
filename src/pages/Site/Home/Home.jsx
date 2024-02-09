import React from 'react'
import Sviper from '../../../components/Sviper/Sviper'
import HomeSfaris from '../../../components/HomeSfaris/HomeSfaris'
import Magazalar from '../../../components/Magazalar/Magazalar'
import YENİLİKLƏR from '../../../components/YENİLİKLƏR/YENİLİKLƏR'
import Olkeler from '../../../components/Olkeler/Olkeler'

const Home = () => {
  return (
    <div>
      <Sviper/>
      <HomeSfaris/>
      <Magazalar/>
      <YENİLİKLƏR/>
      <Olkeler/>
      
    </div>
  )
}

export default Home
