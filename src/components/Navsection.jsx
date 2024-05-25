import React from 'react'
import Commanbtn from './Commanbtn'
import nvidIa from '../assets/image/png/nvidIa.png'
import dashedElips from '../assets/image/png/dashedElips.png'
import circleElips from '../assets/image/png/colorElips.png'

const Navsection = () => {
        return (
                <div className='bg-[url(./assets/image/png/hero-bg-img.png)] bg-cover bg-center bg-no-repeat min-h-screen relative mb-[25px]'>
                        <div className='bg-darkBlue pt-2 pb-[10px] overflow-hidden'>
                                <div className=' container px-3 mx-auto'>
                                        <div className=' flex justify-between items-start '>
                                                <a className=' text-white font-Inter font-bold text-[32px] leading-[38.73px]' href="">AI STOCKS</a>
                                                <div className=" flex justify-center my-[10px]">
                                                        <Commanbtn className="w-[147px] h-[48px]" text="Sign Up" />
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className='container mx-auto px-3 pt-[83px]'>
                                <div className=' grid grid-cols-2 gap-[137px]'>
                                        <div>
                                                <img className=' pb-[21px]' src={nvidIa} alt="nvdIa" width={146} height={146} />
                                                <h1 className=' text-white font-Inter font-bold text-[52px] leading-[62px] max-w-[499px] pb-4'>It’s the right time to buy Nvidia Stock</h1>
                                                <p className='text-lightWhite font-normal text-base max-w-[439px] pb-[35px]'>Its unbelievable market outperformance started at the beginning of 2023 and continues well into 2024, with the stock up more than 480%.</p>
                                                <div className=' flex items-center gap-[15px]'>
                                                        <button className=' bg-white p-[12px_30px] rounded-[58px] font-Inter font-semibold text-lightBlue'>Invest Now</button>
                                                        <button className=' bg-transparent p-[12px_30px] rounded-[58px] font-Inter font-semibold text-white border border-s border-white'>Know why?</button>
                                                </div>
                                        </div>
                                        <div className=' bg-white rounded-[32px] w-[493px] mt-[23px] p-[32px] shadow-[0_11px_33.5px_0_#0000001F;]'>
                                          <h2 className=' text-black font-Inter font-bold text-2xl pb-5'>Start Trading today!</h2>
                                          <form action="">
                                                <input type="text" className=' rounded-[30px] p-[13px_24px] bg-skyBlue w-full border border-solid border-skyDarkBlue placeholder:text-grey font-Inter mb-[14px] outline-none' placeholder='First Name'  />
                                                <input type="text" className=' rounded-[30px] p-[13px_24px] bg-skyBlue w-full border border-solid border-skyDarkBlue placeholder:text-grey font-Inter mb-[14px] outline-none' placeholder='Last Name'  />
                                                <input type="email" className=' rounded-[30px] p-[13px_24px] bg-skyBlue w-full border border-solid border-skyDarkBlue placeholder:text-grey font-Inter mb-[14px] outline-none' placeholder='E-mail'  />
                                                <input type="number" className=' rounded-[30px] p-[13px_24px] bg-skyBlue w-full border border-solid border-skyDarkBlue placeholder:text-grey font-Inter mb-[14px] outline-none' placeholder='(316) 555-0116'  />
                                                <textarea placeholder='Write a message...' name="Write a message..." id="" className='rounded-[30px] p-[13px_24px] bg-skyBlue w-full border border-solid border-skyDarkBlue placeholder:text-grey font-Inter h-[100px] mb-[14px] outline-none'></textarea>
                                          </form>
                                                <div className='flex justify-center'><button className='p-[16px_20px] flex justify-center items-center bg-CommonGradient w-full rounded-[38px] font-Inter font-semibold text-base text-white'>Get Started</button></div>
                                        </div>
                                </div>
                        </div>
                        <img className=' absolute top-[17%] left-0' src={dashedElips} alt="dashedElips" />
                        <img className=' absolute top-[7%] left-0' src={circleElips} alt="circleElips" />
                </div>
        )
}

export default Navsection
