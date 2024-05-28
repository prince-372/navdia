import React from 'react'
import nvdaCard from "../assets/image/webp/nvdaCard.webp"
import smallCard from "../assets/image/webp/foolImg.webp"
import elipesbg from '../assets/image/webp/elipesNvda.webp'

const Nvda = () => {
  return (
    <div  className=' relative lg:pt-[100px] pt-[17px] overflow-x-clip lg:pb-[97px] pb-[48px]'>
        <img className=' absolute top-[0%] left-[-1%]' src={elipesbg} alt="elipesbg" />
        <div className=' max-w-[1140px] container px-3 mx-auto'>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[34px] items-center justify-center">
     <div className=' relative'>
        <img src={nvdaCard} alt="nvdaCard" />
        <div className=' flex justify-center mt-[-10%] sm:mt-0'><img className=' sm:absolute bottom-[5%] lg:left-[62%] left-[41%] w-[219px] h-[94px]' src={smallCard} alt="smallCard" /></div>
     </div>
     <div className=' relative z-10 pt-4 lg:pt-0'>
        <p className=' font-Inter sm:text-[44px] text-[30px] sm:leading-[57px] leading-[36px] font-bold max-w-[521px] text-black mx-auto lg:mx-0 text-center lg:text-start'>3 Reasons to Buy Nvidia Stock with AI</p>
        <p className='font-Inter text-base font-normal max-w-[489px] md:pt-[67px] pt-[10px] mx-auto lg:mx-0 text-center lg:text-start'>The GPU maker has become synonymous with AI and is taking that technology to the next level.</p>
        <div className=' lg:pt-[40px] pt-0 flex justify-center lg:justify-start'>
            <button className="text-base w-[182px] h-[48px] font-bold font-Inter py-3 px-[30px] rounded-[58px] bg-CommonGradient text-white hover:bg-CommonGradientH duration-300 mt-6 lg:mt-[40px]">Read full article</button>
        </div>
     </div>
          </div>
        </div>
    </div>
  )
}

export default Nvda