"use client";

import React, { useEffect } from "react";
import Header from "@/components/header/Header.jsx";
import Projectpage from "./Pages/Project/page.jsx";
import Services from "./Pages/services/servicespage.jsx";
import Testimonial from "@/components/testimonial/Testimonial.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import BookCall from "@/components/bookcall/BookCall.jsx";
import Loader from "@/components/loader/Loader.jsx";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <main className="overflow-x-hidden" style={{ fontFamily: "adelle" }}>
      <div className="body ">
        <Header />
        <Projectpage />
        <Services />
        <Testimonial />
      </div>
      <Loader />
    </main>
  );
}
