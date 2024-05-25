import React from 'react'
import investCard1 from '../assets/image/png/investCardImg1.png'
import investCard2 from '../assets/image/png/investCardImg2.png'
import investCard3 from '../assets/image/png/investCardImg3.png'

const Investsection = () => {
        const Items = [
                {
                        id: 1,
                        para: 'Nvidia stock shows exceptional technical strength and boasts a best-possible score of 99 on both its Composite Rating and EPS Rating. Its Relative Strength Rating of 98 also shows that its outperforming.',
                        img: investCard1
                },
                {
                        id: 2,
                        para: 'Patient Capital Management, a value investing firm, released its “Patient Capital Opportunity Equity Strategy” first quarter 2024 investor letter. It featured stocks like NVIDIA Corporation (NASDAQ:NVDA) in its Q1 2024 investor letter.',
                        img: investCard2
                },
                {
                        id: 3,
                        para: 'SoftBank will reportedly invest nearly $1 billion in AI push, tapping Nvidia’s chips',
                        img: investCard3,


                },

        ]


        return (
                <div className='pt-[136px]'>
                        <div className=' container mx-auto px-3 '>
                                <h2 className=' text-center pb-[60px] font-Inter font-bold text-[44px] leading-[57px]'>Why Invest in Nvidia Stock</h2>
                                <div className=' grid grid-cols-3 gap-6 '>
                                        {
                                                Items.map((items, index) => (
                                                        <div key={index} className=' mx-auto bg-skyWhit border border-solid border-skyDarkBlue w-[364px] h-[356px] rounded-[12px] p-[24px_16px_32px_21px]'>
                                                            <p className={`${index===2 ? "!text-2xl":"" } font-Inter font-normal text-xl text-black2 italic`} >{items.para} </p>                                                            
                                                                <div className=''><img src={items.img} alt="images" />  </div>                                                          
                                                        </div>
                                                ))
                                        }
                                </div>
                        </div>
                </div>
        )
}

export default Investsection

