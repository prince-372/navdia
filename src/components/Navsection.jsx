import React, { useState } from 'react'
import Commanbtn from './Commanbtn'
import nvidIa from '../assets/image/png/nvidIa.png'
import dashedElips from '../assets/image/png/dashedElips.png'
import heroDashedElips from '../assets/image/png/heroDashedElips.png'
import circleElips from '../assets/image/png/colorElips.png'
import heroElips from '../assets/image/png/heroCircleElips.png'

const Navsection = () => {
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [email, setEmail] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const [message, setMessage] = useState('');
        const [errors, setErrors] = useState({});

        const validateForm = () => {
                const errors = {};

                if (!firstName.trim()) {
                        errors.firstName = 'First Name is required';
                }
                if (!lastName.trim()) {
                        errors.lastName = 'Last Name is required';
                }
                if (!phoneNumber.trim()) {
                        errors.phoneNumber = 'Number is required';
                }
                if (!email.trim()) {
                        errors.email = 'Email is required';
                } else if (!/\S+@\S+\.\S+/.test(email)) {
                        errors.email = 'Email is invalid';
                }
                // Add more validation rules as needed...

                setErrors(errors);
                return Object.keys(errors).length === 0;
        };

        const handleSubmit = (e) => {
                e.preventDefault();
                if (validateForm()) {
                        // Form submission logic goes here
                        console.log('Form submitted successfully!');
                }
        };
        return (
                <div className='bg-[url(./assets/image/png/hero-bg-img.png)] bg-cover bg-center bg-no-repeat xl:min-h-[810px] min-h-screen relative mb-[25px] z-10 overflow-x-clip'>
                        <div className='bg-darkBlue pt-2 pb-[10px] overflow-hidden'>
                                <div className=' max-[1536px]:max-w-[1140px] container px-3 mx-auto'>
                                        <div className=' flex justify-between items-start '>
                                                <a className=' text-white font-Inter font-bold text-[32px] leading-[38.73px]' href="">AI STOCKS</a>
                                                <div className=" flex justify-center my-[10px]">
                                                        <Commanbtn text="Sign Up" />
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className='max-[1536px]:max-w-[1140px] container mx-auto px-3 pt-12 sm:pt-[83px]'>
                                <div className=' grid lg:grid-cols-2 gap-6 md:gap-[40px] '>
                                        <div>
                                                <img className='  pb-[21px]' src={nvidIa} alt="nvdIa" width={146} height={146} />
                                                <h1 className=' text-white font-Inter font-bold text-[42px] md:text-[52px] leading-[50px] md:leading-[62px] max-w-[499px] pb-4'>It’s the right time to buy Nvidia Stock</h1>
                                                <p className='text-lightWhite font-normal text-base max-w-[439px] pb-[35px]'>Its unbelievable market outperformance started at the beginning of 2023 and continues well into 2024, with the stock up more than 480%.</p>
                                                <div className=' flex items-center gap-[15px]'>
                                                        <button className=' bg-white p-[12px_30px] rounded-[58px] font-Inter font-semibold text-lightBlue duration-300 hover:text-white hover:bg-transparent border border-solid border-transparent hover:border hover:solid hover:border-white hover:scale-95 '>Invest Now</button>
                                                        <button className=' bg-transparent p-[12px_30px] rounded-[58px] font-Inter font-semibold text-white border border-s border-white duration-300 hover:bg-white hover:text-lightBlue hover:scale-95'>Know why?</button>
                                                </div>

                                        </div>
                                        <div className='bg-white rounded-[32px] flex flex-col justify-center lg:justify-start mx-auto lg:mx-0  l:w-[337px] sm:w-[493px] mt-[23px] p-4 md:p-[32px] border border-solid border-skyDarkBlue shadow-[0_11px_33.5px_0_#0000001F;]'>
                                                <h2 className='text-black font-Inter font-bold text-xl md:text-2xl pb-5'>Start Trading today!</h2>
                                                <form onSubmit={handleSubmit}>
                                                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className={`rounded-[30px] p-[13px_24px] bg-skyBlue w-full border border-solid border-skyDarkBlue placeholder:text-grey font-Inter mb-[14px] outline-none ${errors.firstName && 'border-red-500'}`} placeholder='First Name' />
                                                        {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
                                                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className={`rounded-[30px] p-[13px_24px] bg-skyBlue w-full border border-solid border-skyDarkBlue placeholder:text-grey font-Inter mb-[14px] outline-none ${errors.firstName && 'border-red-500'}`} placeholder='Last Name' />
                                                        {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
                                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`rounded-[30px] p-[13px_24px] bg-skyBlue w-full border border-solid border-skyDarkBlue placeholder:text-grey font-Inter mb-[14px] outline-none ${errors.firstName && 'border-red-500'}`} placeholder='E-mail' />
                                                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                                                        <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className={`rounded-[30px] p-[13px_24px] bg-skyBlue w-full border border-solid border-skyDarkBlue placeholder:text-grey font-Inter mb-[14px] outline-none ${errors.firstName && 'border-red-500'}`} placeholder='(316) 555-0116' />
                                                        {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
                                                        <textarea placeholder='Write a message...' name="Write a message..." id="" className='rounded-[30px] p-[13px_24px] bg-skyBlue w-full border border-solid border-skyDarkBlue placeholder:text-grey font-Inter h-[100px] mb-[14px] outline-none'></textarea>
                                                        <button type="submit" className='p-[16px_20px] flex justify-center items-center hover:bg-CommonGradientH duration-300 bg-CommonGradient w-full rounded-[38px] font-Inter font-semibold text-base text-white'>Get Started</button>
                                                </form>
                                        </div>
                                </div>
                        </div>
                        <img className='  anime-spine absolute top-[13%] lg:top-[18%] left-[-32%] lg:left-[-9%] w-[199px] h-[188px] -z-10 animate-spin' src={heroDashedElips} alt="dashedElips" />
                        <img className=' absolute top-[5%] lg:top-[7%] left-[-16px] -z-10' src={circleElips} alt="circleElips" />
                        <img className=' absolute top-[8%] right-[-34%] sm:right-[5%] lg:right-[27%] -z-10' src={heroElips} alt="heroElips" />
                        <img className=' absolute animate-spin top-[53%] right-[42%] -z-10' src={heroDashedElips} alt="heroDashedElips" />
                </div>
        )
}

export default Navsection
