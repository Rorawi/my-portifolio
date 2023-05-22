import React,{useState} from "react";
import { FaGithub, FaInstagram, FaLinkedin,FaMailBulk } from "react-icons/fa";
import {SiGmail} from "react-icons/si";
import { FiMenu } from "react-icons/fi"
import "./myStyle.css"

const Navbar = () => {
  const [isTrue,setIsTrue] = useState(false)

const setToggle =()=> {
  setIsTrue(!isTrue)
}


  return (
    <header className="flex mx-[20px] justify-between md:justify-around items-center bg-transparent py-4">
      <div className="bg-gradient-to-bl from-[#AA00FF] to-[#0DCCF2]  w-7 h-7 rounded-full flex justify-center items-center">
        <h1 className="text-3l text-white font-bold font-poppins">W</h1>
      </div>

      <FiMenu id="menu-btn" className=" md:hidden text-[30px] text-white" onClick={setToggle}/>
     
     {isTrue&&(
      <div className="md:flex md:justify-evenly">
        <a href="#services" className="mx-2.5 font-poppins text-white">
          Service
        </a>
        <a href="#" className="mx-2.5 font-poppins text-white">
          Portifolio
        </a>
        <a href="#" className="mx-2.5 font-poppins text-white">
          Blog
        </a>
        <a href="#" className="mx-2.5 font-poppins text-white">
          Clients
        </a>
      </div>
     )}

      <div className="md:flex-row flex justify-evenly items-center flex-col md:bg-transparent bg-white py-[35px] pl-[10px] h-[40vh] bottom-[200px] md:bottom-0 rounded-xl -left-[8px] z-10 fixed md:static shadow-md">
        <FaInstagram className="mx-2.5 md:mb-0 mb-[6px] md:text-white"/>
        <FaLinkedin className="mx-2.5 md:mb-0 mb-[6px]  md:text-white"/>
        <FaGithub className="mx-2.5 md:mb-0 mb-[6px]  md:text-white"/>
        <SiGmail className="mx-2.5 md:mb-0 mb-[10px]  md:text-white"/>
      </div>
    </header>
  );
};

export default Navbar;
