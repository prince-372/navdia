import React from 'react'
import personImg1 from '../assets/image/png/personImg1.png'
import personImg2 from '../assets/image/png/personImg2.png'
import personImg3 from '../assets/image/png/personImg3.png'
import grafImg1 from '../assets/image/png/grafImg1.png'
import grafImg2 from '../assets/image/png/grafImg2.png'
import grafImg3 from '../assets/image/png/grafImg3.png'
import shadowElipsRight from '../assets/image/png/shadowElipsRight.png'
import shadowElipsLeft from '../assets/image/png/shadowElipsLeft.png'

const Slidersection = () => {
        return (
                <div className=' overflow-x-clip relative '>
                        <div class="slider py-[11px]">
                                <div class="slide-track gap-[32px]">
                                        <div class="slide">
                                                <div className='w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] p-[15px]'>
                                                        <div className='flex items-center gap-[19px]'>
                                                                <div>
                                                                        <div className=' flex items-center gap-[10px] pb-[10px]'>
                                                                                <img src={personImg1} alt="personImg" />
                                                                                <p className=' font-bold text-xl'>Jerome</p>
                                                                        </div>
                                                                        <p className=' pb-[2px] text-lightCreem text-base font-normal'>Profit: <span className='font-bold text-lightBlack'>$35,499</span></p>
                                                                        <p className=' pb-[2px] text-lightCreem text-base font-normal'>Current Balance: <span className='font-bold text-lightBlack'>$68,187</span></p>
                                                                </div>
                                                                <div className='flex justify-center'>
                                                                        <img src={grafImg1} alt="grafImg1" />
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="slide">
                                                <div className='w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] p-[15px]'>
                                                        <div className='flex items-center gap-[19px]'>
                                                                <div>
                                                                        <div className=' flex items-center gap-[10px] pb-[10px]'>
                                                                                <img src={personImg2} alt="personImg" />
                                                                                <p className=' font-bold text-xl'>Murray</p>
                                                                        </div>
                                                                        <p className=' pb-[2px] text-lightCreem text-base font-normal'>Profit: <span className='font-bold text-lightBlack'>$35,499</span></p>
                                                                        <p className=' pb-[2px] text-lightCreem text-base font-normal'>Current Balance: <span className='font-bold text-lightBlack'>$68,187</span></p>
                                                                </div>
                                                                <div className='flex justify-center'>
                                                                        <img src={grafImg2} alt="grafImg1" />
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="slide">
                                                <div className='w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] p-[15px]'>
                                                        <div className='flex items-center gap-[19px]'>
                                                                <div>
                                                                        <div className=' flex items-center gap-[10px] pb-[10px]'>
                                                                                <img src={personImg3} alt="personImg" />
                                                                                <p className=' font-bold text-xl'>Felicia</p>
                                                                        </div>
                                                                        <p className=' pb-[2px] text-lightCreem text-base font-normal'>Profit: <span className='font-bold text-lightBlack'>$35,499</span></p>
                                                                        <p className=' pb-[2px] text-lightCreem text-base font-normal'>Current Balance: <span className='font-bold text-lightBlack'>$68,187</span></p>
                                                                </div>
                                                                <div className='flex justify-center'>
                                                                        <img src={grafImg3} alt="grafImg1" />
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="slide">
                                                <div className='w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] p-[15px]'>
                                                        <div className='flex items-center gap-[19px]'>
                                                                <div>
                                                                        <div className=' flex items-center gap-[10px] pb-[10px]'>
                                                                                <img src={personImg1} alt="personImg" />
                                                                                <p className=' font-bold text-xl'>Jerome</p>
                                                                        </div>
                                                                        <p className=' pb-[2px] text-lightCreem text-base font-normal'>Profit: <span className='font-bold text-lightBlack'>$35,499</span></p>
                                                                        <p className=' pb-[2px] text-lightCreem text-base font-normal'>Current Balance: <span className='font-bold text-lightBlack'>$68,187</span></p>
                                                                </div>
                                                                <div className='flex justify-center'>
                                                                        <img src={grafImg1} alt="grafImg1" />
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="slide">
                                                <div className='w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] p-[15px]'>
                                                        <div className='flex items-center gap-[19px]'>
                                                                <div>
                                                                        <div className=' flex items-center gap-[10px] pb-[10px]'>
                                                                                <img src={personImg2} alt="personImg" />
                                                                                <p className=' font-bold text-xl'>Murray</p>
                                                                        </div>
                                                                        <p className=' pb-[2px] text-lightCreem text-base font-normal'>Profit: <span className='font-bold text-lightBlack'>$35,499</span></p>
                                                                        <p className=' pb-[2px] text-lightCreem text-base font-normal'>Current Balance: <span className='font-bold text-lightBlack'>$68,187</span></p>
                                                                </div>
                                                                <div className='flex justify-center'>
                                                                        <img src={grafImg2} alt="grafImg1" />
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="slide">
                                                <div className='w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] p-[15px]'>
                                                        <div className='flex items-center gap-[19px]'>
                                                                <div>
                                                                        <div className=' flex items-center gap-[10px] pb-[10px]'>
                                                                                <img src={personImg3} alt="personImg" />
                                                                                <p className=' font-bold text-xl'>Felicia</p>
                                                                        </div>
                                                                        <p className=' pb-[2px] text-lightCreem text-base font-normal'>Profit: <span className='font-bold text-lightBlack'>$35,499</span></p>
                                                                        <p className=' pb-[2px] text-lightCreem text-base font-normal'>Current Balance: <span className='font-bold text-lightBlack'>$68,187</span></p>
                                                                </div>
                                                                <div className='flex justify-center'>
                                                                        <img src={grafImg3} alt="grafImg1" />
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="slide">
                                                <div className='w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] p-[15px]'>
                                                        <div className='flex items-center gap-[19px]'>
                                                                <div>
                                                                        <div className=' flex items-center gap-[10px] pb-[10px]'>
                                                                                <img src={personImg1} alt="personImg" />
                                                                                <p className=' font-bold text-xl'>Jerome</p>
                                                                        </div>
                                                                        <p className=' pb-[2px] text-lightCreem text-base font-normal'>Profit: <span className='font-bold text-lightBlack'>$35,499</span></p>
                                                                        <p className=' pb-[2px] text-lightCreem text-base font-normal'>Current Balance: <span className='font-bold text-lightBlack'>$68,187</span></p>
                                                                </div>
                                                                <div className='flex justify-center'>
                                                                        <img src={grafImg1} alt="grafImg1" />
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="slide">
                                                <div className='w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] p-[15px]'>
                                                        <div className='flex items-center gap-[19px]'>
                                                                <div>
                                                                        <div className=' flex items-center gap-[10px] pb-[10px]'>
                                                                                <img src={personImg2} alt="personImg" />
                                                                                <p className=' font-bold text-xl'>Murray</p>
                                                                        </div>
                                                                        <p className=' pb-[2px] text-lightCreem text-base font-normal'>Profit: <span className='font-bold text-lightBlack'>$35,499</span></p>
                                                                        <p className=' pb-[2px] text-lightCreem text-base font-normal'>Current Balance: <span className='font-bold text-lightBlack'>$68,187</span></p>
                                                                </div>
                                                                <div className='flex justify-center'>
                                                                        <img src={grafImg2} alt="grafImg1" />
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div class="slide">
                                                <div className='w-[355px] h-[140px] border border-solid border-lightPink rounded-[15px] p-[15px]'>
                                                        <div className='flex items-center gap-[19px]'>
                                                                <div>
                                                                        <div className=' flex items-center gap-[10px] pb-[10px]'>
                                                                                <img src={personImg3} alt="personImg" />
                                                                                <p className=' font-bold text-xl'>Felicia</p>
                                                                        </div>
                                                                        <p className=' pb-[2px] text-lightCreem text-base font-normal'>Profit: <span className='font-bold text-lightBlack'>$35,499</span></p>
                                                                        <p className=' pb-[2px] text-lightCreem text-base font-normal'>Current Balance: <span className='font-bold text-lightBlack'>$68,187</span></p>
                                                                </div>
                                                                <div className='flex justify-center'>
                                                                        <img src={grafImg3} alt="grafImg1" />
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <img className=' absolute left-0 top-0 w-[70px] md:w-[247px] h-[140px] md:h-[161px]' src={shadowElipsLeft} alt="shadowElipsLeft" />
                        <img className=' absolute right-0 top-0 w-[70px] md:w-[247px] h-[140px] md:h-[161px]' src={shadowElipsRight} alt="shadowElipsRight" />
                </div>
        )
}

export default Slidersection
