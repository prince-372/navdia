import React from 'react'
import chartImg from '../assets/image/webp/chartsImg.webp'
import rightElips from '../assets/image/webp/rightElips.webp'

const Growth = () => {
  return (
    <div className=' pt-12 md:pt-[90px] xl:pt-[191px] lg:pt-[110px] relative overflow-x-clip z-10 xl:pb-[100px] lg:pb-[10px] pb-[34px]'>
      <div className=' max-w-[1140px] container mx-auto px-3'>
        <div className=' grid lg:grid-cols-2 gap-[18px]'>
                <div className=' flex order-2 lg:order-1 justify-center flex-col'>
                        <h2 className=' font-Inter font-bold sm:text-[44px] text-[27px] sm:leading-[46px] leading-[29px] md:leading-[57px] text-center lg:text-start  text-black2 pt-4 lg:pt-0 pb-3 md:pb-6'>Nvidia - AI GPU <span className=' lg:block'>1 year 228% Growth</span></h2>
                        <p className=' text-black3 text-base leading-[25px] font-normal font-Inter lg:max-w-[489px] text-center lg:text-start mx-auto lg:mx-0'>NVIDIA Corporation, a powerhouse in GPU technology and AI innovation, offers investors compelling opportunities. With dominance in gaming and data center markets, NVIDIA stands poised for growth. Diversification efforts into AI, autonomous vehicles, and strategic acquisitions further bolster its potential. As a leader in technology and with a strong financial track record, NVIDIA remains a top choice for savvy investors.</p>
                </div>
                <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
                <img className='shadow-[0_11px_26.7px_0_#0000001F] rounded-2xl xl:max-w-[631px] xl:-translate-x-[48px] xl:!h-[344px]' src={chartImg} alt="chartImg" />
  
                </div>
                     </div>
      </div>
      <img className=' absolute top-[-1%] right-0 -z-10 ' src={rightElips} alt="rightElips" />
    </div>
  )
}

export default Growth
