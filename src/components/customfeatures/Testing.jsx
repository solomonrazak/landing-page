import React from "react";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

const Testing = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-5 p-8">
      <div>
        <h1 className="text-white md:text-[25px]">QA & Testing</h1>
        <p className="md:text-[18px] text-[13px] leading-6 md:leading-8 mt-4 text-white mb-5">
          Our QA pros join the web development team from day one to build a
          professional and holistic approach to Quality Assurance and ensure
          that the website works perfectly across all devices and browsers at any load and environment.
        </p>
        <div className="flex items-center gap-4 md:gap-20 mb-6">
          <div className="flex flex-col mt-5 gap-3">
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-500" />
              <p className="text-[14px] md:text-[20px] text-white">
              quickly improve the product
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-500" />
              <p className=" text-[14px] md:text-[20px] text-white">
              ensure the process transparency
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-500" />
              <p className=" text-[14px] md:text-[20px] text-white">
              track the development progress
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-3">
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-500" />
              <p className=" text-[14px] md:text-[20px] text-white">
              automate repetitive tasks
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-500" />
              <p className=" text-[14px] md:text-[20px] text-white">
              minimize risks of unmet expectations
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-500" />
              <p className=" text-[14px] md:text-[20px] text-white">
              reduce time-to-market
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:mt-5">
        <Image
          src="/images/qa.webp"
          width={700}
          height={700}
          priority={true}
          alt=""
        />
      </div>
    </div>
  );
};

export default Testing;
