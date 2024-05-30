import React from "react";
import { Facebook, Instragram, Linkdin } from "./common/Icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" bg-darkBlue overflow-x-clip relative z-10">
      <div className=" sm:w-[191px] w-[80px] sm:h-[191px] h-[80px] bg-CommonGradient2 blur-[150px] absolute -z-10 bottom-[0%] right-[0%]"></div>
      <div className=" max-[1536px]:max-w-[1140px] container mx-auto px-3 sm:pt-[72px] pt-5">
        <div className=" flex flex-wrap justify-between sm:pb-[65px] pb-5">
          <div>
            <a aria-label="logo" href="#">
              <p className=" font-Inter font-bold text-[40px] leading-[48px] text-white">
                AI STOCKS
              </p>
            </a>
            <p className=" font-Inter font-normal text-base max-w-[261px] text-white1 pt-[15px]">
              Empowering Your Financial Future with Intelligent Investments
            </p>
          </div>
          <div>
            <p className="font-Inter font-semibold text-[20px] leading-[30px] text-white pt-3 sm:pt-0">
              Follow Us on
            </p>
            <div className=" flex gap-[15px] pt-[10px]">
              <div className="w-[35px] cursor-pointer duration-300 hover:duration-300 hover:-translate-y-0.5 h-[35px] flex justify-center items-center rounded-[60px] bg-CommonGradient">
                <Linkdin />
              </div>
              <div className="w-[35px] duration-300 hover:duration-300 hover:-translate-y-0.5 h-[35px] flex justify-center items-center rounded-[60px] bg-CommonGradient">
                <Instragram />
              </div>
              <div className="w-[35px] duration-300 hover:duration-300 hover:-translate-y-0.5 h-[35px] flex justify-center items-center rounded-[60px] bg-CommonGradient">
                <Facebook />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className=" w-full border border-blue1" />
      <div className=" max-[1536px]:max-w-[1140px] container px-3 mx-auto">
        <ul className=" flex flex-wrap justify-between py-[27px]">
          <li>
            <a
              href="#"
              aria-label="Privacy"
              className="font-Inter text-base font-normal text-white1 hover:text-white duration-300 hover:duration-300 "
            >
              Privacy Policy | Conditions
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-label="Report"
              className=" font-Inter font-normal text-base text-white1 hover:text-white duration-300 hover:duration-300  pt-3 sm:pt-0"
            >
              Report Abuse/ Spam | Copyright@ {currentYear}{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
