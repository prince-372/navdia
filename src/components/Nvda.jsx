import React from "react";
import nvdaCard from "../assets/image/webp/nvdaCard.png";
import smallCard from "../assets/image/webp/foolImg.webp";
import elipesbg from "../assets/image/webp/elipesNvda.webp";

const Nvda = () => {
  return (
    <div className=" relative xl:pt-[100px] lg:pt-[60px] pt-[17px] overflow-x-clip lg:pb-[125px] pb-[48px]">
      <img
        className=" absolute top-[0%] left-[-1%]"
        src={elipesbg}
        alt="elipesbg"
      />
      <div className=" max-w-[1140px] container px-3 mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[76px] items-center justify-center">
          <div className="flex justify-center items-center">
            <div className=" relative z-10 lg:pt-[57px] pt-0">
              <img
                className="shadow-[0px_15px_52px_0px_#0000001F]"
                src={nvdaCard}
                alt="nvdaCard"
              />
              <div className=" flex justify-center mt-[5%] sm:mt-0">
                <img
                  className=" sm:absolute bottom-[-11%] lg:left-[70%] left-[65%] w-[219px] h-[94px]"
                  src={smallCard}
                  alt="smallCard"
                />
              </div>
            </div>
          </div>
          <div className=" relative z-10 pt-4 lg:pt-0">
            <p className=" font-Inter sm:text-[44px] text-[27px] sm:leading-[46px] leading-[33px] md:leading-[57px] font-bold max-w-[521px] text-black mx-auto lg:mx-0 text-center lg:text-start md:pt-[88px] sm:pt-8">
              3 Reasons to Buy Nvidia Stock with AI
            </p>
            <p className="font-Inter text-base font-normal max-w-[489px] lg:pt-[67px]  text-[#353739] pt-4 mx-auto lg:mx-0 text-center lg:text-start">
              The GPU maker has become synonymous with AI and is taking that
              technology to the next level.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="text-base shadow-[0px_2px_10px_0px_#ECECEC] w-[182px] h-[48px] font-bold font-Inter py-3 px-[30px] rounded-[58px] bg-CommonGradient text-white hover:bg-CommonGradientH duration-300 mt-6 lg:mt-[40px]">
                Read full article{" "}
                <hr className=" h-3 w-full text-white mt-[-4%]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nvda;
