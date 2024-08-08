import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";

function Footer() {
  return (
    <div className="w-full">
      <div className="flex flex-col ">
      <div className="bg-blue flex flex-col lg:flex-row justify-between px-6 lg:px-20 py-32 items-center">
      <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
        <p className="text-white text-[32px] font-medium">LOCATION</p>
        <p className="text-white text-[16px]">2215 John Daniel Drive</p>
        <p className="text-white mt-3 text-[16px]">Clark, MO 65243</p>
      </div>

      <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
        <p className="text-white text-[32px] font-medium">AROUND THE WEB</p>
        <div className="flex gap-3 items-center justify-center mt-2 flex-wrap">
          <span className="border border-white p-2 rounded-full">
            <FaFacebookF color="white" />
          </span>
          <span className="border border-white p-2 rounded-full">
            <FaTwitter color="white" />
          </span>
          <span className="border border-white p-2 rounded-full">
            <FaLinkedinIn color="white" />
          </span>
          <span className="border border-white p-2 rounded-full">
            <RiGlobalLine color="white" />
          </span>
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex flex-col justify-center items-center">
        <p className="text-white text-[32px]">ABOUT FREELANCER</p>
        <p className="text-white text-[16px] text-center lg:text-left lg:w-[400px]">
          Freelance is a free to use, licensed Bootstrap theme created by Route
        </p>
      </div>
    </div>

        <div className="bg-blue-dark py-3 pb-4">
          <p className="text-white text-[16px] ">
            Copyright © Your Website 2021
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
