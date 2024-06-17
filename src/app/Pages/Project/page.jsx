"use client";
import { useEffect, useRef } from "react";
import "./projectspage.css";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function Projectpage() {
  const projectRef = useRef();
  const petRef = useRef();
  const bidRef = useRef();
  const leaseRef = useRef();
  const nickRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(projectRef.current, {
      scale: 1,
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top 10%",
        end: "top -200%",
        markers: true,
        scrub: 2,

        pin: true,
      },
    });

    tl.to(petRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: petRef.current,
        start: "top -20%",
        end: "top -30%",
        ease: "power1.out",
        scrub: 1,
      },
    });
    tl.to(bidRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: bidRef.current,
        start: "top -30%",
        end: "top -40%",
        ease: "power1.out",
        scrub: 1,
      },
    });
    tl.to(bidRef.current, {
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: bidRef.current,
        start: "top -100%",
        end: "top -110%",
        ease: "power1.out",
        scrub: 1,
      },
    });
    tl.to(leaseRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: leaseRef.current,
        start: "top -110%",
        end: "top -111%",
        ease: "power1.out",
        scrub: 1,
      },
    });
    tl.to(leaseRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: leaseRef.current,
        start: "top -170%",
        end: "top -180%",
        ease: "power1.out",
        scrub: 1,
      },
    });
    tl.to(nickRef.current, {
      opacity: 1,
      scrollTrigger: {
        trigger: nickRef.current,
        start: "top -170%",
        end: "top -180%",
        ease: "power1.out",
        scrub: 1,
      },
    });
  });

  return (
    <div
      ref={projectRef}
      id="project"
      className=" mt-10 sm:mx-40 md:mx-20 text-gray-200 md:mt-10 md:pb-[10rem]"
      // data-aos="fade-down"
    >
      <p className="md:text-center pr-20 mx-4 text-3xl font-bold lg:text-5xl pb-3">
        Projects
      </p>
      <p className="md:text-center mt-2 mx-4 text-lg lg:text-2xl md:mx-40 md:mb-[-30px]">
        Awesome Projects made by our developers
      </p>

      <div className="flex flex-col mx-4 md:pr-20 md:px-[5%] relative">
        <div
          ref={petRef}
          className="pet mt-20 flex flex-col md:flex-row md:justify-between md:gap-4 opacity-1 md:mr-20 "
        >
          <div
            className="absolute hidden md:block  -top-[10rem] -left-[20rem] w-screen h-screen"
            style={{
              background:
                "radial-gradient(44.48% 44.48% at 50% 63%, rgba(191, 64, 191, 0.15) 0%, rgba(191, 64, 191, 0) 80%)",
            }}
          ></div>

          <div className="md:w-1/2">
            <p className="text-2xl lg:text-4xl font-semibold">PetCare</p>
            <p className="my-8 text-lg lg:text-xl">
              Welcome to Pet Care, your premier destination for all things pets!
              From helpful care guides to heartwarming adoption stories.
              We&apos;re here to celebrate the joy and companionship that our
              furry friends bring.
            </p>
            <a
              href="https://petcare-tau.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gradient-to-r from-violet-400 to-pink-500 font-semibold  w-[40%] lg:w-[8rem] py-3 my-4 text-white md:text-sm rounded-md">
                Get Started
              </button>
            </a>
          </div>

          {/* <div className="relative" data-aos="zoom-in"> */}
          <div className="relative mr-4 border-2">
            <Image
              className="object-cover h-[12rem] md:h-[100%] lg:h-[100%] mx-auto"
              src="/images/Projectt.JPG"
              alt=""
              priority={true}
              width={500}
              height={500}
            />
            <div className="absolute -left-4 inset-0 bg-gradient-to-b from-transparent  to-black w-[105%] h-[105%]"></div>
          </div>
        </div>
        <div
          ref={bidRef}
          className="mt-20 md:mt-20 flex flex-col md:flex-row md:justify-between md:gap-4  absolute  opacity-0 md:pr-40"
        >
          <div className="md:w-1/2">
            <div
              className="absolute  hidden md:block  -top-[35rem] left-[20%] w-screen h-screen "
              style={{
                background:
                  "radial-gradient(44.48% 44.48% at 50% 63%, rgba(255, 255, 0, 0.15) 0%, rgba(255, 255, 0, 0) 80%)",
              }}
            ></div>
            <p className="text-2xl lg:text-4xl font-semibold">Bid-Bazar</p>
            <p className="my-8 text-lg lg:text-xl">
              A platform where buyers and sellers can congregate for the purpose
              of seamless bidding and selling across a wide spectrum of items.
            </p>
            <a
              href="https://bid-bazaar-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gradient-to-r from-violet-400 to-pink-500 font-semibold  w-[40%] lg:w-[8rem] py-3  text-white md:text-sm rounded-md">
                Get Started
              </button>
            </a>
          </div>

          <div className="mt-4 relative">
            <Image
              className="object-cover h-[12rem] md:h-[100%] lg:h-[140%] mx-auto"
              src="/images/Prabhat_Website.JPG"
              alt=""
              priority={true}
              width={500}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:h-[140%]"></div>
          </div>
        </div>
        <div
          ref={leaseRef}
          className="mt-20 md:mt-20 flex flex-col md:flex-row md:justify-between md:gap-4 absolute opacity-0 md:pr-40"
        >
          <div
            className="absolute -top-[30rem] -left-[45rem] w-screen h-screen"
            style={{
              background:
                "radial-gradient(44.48% 44.48% at 50% 63%, rgba(255, 165, 0, 0.15) 0%, rgba(255, 165, 0, 0) 80%)",
            }}
          ></div>
          <div className="md:w-1/2">
            <p className="text-2xl lg:text-4xl font-semibold">LeashPay</p>
            <p className="my-8 text-lg lg:text-xl">
              Regardless of the size of your business, LeashPay offers
              everything software and API needed to build a world-class payments
              experiences.
            </p>
            <a
              href="https://leashpay.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gradient-to-r from-violet-400 to-pink-500 mb-4 font-semibold  w-[40%] lg:w-[8rem] py-3  text-white md:text-sm rounded-md">
                Get Started
              </button>
            </a>
          </div>

          <div className="relative">
            <Image
              className="object-cover h-[12rem] md:h-[100%] lg:h-[140%] mx-auto"
              src="/images/Zack_website.JPG"
              alt=""
              priority={true}
              width={500}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:h-[140%]"></div>
          </div>
        </div>
        <div
          ref={nickRef}
          className="mt-20 md:mt-20 flex flex-col md:flex-row md:justify-between md:gap-4 absolute opacity-0 md:pr-40"
        >
          <div
            className="absolute  -top-[10rem] -left-[50rem] w-screen h-screen"
            style={{
              background:
                "radial-gradient(44.48% 44.48% at 50% 63%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 80%)",
            }}
          ></div>
          <div className="md:w-1/2">
            <p className="text-2xl lg:text-4xl font-semibold">Nike Store</p>
            <p className="my-8 text-lg lg:text-xl">
              This is a full fledged Nike store that helps the consumer to buy
              the products they want
            </p>
            <a
              href="https://nike-clone-three.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gradient-to-r from-violet-400 to-pink-500 font-semibold  w-[40%] lg:w-[8rem] py-3   text-white md:text-sm rounded-md">
                Get Started
              </button>
            </a>
          </div>

          <div
            className="mt-4 relative"
            // data-aos="zoom-in"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Image
              className="object-cover h-[12rem] md:h-[140%] mx-auto"
              src="/images/Sumit_new.JPG"
              alt=""
              priority={true}
              width={500}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:h-[140%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectpage;
