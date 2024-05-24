import React from "react";
import moneySvg from "../assets/image/svg/moneySvg.svg";
import Commanbtn from "./Commanbtn";
import { Bigcircleright, Smallcircleright } from "./Icons";

const Money = () => {
  return (
    <div className="pt-[172px] relative overflow-x">
        <span className=" absolute top-[20%] right-[-5%]">
            <Smallcircleright />
        </span>
        <span className=" absolute top-[-3%] right-[-12%]">
            <Bigcircleright/>
        </span>
      <div className=" container px-3 mx-auto">
        <div className=" flex justify-center">
          <img src={moneySvg} alt="moneySvg" />
        </div>
        <p className=" font-medium font-Inter text-[32px] leading-[41px] max-w-[849px] mx-auto text-center italic pt-[22px]">
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
