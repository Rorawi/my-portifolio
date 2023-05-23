import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiMenu } from "react-icons/fi";
import "./myStyle.css";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isTrue, setIsTrue] = useState(false);

  const setToggle = () => {
    setIsTrue(!isTrue);
  };

  return (
    <header className="flex mx-[20px] justify-between md:justify-around items-center bg-transparent py-4">
      <div className="bg-gradient-to-bl from-[#AA00FF] to-[#0DCCF2]  w-7 h-7 rounded-full flex justify-center items-center">
        <h1 className="text-3l text-white font-bold font-poppins">W</h1>
      </div>

      <div className="flex justify-evenly ">
        <div>
          <a href="#services" className="mx-2.5 font-poppins text-white">
            Service
          </a>
        </div>
        <div>
          <a href="#" className="mx-2.5 font-poppins text-white">
            Portifolio
          </a>
        </div>
        <div>
          <a href="#" className="mx-2.5 font-poppins text-white">
            Blog
          </a>
        </div>

        <div>
          <a href="#" className="mx-2.5 font-poppins text-white">
            Clients
          </a>
        </div>
        {/* //Menu nav here classname md:hidden */}
      </div>
      {isTrue && <MobileNav />}

      <div className="md:flex-row flex justify-evenly items-center flex-col md:bg-transparent bg-white py-[35px] pl-[10px] h-[40vh] md:h-0 bottom-[200px] md:bottom-0 rounded-xl -left-[14px] z-10 fixed md:static md:shadow-none shadow-md">
        <a href="">
          <FaInstagram className="mx-2.5 text-[17px] md:mb-0 mb-[6px] md:text-white" />
        </a>
        <a href="https://www.linkedin.com/in/winifredasantewaaasante">
          <FaLinkedin className="mx-2.5 text-[17px] md:mb-0 mb-[6px]  md:text-white" />
        </a>
        <a href="https://github.com/Rorawi">
          <FaGithub className="mx-2.5 text-[17px] md:mb-0 mb-[6px]  md:text-white" />
        </a>

        <a href="winifredasante15@gmail.com">
          <SiGmail className="mx-2.5 text-[17px] md:mb-0 mb-[5px]  md:text-white" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
