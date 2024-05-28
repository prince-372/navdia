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
        <div className="shadow-[0px_38px_0px_-9px_#E8F1FD] max-w-[1360px] rounded-[34px] bg-CommonGradient md:py-[78px] py-[40px] md:px-[110px] px-[20px] ">
        <h2 className=" font-Inter font-bold sm:leading-[57px] leading-[40px] text-center text-white sm:text-[44px] text-[34px]">
                Trending about NVIDIA
              </h2>
          <Swiper
              loop={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className=" grid lg:grid-cols-2 grid-cols-1 lg:pt-[71px] pt-[10px] pb-[57px] gap-[20px] items-center px-2">
                <div>
                  <p className=" font-Inter font-bold sm:text-[32px] text-[22px] sm:leading-[41px] leading-[28px] text-white max-w-[510px] mx-auto lg:mx-0 text-center lg:text-start">
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
              <div className=" grid lg:grid-cols-2 grid-cols-1 md:pt-[71px] pt-[10px] gap-[20px] md:pb-[57px] pb-[10px] items-center px-2">
                <div>
                  <p className=" font-Inter font-bold sm:text-[32px] text-[22px] sm:leading-[41px] leading-[28px] text-white max-w-[510px] mx-auto lg:mx-0 text-center lg:text-start">
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
              <div className=" grid lg:grid-cols-2 grid-cols-1 gap-[20px] md:pt-[71px] pt-[10px] md:pb-[57px] pb-[10px] items-center px-2">
                <div>
                  <p className=" font-Inter font-bold sm:text-[32px] text-[22px] sm:leading-[41px] leading-[28px] text-white max-w-[510px] mx-auto lg:mx-0 text-center lg:text-start">
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
              <div className=" grid lg:grid-cols-2 gap-[20px] grid-cols-1 md:pt-[71px] pt-[10px] md:pb-[57px] pb-[10px] items-center px-2">
                <div>
                  <p className=" font-Inter font-bold sm:text-[32px] text-[22px] sm:leading-[41px] leading-[28px] text-white max-w-[510px] mx-auto lg:mx-0 text-center lg:text-start">
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
