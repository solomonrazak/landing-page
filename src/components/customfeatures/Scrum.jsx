import Image from 'next/image';
import React from 'react';
import { FaCheck } from "react-icons/fa6";


const Scrum = () => {
  return (
    <div className="">
      <p className="md:text-[20px] text-[15px] leading-6 md:leading-8 mt-4">Scrum is a flexible, holistic product development strategy where a development team works as a 
        unit to reach a common goal.</p>
        <div className="flex flex-col md:flex-row md:gap-20 mt-5">
          <div className="flex items-center gap-2">
            <FaCheck className="text-blue-500"/>
            <p className="text-slate-800 text-[14px] md:text-[20px]">fast Adaptability</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-blue-500"/>
            <p className="text-slate-800 text-[14px] md:text-[20px]">better Collaboration</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-20 mb-5">
          <div className="flex items-center gap-2">
            <FaCheck className="text-blue-500"/>
            <p className="text-slate-800 text-[14px] md:text-[20px]">regular feedback</p>
          </div>
          <div className="flex items-center gap-2">
            <FaCheck className="text-blue-500"/>
            <p className="text-slate-800 text-[14px] md:text-[20px]">easy estimation</p>
          </div>
        </div>
        <Image src="/images/scrum.webp" width={900} height={300} priority={true} alt=""/>
    </div>
  )
}

export default Scrum;