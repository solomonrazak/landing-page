"use client";
import React, { useRef, useEffect } from "react";
import "./priceCard.css";

function PriceCard({ label, price, description, features }) {
  const cardRef = useRef(null);
  const rippleRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const ripple = rippleRef.current;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
    };

    const handleMouseEnter = () => {
      card.classList.add("glow");
      ripple.style.opacity = 1;
    };

    const handleMouseLeave = () => {
      card.classList.remove("glow");
      ripple.style.opacity = 0;
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative text-white border-2 px-4 w-72 rounded-xl m-4 overflow-hidden transition-all duration-300"
    >
      <div
        ref={rippleRef}
        className="absolute bg-blue-500 rounded-full pointer-events-none ripple-effect transition-opacity duration-300"
      ></div>
      <p className="mt-3 text-slate-400">{label}</p>
      <p className="my-6 text-3xl font-medium">
        {price}
        <span className="text-xs text-slate-500">/month</span>
      </p>
      <p className="text-sm my-4">{description}</p>
      <div className="border-2 rounded-md text-center py-1">Start</div>
      <p className="text-xs text-center text-slate-500 my-6">FEATURES</p>
      <div className="mb-4">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-3 my-2 text-slate-400">
            <div className="text-white text-sm">&#x2714;</div>
            <p className="text-sm">{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PriceCard;
