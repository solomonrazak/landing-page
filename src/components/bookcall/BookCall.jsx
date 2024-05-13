"use client"

import React from 'react';
import Image from 'next/image';
import styles from './Bookcall.module.css';
import { useRouter } from "next/navigation";
import { IoMdAttach } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { useModalContext } from '@/app/ModalContext';
import "../../app/fonts.css";

const BookCall = () => {

    //context api
  const {modal, setModal} =  useModalContext()
  const router = useRouter();
  return (
      <div className='z-50' style={{zIndex: '9999'}}>
         {modal && 
      <div className="md:w-[95%] bg-white fixed md:top-[1rem] px-4 py-6 md:py-[5rem] md:px-8 flex flex-col md:flex-row justify-between gap-5 md:gap-[7rem] overflow-y-visible">
        {/* left side */}
        <div className="flex flex-col gap-3 md:gap-7 md:w-[35%] pt-12">
          <h1 className="text-[27px] md:text-[3rem] text-blue-500 md:mb-4 tracking-wider">Let's Start</h1>
          {/* image side */}
          <div className="hidden md:flex gap-3">
           
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
      </div>
  )
}

export default BookCall