import React from "react";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
const Kanban = () => {
  return (
    <div>
      <p className="md:text-[20px] text-[15px] leading-6 md:leading-8 mt-4">
        Kanban is a way to manage the software development cycle, emphasizing
        continual delivery without overburdening the team. Kanban is invented to
        help teams work together more effectively.
      </p>
      <div className="flex flex-col md:flex-row mt-5 md:gap-20">
        <div className="flex items-center gap-2">
          <FaCheck className="text-blue-500" />
          <p className="text-slate-800 text-[14px] md:text-[20px]">
          improved workflow
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FaCheck className="text-blue-500" />
          <p className="text-slate-800 text-[14px] md:text-[20px]">
          no obsolete inventory
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mb-5 md:gap-20">
        <div className="flex items-center gap-2">
          <FaCheck className="text-blue-500" />
          <p className="text-slate-800 text-[14px] md:text-[20px]">
          less overproduction
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FaCheck className="text-blue-500" />
          <p className="text-slate-800 text-[14px] md:text-[20px]">
          better responsiveness
          </p>
        </div>
      </div>
      <Image
        src="/images/Kanban.webp"
        width={900}
        height={300}
        priority={true}
        alt=""
      />
    </div>
  );
};

export default Kanban;
