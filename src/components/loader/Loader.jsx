"use client";
import React, { useEffect } from "react";
import { animationLoader } from "../../utils/loader/animation";
import "./loader.css";

function Loader() {
  useEffect(() => {
    animationLoader();
  }, []);
  return (
    <div className="main fixed top-0 w-full h-[100%] z-50 ">
      <div className="bg-[#0C1010] absolute top-0 w-full h-[100%]">
        {/* <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          src="https://cdn.pixabay.com/video/2021/03/08/67358-521707474_large.mp4"
        /> */}
      </div>
      <div
        id="loadingboxmain"
        className=" bg-[#0C1010] absolute w-full  h-[100%] rounded-lg shadow-xl"
      >
        <div className=" relative w-full h-full">
          <div className="pt-10 px-4 md:pt-20 md:px-20 text-6xl md:text-8xl">
            <h2 className="loader-head font-extrabold uppercase text-white ">
              Super Simple
            </h2>
            <h2 className="loader-head font-extrabold uppercase text-white  ">
              Make you work
            </h2>
            <h2 className="loader-head font-extrabold uppercase text-white  ">
              Simple
            </h2>
          </div>
          <div className="w-full h-10 bg-white absolute bottom-0 rounded-b-lg">
            <div className="loadingmain relative bg-[#090C0C] border-2 border-blue-400 w-0 h-full rounded-b-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
