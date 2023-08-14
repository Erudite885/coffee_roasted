import React, { useState } from 'react'

import { close, hotCoffee, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className=" w-full flex py-2 justify-between items-center navbar">
      <header className="flex flex-row justify-center items-center">
        <img src={hotCoffee} alt="coffee" className="w-[70px] h-[70px]" />
        <h1 className="text-white uppercase font-semibold font-poppins text-[14px] sm:text-[20px]">
          the <br className="md:hidden block" />{" "}
          <span className="text-yellow-900 font-poppins font-bold text-[15px] sm:text-[22px]">
            coffee
          </span>
          <br className="sm:hidden block" /> roasters
        </h1>
      </header>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } `}
          >
            <a href={`#${nav.id}`}> {nav.title} </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[35px] h-[30px] object-contain mt-3"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-gradient-to-r from-amber-900 to-black absolute top-20 right-0 mx-4 my-2 min-w-[240px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[18px] text-white ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                } `}
              >
                <a href={`#${nav.id}`}> {nav.title} </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}



export default Navbar