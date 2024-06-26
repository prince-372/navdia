import React from "react";
import { Items } from "./commen/Helper";


const Invest = () => {
  return (
    <div className=" pt-12 md:pt-[80px] xl:pt-[136px] lg:pt-[100px]">
      <div className="max-[1536px]:max-w-[1140px] container mx-auto px-3 ">
        <h2 className=" text-center pb-4 sm:pb-[60px] font-Inter font-bold sm:text-[44px] text-[27px] leading-[46px] md:leading-[57px]">
          Why Invest in Nvidia Stock
        </h2>
        <div className=" flex flex-wrap flex-row items-center justify-center -mx-3   ">
          {Items.map((items, index) => (
            <div key={index} className=" px-3 lg:w-1/3 md:w-1/2  sm:w-[70%]">
              <div
                key={index}
                className="bg-skyWhit border max-md:max-w-[364px] mx-auto min-h-[320px] md:min-h-[356px] border-solid border-lightSky duration-300 hover:border hover:border-solid hover:border-skyDarkBlue hover:shadow-[0_6px_16.9px_0_#3861C44D] cursor-pointer h-full rounded-[12px] p-[24px_16px_32px_21px] mb-6 lg:mb-[60px] flex justify-between flex-col"
              >
                <p
                  className={`${
                    index === 2 ? "!md:text-2xl text-xl leading-[36px] " : ""
                  } font-Inter font-normal text-lg md:text-xl leading-[30px] text-black2 italic max-w-[326px]`}
                >
                  {items.para}{" "}
                </p>
                <div className={`${index === 2 ? "!w-[219px] !h-[49px]" : ""}`}>
                  <img src={items.img} alt="images" />{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex items-center flex-col lg:flex-row justify-center gap-[22px]">
          <p className="font-Inter font-normal text-xl text-black2">
            and a 100s of reasons
          </p>
          <button className="text-base shadow-[0px_2px_10px_0px_#ECECEC] w-[146px] h-[48px] font-semibold font-Inter py-3 px-[30px] rounded-[58px] bg-CommonGradient text-white hover:bg-CommonGradientH duration-300">
            Invest Now{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invest;
