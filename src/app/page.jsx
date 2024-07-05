"use client";

import React, { useEffect } from "react";
import Header from "@/components/header/Header.jsx";
import Projectpage from "./Pages/Project/page.jsx";
import Testimonial from "@/components/testimonial/Testimonial.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import BookCall from "@/components/bookcall/BookCall.jsx";
import Loader from "@/components/loader/Loader.jsx";
import Bar from "@/components/simpleAnimationElement/Bar.jsx";
import Feature from "@/components/feature/Feature.jsx";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <main
      className="overflow-x-hidden bg-[#090a0b]"
      style={{ fontFamily: "adelle" }}
    >
      <div className="body ">
        <Header />
        <Projectpage />
        <Feature />
        <Testimonial />
      </div>
      <Loader />
    </main>
  );
}
