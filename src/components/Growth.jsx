import React from 'react'
import chartImg from '../assets/image/png/chartsImg.png'
import rightElips from '../assets/image/png/rightElips.png'

const Growth = () => {
  return (
    <div className=' pt-12 md:pt-[90px] lg:pt-[191px] relative overflow-x-clip z-10'>
      <div className=' max-[1536px]:max-w-[1140px] container mx-auto px-3'>
        <div className=' grid lg:grid-cols-2 gap-[18px]'>
                <div className=' flex order-2 lg:order-1 justify-center flex-col'>
                        <h2 className=' font-Inter font-bold text-[38px] md:text-[44px] leading-[46px] md:leading-[57px] text-center lg:text-start  text-black2  pb-3 md:pb-6'>Nvidia - AI GPU <span className=' lg:block'>1 year 228% Growth</span></h2>
                        <p className=' text-black3 text-base font-normal font-Inter max-w-[489px] text-center lg:text-start'>NVIDIA Corporation, a powerhouse in GPU technology and AI innovation, offers investors compelling opportunities. With dominance in gaming and data center markets, NVIDIA stands poised for growth. Diversification efforts into AI, autonomous vehicles, and strategic acquisitions further bolster its potential. As a leader in technology and with a strong financial track record, NVIDIA remains a top choice for savvy investors.</p>
                </div>
                <img className=' order-1 lg:order-2 duration-300 hover:shadow-[0_11px_26.7px_0_#0000001F] rounded-2xl w-full ' src={chartImg} alt="chartImg" width={631} height={344} />
        </div>
      </div>
      <img className=' absolute top-[-1%] right-0 -z-10 ' src={rightElips} alt="rightElips" />
    </div>
  )
}

export default Growth