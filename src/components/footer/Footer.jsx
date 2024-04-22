import Image from "next/image";
import { FaXTwitter, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-black w-screen bottom-0">
      <div className="flex flex-col md:flex-row text-white justify-between md:px-[5%] py-[4%] pr-20 pl-10 pt-10">
        <h1 className="font-medium flex flex-col text-[30px] md:text-[3em] mb-10 md:mb-0">
          <span>The Fastest</span>
          <span>Email Experience</span>
          <span>Ever made</span>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-11">
          <div className="flex flex-col">
            <h1 className="font-medium mb-4">Company</h1>
            <p className="text-gray-300 mb-2">Blog</p>
            <p className="text-gray-300 mb-2">Careers</p>
            <p className="text-gray-300 mb-2">Love</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium mb-4">Products</h1>
            <p className="text-gray-300 mb-2">Pricing</p>
            <p className="text-gray-300 mb-2">Download</p>
            <p className="text-gray-300 mb-2">AI</p>
            <p className="text-gray-300 mb-2">Sales</p>
            <p className="text-gray-300 mb-2">Slaes</p>
            <p className="text-gray-300 mb-2">Enterp</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium mb-4">Support</h1>
            <p className="text-gray-300 mb-2">Help Center</p>
            <p className="text-gray-300 mb-2">Contact Us</p>
            <p className="text-gray-300 mb-2">Learn</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium mb-4">Legal</h1>
            <p className="text-gray-300 mb-2">Privacy</p>
            <p className="text-gray-300 mb-2">Terms</p>
          </div>
        </div>
      </div>
      <div className="h-[2px] w-[90%] flex mx-auto bg-gray-500"></div>
      <div className="flex flex-col md:flex-row text-white px-[5%] justify-between mt-[3%] pb-8">
        <div className="flex gap-3 mb-[18px] md:mb-0">
          <h1>Logo</h1>
          <p className="tracking-widest">Tech Bros</p>
        </div>
        <div className="flex space-x-12 md:text-[28px]">
          <FaXTwitter />
          <FaGithub />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
