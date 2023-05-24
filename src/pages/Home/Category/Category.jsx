import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import SectionTitle from "../../../componensts/SectionTitle/SectionTitle";

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';

const Category = () => {
  return (
    <div>
      <div>
        <SectionTitle
          subHeading={"From 11.00am to 10.00pm"}
          heading={"Order online"}
        ></SectionTitle>
      </div>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
          </SwiperSlide>


        </Swiper>
      </div>
    </div>
  );
};

export default Category;
