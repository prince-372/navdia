import React from "react";
import moneySvg from "../assets/image/svg/moneySvg.svg";
import Commanbtn from "./Commanbtn";
import { Bigcircleright, Smallcircleright } from "./Icons";

const Money = () => {
  return (
    <div className="pt-[172px] relative overflow-x pb-[53px] overflow-x-clip">
        <span className=" absolute top-[17%] md:right-[-5%] sm:right-[-8%] right-[-14%]">
            <Smallcircleright />
        </span>
        <span className=" absolute lg:top-[-3%] sm:top-[-2%] top-[0] xl:right-[-12%] lg:right-[-13%] md:right-[-15%] sm:right-[-23%] right-[-31%]">
            <Bigcircleright/>
        </span>
      <div className=" container px-3 mx-auto">
        <div className=" flex justify-center">
          <img src={moneySvg} alt="moneySvg" />
        </div>
        <p className=" font-medium font-Inter sm:text-[32px] text-[26px] sm:leading-[41px] leading-[36px] max-w-[849px] mx-auto text-center italic pt-[22px]">
          Analysts continue to remain positive on <span className=" font-bold">Nvidia stock</span>. Prior to the
          earnings, five large brokerages raised their target price on the
          company's shares.
        </p>
        <div className=" flex justify-center pt-12">
            <Commanbtn className="w-[147px] h-[48px]" text="Invest Now"/>
        </div>
      </div>
      <span className=" absolute translate-x-[-60%] -translate-y-[47%]">
      <Smallcircleright />
      </span>
      <span className=" absolute translate-x-[-53%] -translate-y-[49%]">
      <Bigcircleright/>
      </span>
    </div>
  );
};

export default Money;
