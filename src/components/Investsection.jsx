import React from 'react'
import investCard1 from '../assets/image/png/investCardImg1.png'
import investCard2 from '../assets/image/png/investCardImg2.png'
import investCard3 from '../assets/image/png/investCardImg3.png'
import Commanbtn from './Commanbtn'

const Investsection = () => {
        const Items = [
                {
                        id: 1,
                        para: ( <> <span className='font-bold'> Nvidia stock</span> shows exceptional technical strength and boasts a best-possible score of 99 on both its Composite Rating and EPS Rating. Its Relative Strength Rating of 98 also shows that its outperforming.
                       </> ),
                        img: investCard1
                },
                {
                        id: 2,
                        para:( <>'Patient Capital Management, a value investing firm, released its “Patient Capital Opportunity Equity Strategy” first quarter 2024 investor letter. It featured stocks like <span className=' font-bold'>NVIDIA</span> Corporation (NASDAQ:NVDA) in its Q1 2024 investor letter.'</>),
                        img: investCard2
                },
                {
                        id: 3,
                        para: 'SoftBank will reportedly invest nearly $1 billion in AI push, tapping Nvidia’s chips',
                        img: investCard3,
                },

        ]


        return (
                <div className=' pt-[48px] md:pt-[80px] lg:pt-[136px]'>
                        <div className='max-[1536px]:max-w-[1140px] container mx-auto px-3 '>
                                <h2 className=' text-center pb-4 sm:pb-[60px] font-Inter font-bold text-[38px] md:text-[44px] leading-[46px] md:leading-[57px]'>Why Invest in Nvidia Stock</h2>
                                <div className=' flex flex-wrap flex-row items-center justify-center -mx-3   '>
                                        {
                                                Items.map((items, index) => (
                                                        <div className=' px-3 lg:w-1/3 md:w-1/2  sm:w-[70%]'>
                                                                <div key={index} className='bg-skyWhit border max-md:max-w-[364px] mx-auto min-h-[320px] md:min-h-[356px] border-solid border-lightSky duration-300 hover:border hover:border-solid hover:border-skyDarkBlue hover:shadow-[0_6px_16.9px_0_#3861C44D] cursor-pointer h-full rounded-[12px] p-[24px_16px_32px_21px] mb-6 lg:mb-[60px] flex justify-between flex-col'>
                                                                        <p className={`${index === 2 ? "md:!text-2xl text-xl " : ""} font-Inter font-normal text-lg md:text-xl text-black2 italic`} >{items.para} </p>
                                                                        <div className=''><img src={items.img} alt="images" /> </div>
                                                                </div>
                                                        </div>
                                                ))
                                        }
                                </div>
                                <div className=' flex items-center flex-col lg:flex-row justify-center gap-[22px] pt-4 lg:pt-0'>
                                        <p className='font-Inter font-normal text-xl text-black2'>and a 100s of reasons</p>
                                        <Commanbtn className="w-[146px] h-[48px]" text="Invest Now" />
                                </div>
                        </div>
                </div>
        )
}

export default Investsection

