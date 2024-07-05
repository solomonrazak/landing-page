import React from "react";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

const Discovery = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-5 p-8 md:px-20">
        <div>
      <h1 className="text-white md:text-[25px]">Discovery</h1>
      <p className="md:text-[18px] text-[13px] leading-6 md:leading-8 mt-4 text-white mb-5">
        Our R&D and business analyst team study your business and ideas in
        detail to help you reduce market and technical risks across the entire
        software development.
      </p>
      <div className="flex items-center gap-4 md:gap-20 mb-6">
      <div className="flex flex-col mt-5 gap-3">
        <div className="flex items-center gap-2">
          <FaCheck className="text-blue-500" />
          <p className="text-[14px] md:text-[20px] text-white">
            validate business idea
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FaCheck className="text-blue-500" />
          <p className=" text-[14px] md:text-[20px] text-white">
          choose the right technology
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FaCheck className="text-blue-500" />
          <p className=" text-[14px] md:text-[20px] text-white">
          get exact project estimation
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-5 gap-3">
        <div className="flex items-center gap-2">
          <FaCheck className="text-blue-500" />
          <p className=" text-[14px] md:text-[20px] text-white">
          create solution vision
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FaCheck className="text-blue-500" />
          <p className=" text-[14px] md:text-[20px] text-white">
          plan the product release
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FaCheck className="text-blue-500" />
          <p className=" text-[14px] md:text-[20px] text-white">
          avoid unplanned costs
          </p>
        </div>
      </div>
      </div>
      </div>
      <div>
      <Image
        src="/images/discovery.webp"
        width={700}
        height={600}
        priority={true}
        alt=""
      />
      </div>
    </div>
  );
};

export default Discovery;
