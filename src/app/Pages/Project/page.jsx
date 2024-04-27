"use client";
import "./projectspage.css";
import Image from "next/image";

function Projectpage() {
  return (
    <div
      className="mx-4 mt-10 sm:mx-40 md:mx-20 text-gray-200 md:mt-10 md:pb-[10rem]"
      style={{
        background:
          "radial-gradient(14.48% 14.48% at 10% 10%, rgba(250, 117, 248, 0.26) 0%, rgba(250, 117, 248, 0) 100%)",
      }}
    >
      <p className="md:text-center mx-4 text-3xl font-bold lg:text-5xl pb-3 ">
        Projects Lorem, ipsum dolor.
      </p>
      <p className="md:text-center mt-2 mx-4 text-lg lg:text-2xl md:mx-40 md:mb-[-30px] ">
        Lorem ipsum dolor sit amet, consectetur
      </p>

      <div className="flex flex-col mx-4 md:mt-20 md:px-[5%]">
        <div className="mt-20 flex flex-col md:flex-row md:justify-between ">
          <div className="md:w-1/2">
            <p className="text-2xl lg:text-4xl font-semibold">
              Lorem ipsum <br />
              dolor sit.
            </p>
            <p className="my-8 text-lg lg:text-xl  ">
              Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Pariatur, quisquam.
            </p>
            <p className=" text-lg lg:text-xl hidden md:block ">
              Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum
              dolor sit
            </p>
          </div>

          <div className="relative">
            <Image
              className="object-cover h-[12rem] md:h-[140%] mx-auto "
              src="/images/project1.jpg"
              alt=""
              priority={true}
              width={500}
              height={500}
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:h-[140%]"></div>
          </div>
        </div>

        <div className="mt-20 md:mt-60 flex flex-col md:flex-row-reverse md:justify-between ">
          <div className="md:w-1/2">
            <p className="text-2xl lg:text-4xl font-semibold">
              Lorem ipsum <br />
              dolor sit.
            </p>
            <p className="my-8 text-lg lg:text-xl  ">
              Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Pariatur, quisquam.
            </p>
            <p className=" text-lg lg:text-xl hidden md:block ">
              Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum
              dolor sit
            </p>
          </div>

          <div className="mt-4 relative">
            <Image
              className="object-cover h-[12rem] md:h-[140%] mx-auto "
              src="/images/project1.jpg"
              alt=""
              priority={true}
              width={500}
              height={500}
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:h-[140%]"></div>
          </div>
        </div>

        <div className="mt-20 md:mt-60 flex flex-col md:flex-row md:justify-between ">
          <div className="md:w-1/2">
            <p className="text-2xl lg:text-4xl font-semibold">
              Lorem ipsum <br />
              dolor sit.
            </p>
            <p className="my-8 text-lg lg:text-xl  ">
              Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Pariatur, quisquam.
            </p>
            <p className=" text-lg lg:text-xl  hidden md:block">
              Lorem ipsum dolor sit, amet consectetur adipisicing Lorem ipsum
              dolor sit
            </p>
          </div>

          <div className="relative">
            <Image
              className="object-cover h-[12rem] md:h-[140%] mx-auto "
              src="/images/project1.jpg"
              alt=""
              priority={true}
              width={500}
              height={500}
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:h-[140%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectpage;
