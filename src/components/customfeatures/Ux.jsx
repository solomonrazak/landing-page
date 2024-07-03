import React from "react";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";

const Ux = () => {
  return (
    <div className="flex flex-col md:flex-row p-8">
      <div>
        <h1 className="text-white md:text-[25px]">UI/UX design</h1>
        <p className="md:text-[18px] text-[13px] leading-6 md:leading-8 mt-4 text-white mb-5">
          We follow a thorough UI/UX design approach focused on the way people
          interact with websites to ensure the interfaces are not only
          user-friendly but also focused on targeted action.
        </p>
        <div className="flex items-center gap-4 md:gap-20 mb-6">
          <div className="flex flex-col mt-5 gap-3">
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-500" />
              <p className="text-[14px] md:text-[20px] text-white">
              research users and marketing
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-500" />
              <p className=" text-[14px] md:text-[20px] text-white">
              develop Information Architecture
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-500" />
              <p className=" text-[14px] md:text-[20px] text-white">
              make wireframes and clickable prototypes
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-5 gap-3">
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-500" />
              <p className=" text-[14px] md:text-[20px] text-white">
              design and animate the interface
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-500" />
              <p className=" text-[14px] md:text-[20px] text-white">
              create design systems
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="text-blue-500" />
              <p className=" text-[14px] md:text-[20px] text-white">
              analyze users experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/images/ui.webp"
          width={700}
          height={600}
          priority={true}
          alt=""
        />
      </div>
    </div>
  );
};

export default Ux;
