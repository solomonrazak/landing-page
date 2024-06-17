import React from "react";
import FeatureCard from "./FeatureCard";

function Feature() {
  return (
    <div className="w-full py-20 relative overflow-x-hidden">
      <div
        className="absolute -top-60 -right-[28rem] h-full w-screen "
        style={{
          background:
            "radial-gradient(44.48% 44.48% at 50% 63%, rgba(191, 64, 191, 0.15) 0%, rgba(191, 64, 191, 0) 80%)",
        }}
      ></div>
      <div
        className="absolute bottom-0 -left-[30rem] h-full w-screen "
        style={{
          background:
            "radial-gradient(44.48% 44.48% at 50% 63%, rgba(191, 64, 191, 0.15) 0%, rgba(191, 64, 191, 0) 80%)",
        }}
      ></div>
      <div className="py-4 md:py-20 flex flex-col md:flex-row items-center justify-center gap-24 md:gap-14 ">
        <FeatureCard
          imgSrc="/images/web.png"
          heading="Web"
          paragraph="Content related to website development."
        />
        <FeatureCard
          imgSrc="/images/android.png"
          heading="Android"
          paragraph="Content related to Android development."
        />
        <FeatureCard
          imgSrc="/images/database.png"
          heading="SEO"
          paragraph="Content related to SEO strategies development."
        />
      </div>
    </div>
  );
}

export default Feature;
