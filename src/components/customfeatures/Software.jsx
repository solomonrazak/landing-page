import React from "react";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

const Software = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-5 p-8">
      <div>
        <h1 className="text-white md:text-[25px]">
          Frontend & Backend development
        </h1>
        <p className="md:text-[18px] text-[13px] leading-6 md:leading-8 mt-4 text-white mb-5">
          Our frontend and backend software developers have worked on and
          successfully delivered custom web applications of different
          complexity.
        </p>
        <div className="flex items-center gap-4 md:gap-20 mb-6">
          <div className="flex flex-col mt-5 gap-3">
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-500" />
              <p className="text-[14px] md:text-[20px] text-white">
              integration with 3rd parties systems
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-500" />
              <p className=" text-[14px] md:text-[20px] text-white">
              get, store and analyze big sets of data
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-500" />
              <p className=" text-[14px] md:text-[20px] text-white">
              ensure the security of sessions, authentication, and data
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-3">
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-500" />
              <p className=" text-[14px] md:text-[20px] text-white">
              ensure pixel-perfect accuracy
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-500" />
              <p className=" text-[14px] md:text-[20px] text-white">
              dont compromise performance with animations
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-500" />
              <p className=" text-[14px] md:text-[20px] text-white">
              build solid scalable architecture
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/images/soft.webp"
          width={700}
          height={600}
          priority={true}
          alt=""
        />
      </div>
    </div>
  );
};

export default Software;
