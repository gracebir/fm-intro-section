/** @format */

import React from "react";
import HeroMob from "../assets/images/image-hero-mobile.png";
import HeroDesk from "../assets/images/image-hero-desktop.png";
import audiophile from "../assets/images/client-audiophile.svg";
import databiz from "../assets/images/client-databiz.svg";
import maker from "../assets/images/client-maker.svg";
import meet from "../assets/images/client-meet.svg";

const Hero = () => {
    return (
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-8 border lg:py-20 py-10'>
            <div className='order-2 lg:order-1 py-0 px-6 lg:px-0 flex flex-col justify-between gap-10 lg:gap-0'>
                <div className='flex flex-col items-center lg:gap-16 gap-6 lg:mt-40 mt-0 lg:items-start'>
                    <h1 className='text-3xl lg:text-[6.8rem] leading-[.9] font-bold'>
                        Make remote work
                    </h1>
                    <div className='lg:w-[70%] w-full flex flex-col lg:gap-16 gap-4 lg:items-start items-center'>
                        <p className='text-medium-gray lg:text-xl text-base text-center lg:text-start lg:leading-9 leading-6'>
                            Get your team in sync, no matter your location.
                            Streamline processes, create team rituals, and watch
                            productivity soar.
                        </p>
                        <button className='text-almost-white hover:text-almost-black bg-almost-black hover:bg-almost-white border px-6 py-4 lg:px-8 lg:py-5 font-bold lg:text-lg text-base rounded-2xl border-almost-black'>
                            Learn more
                        </button>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <img src={databiz} alt='databix' />
                    <img src={audiophile} alt='audiophile' />
                    <img src={meet} alt='meet' />
                    <img src={maker} alt='maker' />
                </div>
            </div>
            <div className='w-full lg:h-[80vh] h-[40vh] order-1 lg:order-2'>
                <img
                    className='hidden lg:block h-full w-full object-contain'
                    src={HeroDesk}
                    alt='mob-hero'
                />
                <img
                    className='block lg:hidden'
                    src={HeroMob}
                    alt='hero-desk'
                />
            </div>
        </div>
    );
};

export default Hero;
