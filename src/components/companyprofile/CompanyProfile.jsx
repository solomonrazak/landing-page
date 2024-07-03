import React from "react";
import { FaCheck } from "react-icons/fa6";
import { PiFilePdfDuotone } from "react-icons/pi";

const CompanyProfile = () => {
  return (
    <div className="bg-slate-950 flex flex-col md:flex-row md:justify-between md:items-center p-16">
      <div className="flex flex-col gap-6 pb-5">
        <h1 className="md:text-3xl text-2xl font-medium text-white">
          Download <span className="text-blue-500">Company Profile</span>
        </h1>
        <p className="text-white">
          All information about the company in one PDF-document
        </p>
        <div className="flex font-medium items-center gap-2 md:text-[18px]">
          <FaCheck className="text-blue-500" />
          <p className="text-white">services</p>
        </div>
        <div className="flex font-medium items-center gap-2 md:text-[18px]">
          <FaCheck className="text-blue-500" />
          <p className="text-white">how we work</p>
        </div>
        <div className="flex font-medium items-center gap-2 md:text-[18px]">
          <FaCheck className="text-blue-500" />
          <p className="text-white">projects</p>
        </div>
      </div>
      <div className="mt-8">
        <a
          href="/files/webflow.pdf"
          download="webflow.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center w-full md:w-[20rem] bg-red-500 justify-center py-3 gap-2 font-medium text-white hover:text-red-500 hover:bg-transparent hover:border hover:border-red-500">
            <PiFilePdfDuotone className="text-3xl" />
            Download
          </button>
        </a>
      </div>
    </div>
  );
};

export default CompanyProfile;
