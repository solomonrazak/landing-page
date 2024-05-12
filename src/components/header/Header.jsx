import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Image from "next/image";
import "../../app/fonts.css";
const Header = () => {
  const key = "nI4q8pGvBqtTV2l2qtnl_j2AKAr6LH9mHXNCl4pU1P4";
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/?client_id=${key}`
        );
        setImage(response.data[1].urls.regular);
      } catch (error) {
        console.log("Error in fetching image from unsplash", error);
      }
    };
    fetchImage();
  }, []);

  return (
    <>
      <video
        autoPlay
        loop
        muted
        data-aos="fade-in"
        className="absolute top-0 left-0 min-w-full h-screen object-cover z-0"
      >
        <source
          src="https://cdn.pixabay.com/video/2022/06/22/121799-724719792_large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div
        data-aos="fade-up"
        className="relative bg-black py-[7%] w-screen pt-20 md:pt-44"
        style={{
          background:
            "radial-gradient(44.48% 44.48% at 10% 50%, rgba(176, 117, 248, 0.18) 0%, rgba(250, 117, 248, 0) 100%)",
          fontFamily: "adelle",
        }}
      >
        <div className="bg-black w-full h-screen opacity-70 absolute top-0 left-0"></div>
        <div
<<<<<<< HEAD
          className="flex flex-col justify-center items-center text-white relative z-10"></div>

    
      {/* Book a consultation pop up */}
      <div className="w-full flex justify-center">
        {modal && 
      <div className="md:w-[95%] bg-white z-80 fixed md:top-[1rem] px-4 py-6 md:py-[5rem] md:px-8 flex flex-col md:flex-row justify-between gap-5 md:gap-[7rem] overflow-y-visible">
        {/* left side */}
        <div className="flex flex-col gap-3 md:gap-7 md:w-[35%] pt-12">
          <h1 className="text-[27px] md:text-[3rem] text-blue-500 md:mb-4 tracking-wider">Lets Start</h1>
          {/* image side */}
          <div className="hidden md:flex gap-3">
            <div className="hidden">
              <FaRegCircle style={{width: '10px', border: '10px', fontSize: '20px', color: 'blue'}} className="font-bold"/>
              <RxDividerVertical />
              <RxDividerVertical />
              <LuCircle />
              <RxDividerVertical />
              <LuCircle />
              <HiArrowLongDown />
            </div>
            <div className="space-y-6 text-gray-600 pl-4">
              <p className="mb-[-22px] font-normal ml-[23px] text-[12px]">YOU ARE HERE</p>
              <h1 className="text-[20px]">1 Share your idea</h1>
              <h1 className="text-[20px]">2 Discuss it with our expert</h1>
              <h1 className="text-[20px]">3 Get an estimation of a project</h1>
              <h1 className="text-[20px]">4 Start the project</h1>
            </div>
          </div>
          <div className="flex text-[14px] gap-2 md:flex-col md:space-y-2 md:mb-6">
            <h1 className="md:text-[17px] text-gray-600">If you have any questions, email us</h1>
            <h1 className={styles.text} onClick={() => router.push('mailto:email@gmail.com')}>Solomonrazak99@gmail.com</h1>
          </div>
        </div>
        {/* right side */}
        <div className="md:w-[65%] md:mt-6">
          <div className="flex justify-end text-gray-500 absolute top-[2rem] right-[2.5rem] text-[1.5em] cursor-pointer" onClick={() => setModal(false)}><VscChromeClose /></div>
          <form >
            <div className="flex flex-col gap-5 md:gap-9">
            <div className="flex flex-col gap-2 md:flex-row">
              <label className="after:content-['*'] after:ml-1 after:text-red-500 font-normal md:font-medium text-[13px]" htmlFor="name">My Name</label>
              <input className="border-b border-gray-400 outline-none text-[11px] focus:outline-none md:ml-4 md:w-[33rem] font-medium pb-1 md:pb-2 hover:border-blue-500" id="name" placeholder="John Smith"/>
            </div>
            <div className="flex flex-col gap-2 md:flex-row">
              <label className="after:content-['*'] after:ml-1 after:text-red-500 font-normal md:font-medium text-[13px]" htmlFor="email">Email</label>
              <input className="border-b border-gray-400 outline-none text-[11px] focus:outline-none md:ml-10 md:w-[33rem] font-medium pb-1 md:pb-2 hover:border-blue-500" id="email" placeholder="name@company.com"/>
            </div>
            <div className="flex flex-col gap-2 md:flex-row">
              <label className="after:content-['*'] after:ml-1 after:text-red-500 font-normal md:font-medium text-[13px]" htmlFor="message">Message</label>
              <textarea className="md:w-[33rem] text-[11px] md:ml-4 border-b border-gray-400 outline-none focus:outline-none hover:border-blue-500 pb-[1px]" id="message" placeholder="Describe your idea"/>
            </div>
            </div>
            <div className="mt-4 text-[10px] md:text-[13px] md:ml-[5.5rem] text-gray-500 font-medium">
            <p>Please be informed that when you click the Send button Sumatosoft will process your</p>
            <p>personal data in accordance with our <span className="text-red-500 cursor-pointer">Privacy notice</span> for the purpose of providing you with</p>
            <p>appropriate information. This site is protected by reCAPTCHA and the Google <span className="text-red-500 cursor-pointer">Privacy Policy </span>
            and<span className="text-red-500 cursor-pointer"> Terms of Service</span> apply.</p>
              
            </div>
            <div className="mt-5 md:mt-8 flex justify-between items-center pr-2">
              <label className={styles.fileInputLabel}>
                <input type="file" className={styles.fileInput}/>
                <div className="flex items-center gap-2"><IoMdAttach style={{fontSize: '20px'}}/>Attach File</div>
                
              </label>
              <button className="bg-red-400 w-[10rem] md:w-[16rem] text-white px-10 py-3 text-[17px] hover:bg-transparent hover:text-red-400 hover:border hover:border-red-500">Send</button>
            </div>
            
            
          </form>
          <div className="h-[0.5px] md:w-[35rem] mt-7 bg-gray-400 md:ml-[5.8rem]"></div>
          {/* book a consultation */}
          <div className="flex flex-col md:flex-row mt-7 gap-6 md:ml-[5.5rem] justify-between pr-2">
            <div className="flex gap-3 items-center">
              <div className="rounded-full">
                <Image src="/images/razzy.jpg" width={40} height={40} className="rounded-full" alt=""/>
              </div>
              <div>
                <p className="text-[15px] font-medium">Solomon Razak</p>
                <p className="font-light text-[11px] text-gray-600">Account Executive</p>
              </div>
              
            </div>
            <button className="flex items-center gap-3 bg-white px-9 py-3 border-2 border-red-400 text-red-400 cursor-pointer hover:bg-red-400 hover:text-white"><FaCalendarAlt /> Book a consultation</button>

          </div>

        </div>
      </div>
}
      <div
        data-aos="fade-up"
        className="bg-black py-[7%] w-screen pt-20  md:pt-44"
        style={{
          background:
            "radial-gradient(44.48% 44.48% at 10% 50%, rgba(176, 117, 248, 0.18) 0%, rgba(250, 117, 248, 0) 100%)",
        }}
      >
        <div
          className="flex flex-col justify-center items-center text-white "

=======
          className="flex flex-col justify-center items-center text-white relative z-10"
>>>>>>> 407fd41df8f54d0daf1f227491fdd89d101d3df7
          style={{
            background:
              "radial-gradient(44.48% 44.48% at 80% 50%, rgba(176, 117, 248, 0.05) 0%, rgba(250, 117, 248, 0) 80%)",
            opacity: "0.85",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-[37px] md:text-[5rem] font-medium px-6 text-2xl md:text-center mt-6 md:mt-0 md:px-40 leading-snug"
          >
            <h1 className="text-center">
              The Fastest Software <br />
              Service Ever Made
            </h1>
          </motion.div>
          <p className="text-[19px] font-medium md:text-[22px] mt-5 md:text-center px-6">
            AI Powered Softwares for all companies
          </p>
          <p className="text-[19px] md:text-center font-medium md:text-[22px] mt-2 px-6">
            Get your product ready in <span>less than a month</span>
          </p>
        </div>

        <div
          className="flex justify-center mt-7"
          style={{
            opacity: "0.9",
          }}
        >
          <button className="bg-gradient-to-r from-violet-400 to-pink-500 px-8 w-[80%] lg:w-[12rem] py-3 md:py-5 text-white md:text-xl rounded-md">
            Get Started
          </button>
        </div>
        <div
          className="flex justify-center mt-[30px] p-8 overflow-x-hidden md:mt-20"
          data-aos="zoom-out"
        >
          {image && (
            <Image
              src="/images/project1.jpg"
              alt="unsplash-image"
              quality={100}
              width={1000}
              height={100}
              className="rounded-md object-cover"
              priority={true}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
