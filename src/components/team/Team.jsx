import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <div className=" mt-20 mx-2 md:mx-8">
      <div className="flex flex-col text-white gap-8 p-10">
        <h1 className="text-start md:mb-10 md:text-center text-2xl md:text-5xl ">
          About <span className="text-blue-400">Super Simple</span>
        </h1>
        <div className="grid grid-cols-3 grid-rows-2 md:grid-cols-6 md:grid-rows-1 gap-8 md:gap-3">
          <div className="flex flex-col font-medium">
            <h1 className="text-[22px]">98%</h1>
            <p>Satisfaction rate</p>
          </div>
          <div className="flex flex-col font-medium">
            <h1 className="text-[22px]">200+</h1>
            <p>Successful projects</p>
          </div>
          <div className="flex flex-col font-medium">
            <h1 className="text-[22px]">25</h1>
            <p>Countries Connected</p>
          </div>
          <div className="flex flex-col font-medium">
            <h1 className="text-[22px]">70%</h1>
            <p>Senior Specialist</p>
          </div>
          <div className="flex flex-col font-medium">
            <h1 className="text-[22px]">3</h1>
            <p>Years Client engagement</p>
          </div>
          <div className="flex flex-col font-medium">
            <h1 className="text-[22px]">5+</h1>
            <p>Years on the market</p>
          </div>
        </div>
      </div>
      <div className="bg-black text-white px-10 py-8">
        <div>
          <h1 className="text-2xl font-medium mb-14 md:text-[3.5rem]">
            <span className="text-blue-600">Who</span> we are
          </h1>
          <div className="leading-8 md:leading-10 text-slate-300 text-[16px] md:text-[20px]">
            <p>
              Super Simple, a software development company, delivers IT
              solutions and services to established companies that need custom
              software for further business growth. With a deep understanding of
              modern technologies, transparent processes, and strong expertise
              in business domains, we implement comprehensive projects and
              deliver high-end web mobile, and IoT solutions.
            </p>
          </div>
        </div>
        <div className="mt-7 text-slate-300">
          <h1 className="font-bold text-white text-lg">Our Cultural Code</h1>
          <p className=" md:text-[20px] mt-2 text-[16px]">Be transparent</p>
          <p className=" md:text-[20px] mt-2 text-[16px]">
            Focus on the Business value delivery
          </p>
          <p className=" md:text-[20px] mt-2 text-[16px] mb-14">
            Teamwork and coorperation
          </p>
          <div className="w-full flex flex-col md:flex-row md:justify-center mt-5 gap-5">
            {/* <Image
              src="/images/build.jpeg"
              width={500}
              height={1000}
              objectFit="cover"
              alt=""
            /> */}
            <div className=" md:block md:w-[500px]  bg-slate-900 flex flex-col justify-center items-center text-white p-8 space-y-8">
              <h1 className="text-4xl text-center">Headquarters</h1>
              <div>
                <p className="flex flex-col text-center text-xl">
                  <span>Near Sharda hospital</span>
                  <span>Knowledge park III</span>
                  <span>Greater Noida</span>
                </p>
              </div>
              <div>
                <p className="flex flex-col text-center text-xl">
                  <span>NCR Region</span>
                  <span>Delhi, India</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
