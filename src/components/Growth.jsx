import React from 'react'
import chartImg from '../assets/image/png/chartsImg.png'
import rightElips from '../assets/image/png/rightElips.png'

const Growth = () => {
  return (
    <div className='pt-[191px] relative overflow-x-clip z-10'>
      <div className=' container mx-auto px-3'>
        <div className=' grid lg:grid-cols-2 gap-[18px]'>
                <div className=' flex justify-center flex-col'>
                        <h2 className=' font-Inter font-bold text-[44px] leading-[57px] text-black2  pb-6'>Nvidia - AI GPU <span className=' block'>1 year 228% Growth</span></h2>
                        <p className=' text-black3 text-base font-normal font-Inter max-w-[489px]'>NVIDIA Corporation, a powerhouse in GPU technology and AI innovation, offers investors compelling opportunities. With dominance in gaming and data center markets, NVIDIA stands poised for growth. Diversification efforts into AI, autonomous vehicles, and strategic acquisitions further bolster its potential. As a leader in technology and with a strong financial track record, NVIDIA remains a top choice for savvy investors.</p>
                </div>
                <img className=' duration-300 hover:shadow-[0_11px_26.7px_0_#0000001F] rounded-2xl' src={chartImg} alt="chartImg" width={631} height={344} />
        </div>
      </div>
      <img className=' absolute top-[-1%] right-0 -z-10 ' src={rightElips} alt="rightElips" />
    </div>
  )
}

export default Growth
