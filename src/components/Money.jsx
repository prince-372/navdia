import React from "react";
import moneySvg from "../assets/image/svg/moneySvg.svg";
import { Bigcircleright, Smallcircleright } from "./Icons";

const Money = () => {
  return (
    <div className="lg:pt-[172px] pt-[68px] relative overflow-x pb-[53px] overflow-x-clip z-10">
        <span className=" absolute  max-sm:top-[19%] max-md:top-[23%] max-md:right-[-9%] max-lg:top-[23%] max-lg:right-[-9%] lg:top-[21%] lg:right-[-6%] max-sm:right-[-18%] animate-spin">
            <Smallcircleright />
        </span>
        <span className=" absolute max-sm:top-[-1%] max-md:top-[1%] max-md:right-[-24%] max-lg:top-[1%] max-lg:right-[-19%] lg:top-[1%] lg:right-[-13%] max-sm:right-[-44%]">
            <Bigcircleright/>
        </span>
      <div className=" container px-3 mx-auto">
        <div className=" flex justify-center">
          <img src={moneySvg} alt="moneySvg" />
        </div>
        <p className=" font-medium font-Inter sm:text-[32px] text-[26px] sm:leading-[41px] leading-[36px] max-w-[849px] mx-auto text-center italic md:pt-[22px] pt-0">
          Analysts continue to remain positive on <span className=" font-bold">Nvidia stock</span>. Prior to the
          earnings, five large brokerages raised their target price on the
          company's shares.
        </p>
        <div className=" flex justify-center pt-12">
            <button className="text-base w-[147px] h-[48px] font-bold font-Inter py-3 px-[30px] rounded-[58px] bg-CommonGradient text-white hover:bg-CommonGradientH duration-300">Invest Now </button>
        </div>
      </div>
      <span className=" absolute translate-x-[-60%] -z-10 -translate-y-[47%]">
      <Smallcircleright className="animate-spin" />
      </span>
      <span className=" absolute translate-x-[-57%] -z-10 -translate-y-[49%]">
      <Bigcircleright/>
      </span>
    </div>
  );
};

export default Money;
