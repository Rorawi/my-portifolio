import React from "react";
import { FiMail, FiArrowRight } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import "./myStyle.css";
import MobileNav from "./MobileNav";

import {DiJavascript1,DiHtml5,DiCss3,DiReact} from "react-icons/di"
import { SiTailwindcss } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="mt-[50px]">
     <div className="flex px-4 lg:px-20 justify-between items-center bg-transparent py-4 relative z-20">
      <div className="bg-gradient-to-bl from-[#AA00FF] to-[#0DCCF2]  w-10 h-10 rounded-full flex justify-center items-center">
        <h1 className="text-xl text-white font-bold font-poppins">W</h1>
      </div>

      <div className="md:flex-row flex space-x-4 justify-evenly items-center flex-col  py-[35px] pl-[10px] rounded-xl">
        <div className="flex justify-center space-x-4">
          <a  href="https://github.com/Rorawi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:scale-105 transition-all duration-100">
            <FaGithub className=" text-black text-2xl" />
          </a>
          <a  href="https://www.linkedin.com/in/winifredasantewaaasante" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:scale-105 transition-all duration-100">
            <FaLinkedinIn className=" text-blue text-2xl" />
          </a>

          <a href="mailto:winifredasante15@gmail.com" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:scale-105 transition-all duration-100">
            <SiGmail className=" text-black text-2xl" />
          </a>
          </div>
      </div>
    </div>

      <hr className="my-5 bg-[#c0c0c0]" />

      <p className="text-center text-[#c0c0c0] font-poppins  mb-[20px]">
        &copy; 2024 Wini's Folio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
