import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper 
      loop={true}
      modules={[Autoplay]} 
      centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
      className="mySwiper mt-5"
      >
        <SwiperSlide>
            <img src="images/slider_1.png" alt="slide"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/slider_2.png" alt="slide"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
