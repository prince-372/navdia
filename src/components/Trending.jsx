import React, { useRef, useState } from "react";
import sliderImg from "../assets/image/png/buildingSliderImg.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Trending = () => {
  return (
    <div>
      <div className=" max-w-[1360px] mx-auto px-3">
        <div className=" mx-w-[1360px] rounded-[34px] bg-CommonGradient md:py-[78px] py-[10px] md:px-[110px] px-[20px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <Swiper
            pagination={{
              dynamicBullets: true,
              loop: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <h2 className=" font-Inter font-bold leading-[57px] text-center text-white text-[44px]">
                Trending about NVIDIA
              </h2>
              <div className=" grid lg:grid-cols-2 grid-cols-1 md:pt-[71px] pt-[10px] md:pb-[57px] pb-[10px] items-center">
                <div>
                  <p className=" font-Inter font-bold text-[32px] leading-[41px] text-white max-w-[510px] mx-auto lg:mx-0 text-center lg:text-start">
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
              <h2 className=" font-Inter font-bold leading-[57px] text-center text-white text-[44px]">
                Trending about NVIDIA
              </h2>
              <div className=" grid lg:grid-cols-2 grid-cols-1 md:pt-[71px] pt-[10px] md:pb-[57px] pb-[10px] items-center">
                <div>
                  <p className=" font-Inter font-bold text-[32px] leading-[41px] text-white max-w-[510px] mx-auto lg:mx-0 text-center lg:text-start">
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
              <h2 className=" font-Inter font-bold leading-[57px] text-center text-white text-[44px]">
                Trending about NVIDIA
              </h2>
              <div className=" grid lg:grid-cols-2 grid-cols-1 md:pt-[71px] pt-[10px] md:pb-[57px] pb-[10px] items-center">
                <div>
                  <p className=" font-Inter font-bold text-[32px] leading-[41px] text-white max-w-[510px] mx-auto lg:mx-0 text-center lg:text-start">
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
              <h2 className=" font-Inter font-bold leading-[57px] text-center text-white text-[44px]">
                Trending about NVIDIA
              </h2>
              <div className=" grid lg:grid-cols-2 grid-cols-1 md:pt-[71px] pt-[10px] md:pb-[57px] pb-[10px] items-center">
                <div>
                  <p className=" font-Inter font-bold text-[32px] leading-[41px] text-white max-w-[510px] mx-auto lg:mx-0 text-center lg:text-start">
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
        </div>
      </div>
    </div>
  );
};
export default Trending;
