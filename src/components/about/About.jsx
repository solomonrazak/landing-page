import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const About = () => {
  return (
    <div className="bg-white w-[37rem] text-black px-11 py-11 z-50 absolute top-[53px]">
      <div className="flex">
        {/* left-side */}
        <div className="w-[30%]">
          <p className="text-[12px] font-normal mb-6">ABOUT US</p>
          <div className="flex flex-col text-[13px] font-medium gap-3">
            <Link href="/Pages/team">
              <p className="cursor-pointer hover:text-red-500">Team</p>
            </Link>
            <p className="cursor-pointer hover:text-red-500">Testimonials</p>
            <Link href="/Pages/howWeWork">
              <p className="cursor-pointer hover:text-red-500">How we work</p>
            </Link>
            <p className="flex flex-col cursor-pointer hover:text-red-500">
              <span>Development Life</span>
              <span>Cycle</span>
            </p>
            <Link href="/Pages/pricing">
              <p className="cursor-pointer hover:text-red-500">Pricing</p>
            </Link>
            <p className="cursor-pointer hover:text-red-500">Careers</p>
            <p className="cursor-pointer hover:text-red-500">Contact Us</p>
          </div>
        </div>
        {/* verical line*/}
        <div className="w-[0.5px] h-[17rem] bg-gray-300 mx-5"></div>
        {/* right-side */}
        <div className="px-10">
          <p className="text-[12px] font-normal mb-6 tracking-wide">
            SUPER SIMPLE IN NUMBERS
          </p>
          <div className="flex gap-[5rem]">
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[14px] font-medium">200+</p>
                <p className="flex flex-col text-[13px] font-normal text-gray-600">
                  <span>Developed</span>
                  <span>Custom</span>
                  <span>solutions</span>
                </p>
              </div>
              <div>
                <p className="text-[14px] font-medium">98%</p>
                <p className="flex flex-col text-[13px] font-normal text-gray-600">
                  <span>Satisfaction</span>
                  <span>rate</span>
                </p>
              </div>
              <div>
                <p className="text-[14px] font-medium">3+</p>
                <p className="flex flex-col text-[13px] font-normal text-gray-600">
                  <span>Years Client</span>
                  <span>engagement</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[14px] font-medium">25+</p>
                <p className="flex flex-col text-[13px] font-normal text-gray-600">
                  <span>Countries,</span>
                  <span>including</span>
                  <span>the USA</span>
                </p>
              </div>
              <div>
                <p className="text-[14px] font-medium">10+ Years</p>
                <p className="text-[13px] font-normal text-gray-600">
                  On the market
                </p>
              </div>
              <div>
                <p className="text-[14px] font-medium">70%</p>
                <p className="flex flex-col text-[13px] font-normal text-gray-600">
                  <span>Senior</span>
                  <span>engineers</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="flex items-center font-medium text-[15px] my-4 pt-7 mt-9 text-red-500">
        About Super Simple
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default About;
