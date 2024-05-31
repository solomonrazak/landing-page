import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import "../../app/fonts.css";

import Image from "next/image";
import "../../app/fonts.css";

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
  }, []);

  return (
    <>
      <video
        autoPlay
        loop
        muted
        data-aos="fade-in"
        className="absolute top-0 left-0 min-w-full h-screen object-cover z-0"
      >
        <source
          src="https://cdn.pixabay.com/video/2022/06/22/121799-724719792_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div
        data-aos="fade-up"
        className="relative bg-black w-screen pt-20 "
        style={{
          background:
            "radial-gradient(44.48% 44.48% at 10% 50%, rgba(176, 117, 248, 0.18) 0%, rgba(250, 117, 248, 0) 100%)",
          fontFamily: "adelle",
        }}
      >
        <div className="bg-black w-full h-screen opacity-70 absolute top-0 left-0"></div>
        <div className="flex flex-col justify-center items-center text-white relative z-10"></div>

        <div
          data-aos="fade-up"
          className="bg-black py-[7%] w-screen "
          style={{
            background:
              "radial-gradient(44.48% 44.48% at 10% 50%, rgba(176, 117, 248, 0.18) 0%, rgba(250, 117, 248, 0) 100%)",
          }}
        >
          <div
            className="flex flex-col justify-center items-center text-white "
            style={{
              background:
                "radial-gradient(44.48% 44.48% at 80% 50%, rgba(176, 117, 248, 0.05) 0%, rgba(250, 117, 248, 0) 80%)",
              opacity: "0.85",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[37px] md:text-[5rem] font-medium px-6 text-2xl md:text-center mt-6 md:mt-0 md:px-40 leading-snug"
            >
              <h1 className="">
                The Fastest Software <br />
                Service Ever Made
              </h1>
            </motion.div>
            <p className=" text-[19px] font-medium md:text-[22px] mt-5 md:text-center px-6">
              AI Powered Softwares for all companies
            </p>
            <p className=" text-[19px] md:text-center font-medium md:text-[22px] mt-2 px-6">
              Get your product ready in <span>less than a month</span>
            </p>
          </div>

          <div
            className="flex justify-center mt-7"
            style={{
              opacity: "0.9",
            }}
          >
            <button className="bg-gradient-to-r from-violet-400 to-pink-500 px-8 w-[80%] lg:w-[12rem] py-3 md:py-5 text-white md:text-xl rounded-md">
              Get Started
            </button>
          </div>
          <div
            className="flex justify-center mt-[30px] p-8 overflow-x-hidden md:mt-20"
            // data-aos="zoom-in"
          >
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
      </div>
    </>
  );
};

export default Header;
