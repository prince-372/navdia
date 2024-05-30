import React from "react";

import shadowElipsRight from "../assets/image/webp/shadowElipsRight.webp";
import shadowElipsLeft from "../assets/image/webp/shadowElipsLeft.webp";
import { slidesData } from "./commen/Helper";

const Slider = () => {
  return (
    <div className="overflow-x-clip relative">
      <div className="mx-auto max-w-[1920px]">
        <div className="slider py-[11px]">
          <div className="slide-track gap-[32px]">
            {slidesData.map((slide, index) => (
              <div className="slide cursor-pointer" key={index}>
                <div className="w-[306px] sm:w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] sm:p-[15px] p-[10px] ">
                  <div className="flex items-center gap-[19px]">
                    <div>
                      <div className="flex items-center gap-[10px] pb-[10px]">
                        <img
                          className="!w-[50px] !h-[50px]"
                          src={slide.personImg}
                          alt="personImg"
                        />
                        <p className="font-bold text-lg sm:text-xl font-Open">
                          {slide.personName}
                        </p>
                      </div>
                      <p className="pb-[2px] text-lightCreem text-sm sm:text-base font-normal">
                        Profit:{" "}
                        <span className="font-bold text-lightBlack">
                          {slide.profit}
                        </span>
                      </p>
                      <p className="pb-[2px] text-lightCreem text-sm sm:text-base font-normal">
                        Current Balance:{" "}
                        <span className="font-bold text-lightBlack">
                          {slide.balance}
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <img
                        className="max-sm:w-[100px]"
                        src={slide.grafImg}
                        alt="grafImg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        className="absolute left-0 top-0 max-xl:w-[60px] xl:w-[247px] h-[140px] md:h-[161px] hidden sm:block"
        src={shadowElipsLeft}
        alt="shadowElipsLeft"
      />
      <img
        className="absolute right-0 top-0 max-xl:w-[60px] xl:w-[247px] h-[140px] md:h-[161px] hidden sm:block"
        src={shadowElipsRight}
        alt="shadowElipsRight"
      />
    </div>
  );
};

export default Slider;
