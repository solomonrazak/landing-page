import Head from "next/head";

const cloudIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 616 512"
    className="service-icon  w-4 md:w-6"
    width="40"
    height="40"
  >
    <path d="M148.6 304c8.2 68.5 67.4 115.5 146 111.3 51.2 43.3 136.8 45.8 186.4-5.6 69.2 1.1 118.5-44.6 131.5-99.5 14.8-62.5-18.2-132.5-92.1-155.1-33-88.1-131.4-101.5-186.5-85-57.3 17.3-84.3 53.2-99.3 109.7-7.8 2.7-26.5 8.9-45 24.1 11.7 0 15.2 8.9 15.2 19.5v20.4c0 10.7-8.7 19.5-19.5 19.5h-20.2c-10.7 0-19.5-6-19.5-16.7V240H98.8C95 240 88 244.3 88 251.9v40.4c0 6.4 5.3 11.8 11.7 11.8h48.9zm227.4 8c-10.7 46.3 21.7 72.4 55.3 86.8C324.1 432.6 259.7 348 296 288c-33.2 21.6-33.7 71.2-29.2 92.9-17.9-12.4-53.8-32.4-57.4-79.8-3-39.9 21.5-75.7 57-93.9C297 191.4 369.9 198.7 400 248c-14.1-48-53.8-70.1-101.8-74.8 30.9-30.7 64.4-50.3 114.2-43.7 69.8 9.3 133.2 82.8 67.7 150.5 35-16.3 48.7-54.4 47.5-76.9l10.5 19.6c11.8 22 15.2 47.6 9.4 72-9.2 39-40.6 68.8-79.7 76.5-32.1 6.3-83.1-5.1-91.8-59.2zM128 208H88.2c-8.9 0-16.2-7.3-16.2-16.2v-39.6c0-8.9 7.3-16.2 16.2-16.2H128c8.9 0 16.2 7.3 16.2 16.2v39.6c0 8.9-7.3 16.2-16.2 16.2zM10.1 168C4.5 168 0 163.5 0 157.9v-27.8c0-5.6 4.5-10.1 10.1-10.1h27.7c5.5 0 10.1 4.5 10.1 10.1v27.8c0 5.6-4.5 10.1-10.1 10.1H10.1zM168 142.7v-21.4c0-5.1 4.2-9.3 9.3-9.3h21.4c5.1 0 9.3 4.2 9.3 9.3v21.4c0 5.1-4.2 9.3-9.3 9.3h-21.4c-5.1 0-9.3-4.2-9.3-9.3zM56 235.5v25c0 6.3-5.1 11.5-11.4 11.5H19.4C13.1 272 8 266.8 8 260.5v-25c0-6.3 5.1-11.5 11.4-11.5h25.1c6.4 0 11.5 5.2 11.5 11.5z" />
  </svg>
);

const TechnicalSupportIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="service-icon w-4 md:w-6"
    width="40"
    height="40"
  >
    <path
      fill="currentColor"
      d="M256 0C114.84 0 0 114.83 0 256s114.84 256 256 256 256-114.83 256-256S397.16 0 256 0zm0 464c-114.88 0-208-93.12-208-208S141.12 48 256 48s208 93.12 208 208-93.12 208-208 208zM256 96c-52.94 0-96 43.06-96 96 0 25.76 10.08 49.74 28.39 67.96L64 368h64v32h64v-32h32v32h64v-32h64v-64.03C341.92 317.76 352 293.78 352 268c0-52.94-43.06-96-96-96zm32 172v24h-64v-24c-32.77 0-59.56-24.73-63.69-56H180c-26.47 0-48-21.53-48-48s21.53-48 48-48h44.31c4.14-31.27 30.93-56 63.69-56v-24h64v24c32.77 0 59.56 24.73 63.69 56H332c26.47 0 48 21.53 48 48s-21.53 48-48 48h-44.31c-4.14 31.27-30.93 56-63.69 56z"
    ></path>
  </svg>
);

const QualityAssuranceIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="service-icon  w-4 md:w-6"
  >
    <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z" />
  </svg>
);

const SolutionIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="service-icon w-4 md:w-6"
  >
    <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
  </svg>
);

const mobileIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    className="service-icon w-4 md:w-6"
  >
    <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z" />
  </svg>
);

const webIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
    className="service-icon w-4 md:w-6"
  >
    <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
  </svg>
);

const uiuxIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    className="service-icon  w-4 md:w-6"
  >
    <path d="M14 95.8C14 42.9 56.9 0 109.8 0H274.2C327.1 0 370 42.9 370 95.8C370 129.3 352.8 158.8 326.7 175.9C352.8 193 370 222.5 370 256C370 308.9 327.1 351.8 274.2 351.8H272.1C247.3 351.8 224.7 342.4 207.7 326.9V415.2C207.7 468.8 163.7 512 110.3 512C57.5 512 14 469.2 14 416.2C14 382.7 31.2 353.2 57.2 336.1C31.2 319 14 289.5 14 256C14 222.5 31.2 193 57.2 175.9C31.2 158.8 14 129.3 14 95.8zM176.3 191.6H109.8C74.2 191.6 45.4 220.4 45.4 256C45.4 291.4 74 320.2 109.4 320.4C109.5 320.4 109.7 320.4 109.8 320.4H176.3V191.6zM207.7 256C207.7 291.6 236.5 320.4 272.1 320.4H274.2C309.7 320.4 338.6 291.6 338.6 256C338.6 220.4 309.7 191.6 274.2 191.6H272.1C236.5 191.6 207.7 220.4 207.7 256zM109.8 351.8C109.7 351.8 109.5 351.8 109.4 351.8C74 352 45.4 380.8 45.4 416.2C45.4 451.7 74.6 480.6 110.3 480.6C146.6 480.6 176.3 451.2 176.3 415.2V351.8H109.8zM109.8 31.4C74.2 31.4 45.4 60.2 45.4 95.8C45.4 131.4 74.2 160.2 109.8 160.2H176.3V31.4H109.8zM207.7 160.2H274.2C309.7 160.2 338.6 131.4 338.6 95.8C338.6 60.2 309.7 31.4 274.2 31.4H207.7V160.2z" />
  </svg>
);

const Services = () => {
  return (
    <div
      className="bg-black w-screen mt-[6rem]    px-6"
      style={{
        background:
          "radial-gradient(44.48% 44.48% at 50% 63%, rgba(176, 117, 248, 0.15) 0%, rgba(250, 117, 248, 0) 80%)",
        opacity: "0.85",
      }}
    >
      <Head>
        <title>Our Services</title>
      </Head>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full h-96 w-96 opacity-50 z-0"></div>

      {/* Heading */}

      <h1 className="text-white text-2xl md:text-5xl py-4 font-bold text-center tracking-widest z-0">
        Our Services
      </h1>

      {/* Services Content */}
      <div className="md:mx-20 lg:mx-40 mb-20">
        <div className="flex flex-col md:flex-row md:gap-10 justify-between ">


          <div className="md:w-1/2" data-aos="fade-up">
            <div className="flex flex-row text-white gap-3 mt-8 md:mt-16" >

              <div className="">
                <div className=" border-2 w-7 md:w-12 border-white  px-1 md:px-3 md:py-2 rounded-md">
                  {webIcon}
                </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold md:text-3xl">
                  Web Development:
                </h1>
                <p className="text-lg mt-2 md:text-xl md:leading-relaxed">
                  Step into the digital realm with our seasoned team of web
                  developers. We specialize in crafting bespoke websites
                  tailored to your exact specifications. From seamless
                  functionality to captivating design, we ensure your online
                  presence stands out from the crowd.
                </p>
              </div>
            </div>
            <div className="flex flex-row text-white gap-3 mt-8 md:mt-16">
              <div className="">
                <div className=" border-2 w-7 md:w-12 border-white  px-1 md:px-3 md:py-2 rounded-md">
                  {uiuxIcon}
                </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold md:text-3xl">
                  UI/UX Design:
                </h1>
                <p className="text-lg mt-2 md:text-xl md:leading-relaxed">
                  Elevate your digital brand with our premium UI/UX design
                  services. Focused on user-centric principles, we meticulously
                  craft interfaces that not only look stunning but also enhance
                  user engagement and drive conversion rates.
                </p>
              </div>
            </div>
            <div className="flex flex-row text-white gap-3 mt-8 md:mt-16">
              <div className="">
                <div className=" border-2 w-7 md:w-12 border-white  px-1 md:px-3 md:py-2 rounded-md">
                  {mobileIcon}
                </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold md:text-3xl">
                  Mobile App Development:
                </h1>
                <p className="text-lg mt-2 md:text-xl md:leading-relaxed">
                  Embrace the mobile revolution with our cutting-edge app
                  development services. Whether it's iOS, Android, or
                  cross-platform solutions, our experts are dedicated to
                  creating intuitive and engaging mobile applications that
                  resonate with your audience.
                </p>
              </div>
            </div>
          </div>


          

          <div className="md:w-1/2" data-aos="fade-up">

            <div className="flex flex-row text-white gap-3 mt-8 md:mt-16">
              <div className="">
                <div className=" border-2 w-7 md:w-12 border-white  px-1 md:px-3 md:py-2 rounded-md">
                  {QualityAssuranceIcon}
                </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold md:text-3xl">
                  Quality Assurance:
                </h1>
                <p className="text-lg mt-2 md:text-xl md:leading-relaxed">
                  Ensure the integrity of your software products with our
                  rigorous quality assurance processes. Our dedicated QA team
                  meticulously tests and refines every aspect of your software,
                  guaranteeing a seamless user experience and minimizing
                  disruptions
                </p>
              </div>
            </div>
            <div className="flex flex-row text-white gap-3 mt-8 md:mt-16">
              <div className="">
                <div className=" border-2 w-7 md:w-12 border-white  px-1 md:px-3 md:py-2 rounded-md">
                  {TechnicalSupportIcon}
                </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold md:text-3xl">
                  Technical Support:
                </h1>
                <p className="text-lg mt-2 md:text-xl md:leading-relaxed">
                  Experience peace of mind with our responsive technical support
                  services. Whether it's troubleshooting, maintenance, or
                  ongoing assistance, our dedicated team is committed to
                  providing prompt and reliable support to keep your operations
                  running smoothly.
                </p>
              </div>
            </div>
            <div className="flex flex-row text-white gap-3 mt-8 md:mt-16">
              <div className="">
                <div className=" border-2 w-7 md:w-12 border-white  px-1 md:px-3 md:py-2 rounded-md">
                  {SolutionIcon}
                </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold md:text-3xl">
                  Software Consultation:
                </h1>
                <p className="text-lg mt-2 md:text-xl md:leading-relaxed">
                  Navigate the complexities of software development with
                  confidence. Our seasoned consultants offer invaluable insights
                  and strategic guidance to streamline your projects from
                  conception to execution, ensuring optimal performance and
                  efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
