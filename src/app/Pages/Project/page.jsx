import "./projectspage.css";
import Image from "next/image";

function Projectpage() {
  return (
    <div className="mx-6 mt-10 sm:mx-40 md:mx-20 text-gray-200 md:mt-10 md:pb-[10rem]" style={{background: 'radial-gradient(44.48% 44.48% at 50% 50%, rgba(250, 117, 248, 0.26) 0%, rgba(250, 117, 248, 0) 100%)'}}>
      <p className="text-center text-2xl font-bold lg:text-4xl pb-3">
        Projects Lorem, ipsum dolor.
      </p>
      <p className="text-center mt-2 text-lg lg:text-2xl md:mx-40 md:mb-[-30px]">
        Lorem ipsum dolor sit amet, consectetur
        <span className="hidden md:block md:mt-5 md:mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, </span><span className="">quae.</span>
        
      </p>

      <div className="flex flex-col px-[10%] md:mt-20 md:px-[5%]">
        <div className="mt-20 flex flex-col md:flex-row md:justify-between gap-[3rem]">
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
        <div className="mt-20 md:mt-40 flex flex-col md:flex-row-reverse md:justify-between gap-[3rem] md:pt-[5rem]">
          <div className="md:pl-[6rem]">
            <p className="text-2xl lg:text-3xl">
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


        <div className="mt-20 lg:mt-40 flex flex-col md:flex-row md:justify-between gap-[3rem] md:pt-[5rem]">
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

        <div className="mt-20 lg:mt-40 flex flex-col lg:flex-row gap-[3rem] lg:ml-20 md:hidden">
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

