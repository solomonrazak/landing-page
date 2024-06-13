"use client"
import React, { useState } from "react";
import Image from "next/image";
import SliderImage from "../SliderImage";
import Scrum from "../customfeatures/Scrum";
import Kanban from "../customfeatures/Kanban";

const Team = () => {
  const [activeTab, setActiveTab] = useState("scrum");

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "scrum":
        return <Scrum />;
      case "kanban":
        return <Kanban />;
      default:
        return <Scrum />;
    }
  };

  return (
    <div className=" mt-10">
      <div className="flex flex-col text-white gap-8 p-10">
        <h1 className="text-start md:text-center text-[2rem] md:text-[3rem]">
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
      <div className="bg-white text-black px-10 py-8">
        <div>
          <h1 className="text-2xl font-medium mb-9 md:text-[3.5rem]">
            <span className="text-blue-600">Who</span> we are
          </h1>
          <div className="leading-8 md:leading-10 text-slate-700 text-[16px] md:text-[20px]">
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
        <div className="mt-7">
          <h1 className="font-bold text-black text-lg">Our Cultural Code</h1>
          <p className="text-slate-700 md:text-[20px] mt-2 text-[16px]">
            Be transparent
          </p>
          <p className="text-slate-700 md:text-[20px] mt-2 text-[16px]">
            Focus on the Business value delivery
          </p>
          <p className="text-slate-700 md:text-[20px] mt-2 text-[16px]">
            Teamwork and coorperation
          </p>
          <div className="w-full flex flex-col md:flex-row md:justify-between mt-5 gap-5">
            <Image
              src="/images/build.jpeg"
              width={500}
              height={1000}
              objectFit="cover"
              alt=""
            />
            <div className=" md:block md:w-[500px] h-[400px] bg-slate-900 flex flex-col justify-center text-white p-8 space-y-8">
              <h1 className="text-4xl text-center">Headquarters</h1>
              <div>
                <p className="flex flex-col text-center text-xl">
                  <span>One Boston Place, Suite 2602</span>
                  <span>Boston, MA 02108,</span>
                  <span>United States</span>
                </p>
              </div>
              <div>
                <p className="flex flex-col text-center text-xl">
                  <span>Dev Center</span>
                  <span>Warsaw, Poland</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:my-5">
          <h1 className="text-center text-[25px] md:text-[3rem] mb-10">
            Management <span className="text-blue-600">Team</span>
          </h1>
          <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 w-full gap-5 mt-10">
            <div>
              <Image
                src="/images/razzy.webp"
                width={250}
                height={250}
                className="object-contain"
                priority={true}
                alt=""
              />
              <h1 className="text-center font-medium text-2xl mt-5 mb-3">
                Abhisek
              </h1>
              <p className="text-center">CEO</p>
            </div>
            <div>
              <Image
                src="/images/razzy.webp"
                width={250}
                height={250}
                className="object-contain"
                priority={true}
                alt=""
              />
              <h1 className="text-center font-medium text-2xl mt-5 mb-3">
                Abhisek
              </h1>
              <p className="text-center">CEO</p>
            </div>
            <div>
              <Image
                src="/images/razzy.webp"
                width={250}
                height={250}
                className="object-contain"
                priority={true}
                alt=""
              />
              <h1 className="text-center font-medium text-2xl mt-5 mb-3">
                Abhisek
              </h1>
              <p className="text-center">CEO</p>
            </div>
            <div>
              <Image
                src="/images/razzy.webp"
                width={250}
                height={250}
                className="object-contain"
                priority={true}
                alt=""
              />
              <h1 className="text-center font-medium text-2xl mt-5 mb-3">
                Abhisek 
              </h1>
              <p className="text-center">CEO</p>
            </div>
          </div>
        </div>
      </div>
      <SliderImage />
      <div className="flex flex-col md:flex-row bg-white py-20">
        <div className="w-full md:w-1/3 bg-slate-200 px-6 pt-10 pb-20">
          <h1 className="text-3xl md:text-5xl mb-5 md:flex md:flex-col gap-4">
           <span className="mr-2">Development</span><span className="text-blue-500">Process</span>
          </h1>
          <p className="md:text-[20px] text-gray-800 md:leading-9 ">
            Lets plan, develop and release your new startup or a business
            automation solution specifically built for your business. Get the
            best from your ideas.
          </p>
        </div>
        <div className="w-full md:w-2/3 md:p-10 p-6">
          <div className="flex ">
            <p
              className={`cursor-pointer pr-10 border-b-2 md:text-[25px] ${
                activeTab === "scrum" ? "border-blue-500 text-blue-500" : ""
              }`}
              onClick={() => setActiveTab("scrum")}
            >
              SCRUM
            </p>
            <p
              className={`cursor-pointer pr-10 pb-3 md:text-[25px] border-b-2 ${
                activeTab === "kanban" ? "border-blue-500 text-blue-500" : ""
              }`}
              onClick={() => setActiveTab("kanban")}
            >
              KANBAN
            </p>
          </div>
          <div>
            {renderActiveComponent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
