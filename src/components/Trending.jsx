import React, { useRef, useState } from "react";
import sliderImg from "../assets/image/webp/buildingSliderImg.webp";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Trending = () => {
  return (
    <div className=" lg:pt-[120px] pt-[34px]">
      <div className=" max-w-[1360px] container mx-auto px-3">
        <div className="shadow-[0px_38px_0px_-9px_#E8F1FD] max-w-[1360px] rounded-[34px] bg-CommonGradient md:pt-[78px] pt-[40px] md:pb-[62px] pb-[30px] xl:px-[110px] lg:px-[70px] px-[20px] relative z-10 ">
          <h2 className=" font-Inter font-bold sm:text-[44px] text-[27px] sm:leading-[46px] leading-[33px] md:leading-[57px] text-center text-white">
            Trending about NVIDIA
          </h2>
          <Swiper
            loop={true}
            pagination={{
              el: ".swiper-pagination",
              type: "bullets",
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className=" grid lg:grid-cols-2 grid-cols-1 lg:pt-[71px] pt-[10px] lg:pb-[60px] pb-0 gap-[20px] items-center px-2">
                <div>
                  <p className=" font-Inter font-bold xl:text-[32px] sm:text-[26px] text-[23px] xl:leading-[41px] leading-[32px] text-white lg:max-w-[510px] mx-auto lg:mx-0 text-center lg:text-start">
                    NVIDIA Joins $110 Million Partnership to Help Universities
                    Teach AI Skills
                  </p>
                  <p className=" font-Inter font-normal text-base text-white lg:max-w-[549px] pt-4 mx-auto lg:mx-0 text-center lg:text-start">
                    The Biden Administration has announced a new $110 million AI
                    partnership between Japan and the United States that
                    includes an initiative to fund research through a
                    collaboration between the University of Washington and the
                    University of Tsukuba.
                  </p>
                </div>
                <div className=" flex justify-center lg:justify-start pt-4 lg:pt-0">
                  <img
                    className=" border-[6px] border-white rounded-[12px]"
                    src={sliderImg}
                    alt="sliderImg"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" grid lg:grid-cols-2 grid-cols-1 lg:pt-[71px] pt-[10px] lg:pb-[60px] pb-0 gap-[20px] items-center px-2">
                <div>
                  <p className=" font-Inter font-bold xl:text-[32px] sm:text-[26px] text-[23px] xl:leading-[41px] leading-[32px] text-white max-w-[510px] mx-auto lg:mx-0 text-center lg:text-start">
                    NVIDIA Joins $110 Million Partnership to Help Universities
                    Teach AI Skills
                  </p>
                  <p className=" font-Inter font-normal text-base text-white max-w-[549px] pt-4 mx-auto lg:mx-0 text-center lg:text-start">
                    The Biden Administration has announced a new $110 million AI
                    partnership between Japan and the United States that
                    includes an initiative to fund research through a
                    collaboration between the University of Washington and the
                    University of Tsukuba.
                  </p>
                </div>
                <div className=" flex justify-center lg:justify-start pt-4 lg:pt-0">
                  <img
                    className=" border-[6px] border-white rounded-[12px]"
                    src={sliderImg}
                    alt="sliderImg"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" grid lg:grid-cols-2 grid-cols-1 lg:pt-[71px] pt-[10px] lg:pb-[60px] pb-0 gap-[20px] items-center px-2">
                <div>
                  <p className=" font-Inter font-bold xl:text-[32px] sm:text-[26px] text-[23px] xl:leading-[41px] leading-[32px] text-white max-w-[510px] mx-auto lg:mx-0 text-center lg:text-start">
                    NVIDIA Joins $110 Million Partnership to Help Universities
                    Teach AI Skills
                  </p>
                  <p className=" font-Inter font-normal text-base text-white max-w-[549px] pt-4 mx-auto lg:mx-0 text-center lg:text-start">
                    The Biden Administration has announced a new $110 million AI
                    partnership between Japan and the United States that
                    includes an initiative to fund research through a
                    collaboration between the University of Washington and the
                    University of Tsukuba.
                  </p>
                </div>
                <div className=" flex justify-center lg:justify-start pt-4 lg:pt-0">
                  <img
                    className=" border-[6px] border-white rounded-[12px]"
                    src={sliderImg}
                    alt="sliderImg"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};
export default Trending;
