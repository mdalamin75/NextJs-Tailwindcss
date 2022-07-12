import React, { useRef, useState } from "react";
import Image from "next/image";
import testimonial from "../../public/images/testimonial.png";
import testimonial_qoute from "../../public/images/testimonial_qoute.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay} from "swiper";

export default function TestimonialSlider() {
  return (
    <>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="testimonial_card">
                <div className="card_img">
                    <Image src={testimonial} alt="testimonial-image" className="" />
                </div>
                <div className="card_body bg-white px-4 md:px-20 pt-16 pb-10 space-y-1 relative -top-14 -z-10">
                    <div className="card_text">
                        <h3 className="text-2xl">Due markes</h3>
                        <h1 className="text-xl text-bold text-orange-600">Rental</h1>
                        <p className="opacity-70 italic mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess</p>
                    </div>
                    <div className="card_footer">
                        <Image src={testimonial_qoute} alt="testimonial_qoute-image"/>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="testimonial_card">
                <div className="card_img">
                    <Image src={testimonial} alt="testimonial-image" className="" />
                </div>
                <div className="card_body bg-white px-4 md:px-20 pt-16 pb-10 space-y-1 relative -top-14 -z-10">
                    <div className="card_text">
                        <h3 className="text-2xl">Due markes</h3>
                        <h1 className="text-xl text-bold text-orange-600">Rental</h1>
                        <p className="opacity-70 italic mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess</p>
                    </div>
                    <div className="card_footer">
                        <Image src={testimonial_qoute} alt="testimonial_qoute-image"/>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="testimonial_card">
                <div className="card_img">
                    <Image src={testimonial} alt="testimonial-image" className="" />
                </div>
                <div className="card_body bg-white px-4 md:px-20 pt-16 pb-10 space-y-1 relative -top-14 -z-10">
                    <div className="card_text">
                        <h3 className="text-2xl">Due markes</h3>
                        <h1 className="text-xl text-bold text-orange-600">Rental</h1>
                        <p className="opacity-70 italic mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess</p>
                    </div>
                    <div className="card_footer">
                        <Image src={testimonial_qoute} alt="testimonial_qoute-image"/>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
