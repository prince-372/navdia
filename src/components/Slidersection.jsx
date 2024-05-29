import React from 'react'
import personImg1 from '../assets/image/svg/sliderImg1.svg'
import personImg3 from '../assets/image/svg/sliderImg2.svg'
import personImg2 from '../assets/image/svg/sliderImg3.svg'
import grafImg1 from '../assets/image/webp/grafImg1.webp'
import grafImg2 from '../assets/image/webp/grafImg2.webp'
import grafImg3 from '../assets/image/webp/grafImg3.webp'
import shadowElipsRight from '../assets/image/webp/shadowElipsRight.webp'
import shadowElipsLeft from '../assets/image/webp/shadowElipsLeft.webp'

const Slidersection = () => {
        return(
                <div className=' overflow-x-clip relative '>
                        <div className=' mx-auto max-w-[1920px]'>
                                <div className="slider py-[11px]">
                                        <div className="slide-track gap-[32px]">
                                                <div className="slide cursor-pointer">
                                                        <div className='w-[306px] sm:w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] sm:p-[15px] p-[10px] '>
                                                                <div className='flex items-center gap-[19px]'>
                                                                        <div>
                                                                                <div className=' flex items-center gap-[10px] pb-[10px]'>
                                                                                        <img className='!w-[50px] !h-[50px]' src={personImg1} alt="personImg" />
                                                                                        <p className=' font-bold text-lg sm:text-xl font-Open'>Jerome</p>
                                                                                </div>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Profit: <span className='font-bold text-lightBlack'>$35,499</span></p>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal mx-auto'>Current Balance: <span className='font-bold text-lightBlack'>$68,187</span></p>
                                                                        </div>
                                                                        <div className='flex justify-center'>
                                                                                <img className=' max-sm:w-[100px]' src={grafImg1} alt="grafImg1" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="slide cursor-pointer">
                                                        <div className='w-[306px] sm:w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] p-[15px]'>
                                                                <div className='flex items-center gap-[19px]'>
                                                                        <div>
                                                                                <div className=' flex items-center gap-[10px] pb-[10px]'>
                                                                                        <img src={personImg2} alt="personImg" />
                                                                                        <p className=' font-bold text-lg sm:text-xl font-Open'>Murray</p>
                                                                                </div>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Profit: <span className='font-bold text-lightBlack'>$35,499</span></p>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Current Balance: <span className='font-bold text-lightBlack'>$68,187</span></p>
                                                                        </div>
                                                                        <div className='flex justify-center'>
                                                                                <img className=' max-sm:w-[90px]' src={grafImg2} alt="grafImg1" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="slide cursor-pointer">
                                                        <div className='w-[306px] sm:w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] p-[15px]'>
                                                                <div className='flex items-center gap-[19px]'>
                                                                        <div>
                                                                                <div className=' flex items-center gap-[10px] pb-[10px]'>
                                                                                        <img src={personImg3} alt="personImg" />
                                                                                        <p className=' font-bold text-lg sm:text-xl font-Open'>Felicia</p>
                                                                                </div>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Profit: <span className='font-bold text-lightBlack'>$2,104</span></p>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Current Balance: <span className='font-bold text-lightBlack'>$4,584</span></p>
                                                                        </div>
                                                                        <div className='flex justify-center'>
                                                                                <img className=' max-sm:w-[100px]' src={grafImg3} alt="grafImg1" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="slide cursor-pointer">
                                                        <div className='w-[306px] sm:w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] sm:p-[15px] p-[10px] '>
                                                                <div className='flex items-center gap-[19px]'>
                                                                        <div>
                                                                                <div className=' flex items-center gap-[10px] pb-[10px]'>
                                                                                        <img className='!w-[50px] !h-[50px]' src={personImg1} alt="personImg" />
                                                                                        <p className=' font-bold text-lg sm:text-xl font-Open'>Jerome</p>
                                                                                </div>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Profit: <span className='font-bold text-lightBlack'>$35,499</span></p>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal mx-auto'>Current Balance: <span className='font-bold text-lightBlack'>$68,187</span></p>
                                                                        </div>
                                                                        <div className='flex justify-center'>
                                                                                <img className=' max-sm:w-[100px]' src={grafImg1} alt="grafImg1" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="slide cursor-pointer">
                                                        <div className='w-[306px] sm:w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] p-[15px]'>
                                                                <div className='flex items-center gap-[19px]'>
                                                                        <div>
                                                                                <div className=' flex items-center gap-[10px] pb-[10px]'>
                                                                                        <img src={personImg2} alt="personImg" />
                                                                                        <p className=' font-bold text-lg sm:text-xl font-Open'>Murray</p>
                                                                                </div>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Profit: <span className='font-bold text-lightBlack'>$35,499</span></p>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Current Balance: <span className='font-bold text-lightBlack'>$68,187</span></p>
                                                                        </div>
                                                                        <div className='flex justify-center'>
                                                                                <img className=' max-sm:w-[90px]' src={grafImg2} alt="grafImg1" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="slide cursor-pointer">
                                                        <div className='w-[306px] sm:w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] p-[15px]'>
                                                                <div className='flex items-center gap-[19px]'>
                                                                        <div>
                                                                                <div className=' flex items-center gap-[10px] pb-[10px]'>
                                                                                        <img src={personImg3} alt="personImg" />
                                                                                        <p className=' font-bold text-lg sm:text-xl font-Open'>Felicia</p>
                                                                                </div>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Profit: <span className='font-bold text-lightBlack'>$2,104</span></p>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Current Balance: <span className='font-bold text-lightBlack'>$4,584</span></p>
                                                                        </div>
                                                                        <div className='flex justify-center'>
                                                                                <img className=' max-sm:w-[100px]' src={grafImg3} alt="grafImg1" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="slide cursor-pointer">
                                                        <div className='w-[306px] sm:w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] sm:p-[15px] p-[10px] '>
                                                                <div className='flex items-center gap-[19px]'>
                                                                        <div>
                                                                                <div className=' flex items-center gap-[10px] pb-[10px]'>
                                                                                        <img className='!w-[50px] !h-[50px]' src={personImg1} alt="personImg" />
                                                                                        <p className=' font-bold text-lg sm:text-xl font-Open'>Jerome</p>
                                                                                </div>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Profit: <span className='font-bold text-lightBlack'>$35,499</span></p>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal mx-auto'>Current Balance: <span className='font-bold text-lightBlack'>$68,187</span></p>
                                                                        </div>
                                                                        <div className='flex justify-center'>
                                                                                <img className=' max-sm:w-[100px]' src={grafImg1} alt="grafImg1" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="slide cursor-pointer">
                                                        <div className='w-[306px] sm:w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] p-[15px]'>
                                                                <div className='flex items-center gap-[19px]'>
                                                                        <div>
                                                                                <div className=' flex items-center gap-[10px] pb-[10px]'>
                                                                                        <img src={personImg2} alt="personImg" />
                                                                                        <p className=' font-bold text-lg sm:text-xl font-Open'>Murray</p>
                                                                                </div>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Profit: <span className='font-bold text-lightBlack'>$35,499</span></p>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Current Balance: <span className='font-bold text-lightBlack'>$68,187</span></p>
                                                                        </div>
                                                                        <div className='flex justify-center'>
                                                                                <img className=' max-sm:w-[90px]' src={grafImg2} alt="grafImg1" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="slide cursor-pointer">
                                                        <div className='w-[306px] sm:w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] p-[15px]'>
                                                                <div className='flex items-center gap-[19px]'>
                                                                        <div>
                                                                                <div className=' flex items-center gap-[10px] pb-[10px]'>
                                                                                        <img src={personImg3} alt="personImg" />
                                                                                        <p className=' font-bold text-lg sm:text-xl font-Open'>Felicia</p>
                                                                                </div>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Profit: <span className='font-bold text-lightBlack'>$2,104</span></p>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Current Balance: <span className='font-bold text-lightBlack'>$4,584</span></p>
                                                                        </div>
                                                                        <div className='flex justify-center'>
                                                                                <img className=' max-sm:w-[100px]' src={grafImg3} alt="grafImg1" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="slide cursor-pointer">
                                                        <div className='w-[306px] sm:w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] sm:p-[15px] p-[10px] '>
                                                                <div className='flex items-center gap-[19px]'>
                                                                        <div>
                                                                                <div className=' flex items-center gap-[10px] pb-[10px]'>
                                                                                        <img className='!w-[50px] !h-[50px]' src={personImg1} alt="personImg" />
                                                                                        <p className=' font-bold text-lg sm:text-xl font-Open'>Jerome</p>
                                                                                </div>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Profit: <span className='font-bold text-lightBlack'>$35,499</span></p>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal mx-auto'>Current Balance: <span className='font-bold text-lightBlack'>$68,187</span></p>
                                                                        </div>
                                                                        <div className='flex justify-center'>
                                                                                <img className=' max-sm:w-[100px]' src={grafImg1} alt="grafImg1" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="slide cursor-pointer">
                                                        <div className='w-[306px] sm:w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] p-[15px]'>
                                                                <div className='flex items-center gap-[19px]'>
                                                                        <div>
                                                                                <div className=' flex items-center gap-[10px] pb-[10px]'>
                                                                                        <img src={personImg2} alt="personImg" />
                                                                                        <p className=' font-bold text-lg sm:text-xl font-Open'>Murray</p>
                                                                                </div>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Profit: <span className='font-bold text-lightBlack'>$35,499</span></p>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Current Balance: <span className='font-bold text-lightBlack'>$68,187</span></p>
                                                                        </div>
                                                                        <div className='flex justify-center'>
                                                                                <img className=' max-sm:w-[90px]' src={grafImg2} alt="grafImg1" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="slide cursor-pointer">
                                                        <div className='w-[306px] sm:w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] p-[15px]'>
                                                                <div className='flex items-center gap-[19px]'>
                                                                        <div>
                                                                                <div className=' flex items-center gap-[10px] pb-[10px]'>
                                                                                        <img src={personImg3} alt="personImg" />
                                                                                        <p className=' font-bold text-lg sm:text-xl font-Open'>Felicia</p>
                                                                                </div>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Profit: <span className='font-bold text-lightBlack'>$2,104</span></p>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Current Balance: <span className='font-bold text-lightBlack'>$4,584</span></p>
                                                                        </div>
                                                                        <div className='flex justify-center'>
                                                                                <img className=' max-sm:w-[100px]' src={grafImg3} alt="grafImg1" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="slide cursor-pointer">
                                                        <div className='w-[306px] sm:w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] sm:p-[15px] p-[10px] '>
                                                                <div className='flex items-center gap-[19px]'>
                                                                        <div>
                                                                                <div className=' flex items-center gap-[10px] pb-[10px]'>
                                                                                        <img className='!w-[50px] !h-[50px]' src={personImg1} alt="personImg" />
                                                                                        <p className=' font-bold text-lg sm:text-xl font-Open'>Jerome</p>
                                                                                </div>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Profit: <span className='font-bold text-lightBlack'>$35,499</span></p>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal mx-auto'>Current Balance: <span className='font-bold text-lightBlack'>$68,187</span></p>
                                                                        </div>
                                                                        <div className='flex justify-center'>
                                                                                <img className=' max-sm:w-[100px]' src={grafImg1} alt="grafImg1" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="slide cursor-pointer">
                                                        <div className='w-[306px] sm:w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] p-[15px]'>
                                                                <div className='flex items-center gap-[19px]'>
                                                                        <div>
                                                                                <div className=' flex items-center gap-[10px] pb-[10px]'>
                                                                                        <img src={personImg2} alt="personImg" />
                                                                                        <p className=' font-bold text-lg sm:text-xl font-Open'>Murray</p>
                                                                                </div>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Profit: <span className='font-bold text-lightBlack'>$35,499</span></p>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Current Balance: <span className='font-bold text-lightBlack'>$68,187</span></p>
                                                                        </div>
                                                                        <div className='flex justify-center'>
                                                                                <img className=' max-sm:w-[90px]' src={grafImg2} alt="grafImg1" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="slide cursor-pointer">
                                                        <div className='w-[306px] sm:w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] p-[15px]'>
                                                                <div className='flex items-center gap-[19px]'>
                                                                        <div>
                                                                                <div className=' flex items-center gap-[10px] pb-[10px]'>
                                                                                        <img src={personImg3} alt="personImg" />
                                                                                        <p className=' font-bold text-lg sm:text-xl font-Open'>Felicia</p>
                                                                                </div>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Profit: <span className='font-bold text-lightBlack'>$2,104</span></p>
                                                                                <p className=' pb-[2px] text-lightCreem text-sm sm:text-base font-normal'>Current Balance: <span className='font-bold text-lightBlack'>$4,584</span></p>
                                                                        </div>
                                                                        <div className='flex justify-center'>
                                                                                <img className=' max-sm:w-[100px]' src={grafImg3} alt="grafImg1" />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                
                                        </div>
                                </div>
                        </div>
                        <img className=' absolute left-0 top-0  max-xl:w-[60px] xl:w-[247px] h-[140px] md:h-[161px] hidden sm:block' src={shadowElipsLeft} alt="shadowElipsLeft" />
                        <img className=' absolute right-0 top-0 max-xl:w-[60px] xl:w-[247px] h-[140px] md:h-[161px] hidden sm:block' src={shadowElipsRight} alt="shadowElipsRight" />
                </div>
        )

}

export default Slidersection
