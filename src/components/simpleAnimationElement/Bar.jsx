import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Bar() {
  const blackRef = useRef();
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(blackRef.current, {
      width: "100%",
      scrollTrigger: {
        trigger: blackRef.current,
        start: "top 93%",
        end: "top 50% ",
        scrub: 1,
      },
    });
  });

  return (
    <div className="relative">
      <div className="w-52 md:w-80 h-8 absolute top-0 right-0 md:right-10 border-blue-900 border-2">
        <div className="bg-white w-10 rounded-full"></div>
        <div
          ref={blackRef}
          className=" h-[1.8rem] border-blue-900  text-sm md:text-baseabsolute top-0 left-0  md:w-40  bg-blue-900 text-center text-white py-1"
        >
          Super Simple
        </div>
      </div>
    </div>
  );
}

export default Bar;
