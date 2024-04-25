"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Header = () => {
  const key = "nI4q8pGvBqtTV2l2qtnl_j2AKAr6LH9mHXNCl4pU1P4";
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/?client_id=${key}`
        );
        setImage(response.data[1].urls.regular);
      } catch (error) {
        console.log("Error in fetching image from unsplash", error);
      }
    };
    fetchImage();
  });

  return (
    <div
      className="bg-black py-[7%] w-screen pt-20  md:pt-44"
      style={{
        background:
          "radial-gradient(44.48% 44.48% at 50% 50%, rgba(250, 117, 248, 0.26) 0%, rgba(250, 117, 248, 0) 100%)",
      }}
    >
      <div className="flex flex-col justify-center items-center text-white ">
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Initial animation state
          animate={{ opacity: 1, y: 0 }} // Animation when component mounts
          transition={{ duration: 0.8, delay: 0.5 }} // Animation duration and delay
          className="text-[37px] md:text-[5rem] font-medium text-center md:px-40"
        >
          <h1>
            The Fastest Software <br className="" />
            Service Ever Made
          </h1>
        </motion.div>
        {/* <h1 className="text-[37px] md:text-[5rem] font-medium mt-[-5px] md:mt-[-30px] text-center">
          Service Ever Made
        </h1> */}
        <p className="text-[19px] font-medium md:text-[22px] mt-5 text-center px-6">
          AI Powered Softwares for all companies
        </p>
        <p className="text-[19px] text-center font-medium md:text-[22px] mt-2 px-6">
          Get your product ready in <span>less than a month</span>
        </p>
      </div>
      <div className="flex justify-center mt-7">
        <button className="bg-gradient-to-r from-violet-400 to-pink-500 px-8  w-[80%] lg:w-[12rem] py-3 md:py-5 text-white md:text-xl rounded-md">
          Get Started
        </button>
      </div>
      <div className="flex justify-center mt-[30px] p-8 overflow-x-hidden md:mt-20">
        {image && (
          <Image
            src="/images/project1.jpg"
            alt="unsplash-image"
            quality={100}
            width={1000}
            height={100}
            className="rounded-md object-cover"
            priority={true}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
