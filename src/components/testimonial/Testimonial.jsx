"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Testimonial() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [activeButton, setActiveButton] = useState(0); // Track active button index

  const testimonials = [
    {
      quote:
        "Our experience with 'SuperSimple' was amazing! They made our software dreams a reality with their friendly team and top-notch support. Highly recommend. ",
      name: "Shekar Kumar",
      role: "CEO and Manager",
      buttonName: "deal",
      imageName: "/images/profile.webp",
    },
    {
      quote:
        "I never knew software could be this simple! 'SuperSimple' nailed it with their user-friendly solutions. Big thanks to their team for the smooth experience.",
      name: "John Doe",
      role: "CTO",
      buttonName: "code",
      imageName: "/images/profile1.webp",
    },
    {
      quote:
        "If you need software that just works, go with 'SuperSimple'. They're like the friendly neighborhood tech geniuses you've always wanted. 10/10 recommend!",
      name: "Jane Doe",
      role: "COO",
      buttonName: "gem",
      imageName: "/images/profile2.webp",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setActiveButton((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white mx-10 lg:mx-40 md:my-10 my-10">
      <div className="flex-col">
        <div>
          <img
            src="/images/qoute.webp"
            className="w-20 object-scale-down"
            alt=""
          />
        </div>
        <p className="my-6 text-lg">What customers are saying…</p>
        <AnimatePresence>
          {testimonials.map(
            (testimonial, index) =>
              index === testimonialIndex && (
                <motion.p
                  key={index}
                  className="text-2xl lg:text-5xl font-bold testimonial-quote h-80 absolute left-10 mr-10 lg:left-40 lg:mr-36"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {testimonial.quote}
                </motion.p>
              )
          )}
        </AnimatePresence>
        <div className="mt-80 md:mt-60 lg:mt-80  flex flex-col md:flex-row justify-between">
          <div>
            <div className="flex flex-row gap-6 md:items-center md:border-r-2 md:pr-10">
              <div className="">
                <img
                  src={testimonials[testimonialIndex].imageName}
                  className="w-10 object-scale-down rounded-full"
                  alt=""
                />
              </div>

              <div>
                <p className="text-sm font-bold">
                  {testimonials[testimonialIndex].name}
                </p>
                <p className="text-sm">{testimonials[testimonialIndex].role}</p>
              </div>
            </div>
            <div className="my-6">
              <p>watch video</p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            {testimonials.map((testimonial, index) => (
              <div className="" key={index}>
                <button
                  className={`px-4 py-2 md:text-4xl font-semibold rounded-md border-2  border-gray-500 ${
                    index === activeButton ? "bg-gray-600" : ""
                  }`}
                  onClick={() => setActiveButton(index)}
                >
                  {testimonial.buttonName}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
