import React from 'react';
import Image from 'next/image';

const Team = () => {
  return (
    <div className=" mt-10">
        <div className="flex flex-col text-white gap-8 p-10">
            <h1 className="text-start md:text-center text-[2rem] md:text-[3rem]">About <span className="text-blue-400">Super Simple</span></h1>
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
            <h1 className="text-2xl font-medium mb-9 md:text-[3.5rem]"><span className="text-blue-600">Who</span> we are</h1>
            <div className="leading-8 md:leading-10 text-slate-700 text-[16px] md:text-[20px]">
            <p>Super Simple, a software development company, delivers IT solutions and services to established companies that need
            custom software for further business growth. With a deep understanding of modern technologies, transparent
            processes, and strong expertise in business domains, we implement comprehensive projects and deliver high-end web
            mobile, and IoT solutions.</p>
            </div>
            </div>
            <div className="mt-7">
                <h1 className="font-bold text-black text-lg">Our Cultural Code</h1>
                <p className="text-slate-700 md:text-[20px] mt-2 text-[16px]">Be transparent</p>
                <p className="text-slate-700 md:text-[20px] mt-2 text-[16px]">Focus on the Business value delivery</p>
                <p className="text-slate-700 md:text-[20px] mt-2 text-[16px]">Teamwork and coorperation</p>
                <div className="w-full flex flex-col md:flex-row md:justify-between mt-5 gap-5">
                <Image src="/images/build.jpeg" width={500} height={1000} objectFit="cover" alt=""/>
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
        </div>
    </div>
  )
}

export default Team