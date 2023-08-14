import React from 'react'


import { barista, roundlogo  } from '../assets';
import styles from '../style';
import Button from './Button';

const Hero = () => (
  <section id="home" className={`relative flex flex-col ${styles.paddingY}`}>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-0 relative`}>
      <img
        src={barista}
        alt="coffee barista"
        className="object-cover w-full h-[580px] md:h-full relative z-[5] object-fill "
      />
      <div className="absolute bg-gradient-to-r from-black to-gray-800/30 z-[7] w-[100%] h-[100%]" />
    </div>

    <div className=" z-20 absolute bottom-[15%] sm:bottom-[40%] left-0 right-0 ">
      <div className="lg:block hidden">
        <div className="flex justify-center items-center">
          <h1 className=" font-poppins font-bold capitalize text-white mb-5 text-[3rem]">
            The coffee roasters
          </h1>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:ml-3 justify-center items-center ">
        <div className="mb-5 sm:mb-0  w-[80px] h-[80px] flex justify-center items-center rounded-full bg-stone-100/60">
          <img
            src={roundlogo}
            alt="shop logo"
            className="w-[50px] h-[50px] animate-[spin_3s_linear_infinite] md:animate-none "
          />
        </div>
       
        <div className="bg-yellow-900/80 sm:ml-3 px-5 py-5 rounded-[6px] max-w-[400px]">
          <p className="font-poppins text-center font-normal text-white leading-[32px] text-[23px]">
            We source our coffee seasonally,
            <br className="sm:hidden block " /> from farmers who care,
            <br className="sm:hidden block " /> and roast to highlight
            <br className="sm:hidden block " /> what makes them special.
          </p>
        </div>
      </div>

      <div id="features" className=" relative sm:top-20 sm:flex hidden justify-center items-center flex ">
        <a href="#features" className="cursor-pointer">
          <Button />
        </a>
      </div>
    </div>
  </section>
);


export default Hero