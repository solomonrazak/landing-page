"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
// import "./nav.css"
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [shownav, setShownav] = useState(false);

  // function to close nav on window resize
  useEffect(() => {
    const closeNavOnMax = () => {
      if (window.innerWidth > 768) {
        setShownav(false);
      }
    };
    window.addEventListener("resize", closeNavOnMax);
    return window.removeEventListener("resize", closeNavOnMax);
  }, []);

  return (
    <div className="w-screen">
      <div className="w-full px-[5%] flex justify-between bg-black text-white  opacity-90 top-0 py-5 items-center overflow-x-hidden fixed z-40 ">
        <div className="flex gap-9 items-center">
          <h1 className="text-[20px] tracking-widest">TECH BROS</h1>
          <div className="hidden md:block">
            <ul className="flex gap-8">
              <li>
                <Link href="">About</Link>
              </li>
              <li>
                <Link href="">Projects</Link>
              </li>
              <li>
                <Link href="">Services</Link>
              </li>
              <li>
                <Link href="">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center relative">
          {/* mobile view */}
          <div className="md:hidden">
            <button
              className="text-[30px] text-gray-300 mr-3 cursor-pointer"
              onClick={() => setShownav(!shownav)}
            >
              <IoMdMenu />
            </button>
          </div>
          <button className="bg-gradient-to-r from-violet-400 to-pink-500 py-2 px-5 rounded-md text-[18px] hidden md:block">
            Call to Book
          </button>
        </div>
      </div>

      {/* mobile nav */}

      {shownav && (
        <div className="md:hidden fixed z-50 bg-black top-16  w-full    flex flex-col justify-around py-2" data-aos="fade-up">
          <ul className="text-white text-center flex flex-col gap-2  text-2xl font-semibold">
            <li className="hover:bg-gradient-to-r from-violet-400 to-pink-500 tracking-wider mt-[-8px] py-2">
              <Link href="">About</Link>
            </li>
            <li className="hover:bg-gradient-to-r from-violet-400 to-pink-500 tracking-wider py-2">
              <Link href="">Projects</Link>
            </li>
            <li className="hover:bg-gradient-to-r from-violet-400 to-pink-500 tracking-wider py-2">
              <Link href="">Services</Link>
            </li>
            <li className="hover:bg-gradient-to-r from-violet-400 to-pink-500 tracking-wider py-2">
              <Link href="">Contact Us</Link>
            </li>
          </ul>
          <button className="bg-gradient-to-r mx-auto my-4 from-violet-400 font-semibold text-2xl to-pink-500 px-8  w-[80%] lg:w-[12rem] py-3 md:py-5 text-white md:text-xl rounded-md">
            Call to Book
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
