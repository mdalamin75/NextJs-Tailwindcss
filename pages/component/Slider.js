import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";
import Image from "next/image";

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
            <Image src="/images/slider_1.png" alt="slide" width={1000} height={500}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/slider_2.png" alt="slide" width={1000} height={500}/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
