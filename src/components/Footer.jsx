import React from 'react'
import { Facebook, Instragram, Linkdin } from './Icons'

const Footer = () => {
  return (
    <div className=' bg-[#0B203D] overflow-x-clip relative z-10'>
      <div className=' sm:w-[191px] w-[80px] sm:h-[191px] h-[80px] bg-CommonGradient2 blur-[150px] absolute -z-10 bottom-[0%] right-[0%]'></div>
        <div className=' max-[1536px]:max-w-[1140px] container mx-auto px-3 sm:pt-[72px] pt-[20px]'>
          <div className=' flex flex-wrap justify-between sm:pb-[65px] pb-[20px]'>
            <div>
                <a href="">
                  <p className=' font-Inter font-bold text-[40px] leading-[48px] text-white'>AI STOCKS</p>
                </a>
                <p className=' font-Inter font-normal text-base max-w-[261px] text-[#CED2D8] pt-[15px]'>Empowering Your Financial Future with Intelligent Investments</p>
            </div>
            <div>
                <p className='font-Inter font-semibold text-[20px] leading-[30px] text-white pt-3 sm:pt-0'>Follow Us on</p>
                <div className=' flex gap-[15px] pt-[10px]'>
                      <div className='w-[35px] cursor-pointer duration-300 hover:duration-300 hover:-translate-y-0.5 h-[35px] flex justify-center items-center rounded-[60px] bg-CommonGradient'>
                      <Linkdin/>
                      </div>
                    <div className='w-[35px] duration-300 hover:duration-300 hover:-translate-y-0.5 h-[35px] flex justify-center items-center rounded-[60px] bg-CommonGradient'>
                    <Instragram/>
                    </div>
                    <div className='w-[35px] duration-300 hover:duration-300 hover:-translate-y-0.5 h-[35px] flex justify-center items-center rounded-[60px] bg-CommonGradient'>
                    <Facebook/>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <hr className=' w-[1920px] border border-[#4B70A2]'/>
        <div className=' max-[1536px]:max-w-[1140px] container px-3 mx-auto'>
          <ul className=' flex flex-wrap justify-between py-[27px]'>
            <a href="" className='font-Inter text-base font-normal text-[#CED2D8] hover:text-white duration-300 hover:duration-300 '>Privacy Policy | Conditions</a>
            <a href="" className=' font-Inter font-normal text-base text-[#CED2D8] hover:text-white duration-300 hover:duration-300  pt-3 sm:pt-0'>Report Abuse/ Spam | Copyright@{new Date().getFullYear()}</a>
          </ul>
        </div>
    </div>
  )
}

export default Footer