import React from "react";
import {
  FaTools,
  FaProjectDiagram,
  FaLaptopCode,
  FaHandsHelping,
} from "react-icons/fa";

const HowWeWork = () => {
  const sections = [
    {
      title: "Tailored Solutions",
      icon: <FaTools size={40} className="text-slate-400 mb-4" />,
      content:
        "We don't believe in one-size-fits-all. Our team works closely with each client to understand their unique needs and develop custom software solutions that address their specific challenges.",
    },
    {
      title: "Agile Methodology",
      icon: <FaProjectDiagram size={40} className="text-slate-400 mb-4" />,
      content:
        "We follow an agile development process, with frequent iterations and client feedback, ensuring that the final product aligns perfectly with the client's vision.",
    },
    {
      title: "Cutting-Edge Technology",
      icon: <FaLaptopCode size={40} className="text-slate-400 mb-4" />,
      content:
        "We leverage the latest technologies and industry best practices to create innovative, scalable, and secure web applications that deliver exceptional user experiences.",
    },
    {
      title: "Comprehensive Support",
      icon: <FaHandsHelping size={40} className="text-slate-400 mb-4" />,
      content:
        "Our services extend beyond just development. We offer ongoing maintenance, updates, support to ensure that our clients' websites and applications remain reliable and up-to-date.",
    },
  ];

  return (
    <div className="min-h-screen  text-white pt-32 px-10 md:px-24">
      <h1 className="text-center text-4xl md:text-6xl font-medium mb-16 text-slate-200">
        Our Unique Approach and Services
      </h1>
      <div className="flex flex-col md:flex-row justify-between">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex-1 mx-4 mb-8 md:mb-0 transform hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg md:h-96">
              {section.icon}
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-slate-400">
                {section.title}
              </h2>
              <p className="text-base md:text-lg text-gray-300">
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
