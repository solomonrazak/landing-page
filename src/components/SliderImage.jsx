"use client";
import React from "react";
import { motion } from "framer-motion";

const slides = [
  { imageUrl: "/images/razzy.webp" },
  { imageUrl: "/images/razzy.webp" },
  { imageUrl: "/images/razzy.webp" },
  { imageUrl: "/images/razzy.webp" },
  { imageUrl: "/images/razzy.webp" },
];

const SliderImage = () => {
  const duplicatedSlides = [...slides, ...slides];
  return (
    <div
      className="relative h-[20rem] overflow-hidden md:py-12 bg-white mx-auto w-[30rem]"
      style={{ width: "100%" }}
    >
      <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r  before:filter after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l  after:filter "></div>
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className="flex items-center px-3 h-full justify-center">
              <img
                src={slide.imageUrl}
                alt={`Slide ${index + 1}`}
                className="h-[15rem] w-[30rem] object-contain"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SliderImage;
