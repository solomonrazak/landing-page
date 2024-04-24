import "./projectspage.css";
import Image from "next/image";

function Projectpage() {
  return (
    <div className="w-screen mt-[4rem] flex flex-col justify-center text-gray-200 md:mt-10 overflow-x-hidden">
      <p className="text-center text-2xl font-bold lg:text-5xl pb-[15px] mb-3">
        Projects Lorem, ipsum dolor.
      </p>
      <p className="text-center mt-2 text-lg lg:text-2xl md:mx-40">
        Lorem ipsum dolor sit amet, consectetur
        <span className="hidden md:block md:mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, quae.
        </span>
      </p>

      <div className="flex flex-col px-[10%] md:mt-20 md:px-[5%]">
        <div className="mt-20 lg:mt-40 flex flex-col md:flex-row md:justify-between gap-8">
          <div className="">
            <p className="text-2xl lg:text-4xl">
              Lorem ipsum <br />
              dolor sit.
            </p>
            <p className="my-4 text-lg lg:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing 
            </p>
            <p>elit.
              Blanditiis, quis! Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="">
            <Image
              className="object-cover h-[12rem] md:h-[160%]"
              src="/images/project1.jpg"
              alt=""
              priority={true}
              width={500}
              height={500}
            />
            {/* <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:h-[160%]"></div> */}
          </div>
        </div>

        {/* <div className="mt-20 lg:mt-40 flex flex-col md:flex-row md:justify-between gap-8">
          <div class="">
            <Image
              class="object-cover h-[12rem] w-full lg:h-full "
              src="/images/project1.jpg"
              alt=""
              width={500}
              height={500}
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black "></div>
          </div>
          <div className="">
            <p className="text-2xl lg:text-4xl">
              Lorem ipsum <br />
              dolor sit.
            </p>
            <p className="my-4 text-lg lg:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis, quis! Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div> */}
        <div className="mt-20 md:mt-40 flex flex-col md:flex-row-reverse md:justify-between gap-8 md:pt-[5rem]">
          <div className="">
            <p className="text-2xl lg:text-4xl">
              Lorem ipsum <br />
              dolor sit.
            </p>
            <p className="my-4 text-lg lg:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing 
            </p>
            <p>elit.
              Blanditiis, quis! Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="">
            <Image
              className="object-cover h-[12rem] md:h-[160%]"
              src="/images/project1.jpg"
              alt=""
              priority={true}
              width={500}
              height={500}
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:h-[160%]"></div>
          </div>
        </div>


        <div className="mt-20 lg:mt-40 flex flex-col md:flex-row md:justify-between gap-8 md:pt-[5rem]">
          <div className="">
            <p className="text-2xl lg:text-4xl">
              Lorem ipsum <br />
              dolor sit.
            </p>
            <p className="my-4 text-lg lg:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing 
            </p>
            <p>elit.
              Blanditiis, quis! Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="">
            <Image
              className="object-cover h-[12rem] md:h-[160%]"
              src="/images/project1.jpg"
              alt=""
              priority={true}
              width={500}
              height={500}
            />
            {/* <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:h-[160%]"></div> */}
          </div>
        </div>

        <div className="mt-20 lg:mt-40 flex flex-col lg:flex-row gap-8 lg:ml-20 md:hidden">
          <div className="lg:w-1/2">
            <p className="text-2xl lg:text-4xl">
              Lorem ipsum <br />
              dolor sit.
            </p>
            <p className="my-4 text-lg lg:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing 
            </p>
            <p>elit.
              Blanditiis, quis! Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="">
            <Image
              class="object-cover h-[12rem] w-full md:h-[160%]"
              src="/images/project1.jpg"
              alt=""
              width={500}
              height={500}
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:h-[160%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectpage;

