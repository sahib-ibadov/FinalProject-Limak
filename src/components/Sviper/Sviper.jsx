import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation } from 'swiper/modules';

const Sviper = () => {
  return (
    <>
    <Swiper
      pagination={{
        type: 'fraction',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide><img src="https://limakaz.s3.eu-west-2.amazonaws.com/sliders/image-1700567054.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://limakaz.s3.eu-west-2.amazonaws.com/sliders/image-1700218452.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://limakaz.s3.eu-west-2.amazonaws.com/sliders/image-1700218030.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://limakaz.s3.eu-west-2.amazonaws.com/sliders/image-1700218281.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img src="https://limakaz.s3.eu-west-2.amazonaws.com/sliders/image-1688121418.jpeg" alt="" /></SwiperSlide>
    </Swiper>
  </>
  )
}

export default Sviper
