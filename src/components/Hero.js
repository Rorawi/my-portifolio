import React from "react";
import Navbar from "./Navbar";
import MySkills from "./MySkills";
import profile from "../components/images/profile.jpg";
import "./myStyle.css";
import { FaArrowRight } from "react-icons/fa";
import {DiJavascript1,DiHtml5,DiCss3,DiReact} from "react-icons/di"
import { SiTailwindcss } from "react-icons/si"
const Hero = () => {
  return (
    <div className="bg-[#181818] ">
      <Navbar />
      <div className="py-16 px-10 md:px-20 md:flex md:justify-around md:items-start">
        <div>
          <p className="text-[40px] md:text-7xl font-poppins font-bold text-white md:max-w-2xl text-center md:text-left">
            I'm Winifred
            <span className="text-gradient">
              <br />A Frontend Developer
            </span>
          </p>
          <p className="text-white font-poppins font-normal py-5 md:py-10 md:w-[80%]  text-center md:text-left">
            I’m a Frontend Developer based in Ghana. I am very passionate about
            software engineering and I am eager to gain hands-on experience in
            the field of tech. I love to create projects to help solve societal
            problems.
          </p>

          <div className="flex justify-between max-w-[400px]">
            {/* <div className="h-[28px] w-[87px] md:h-[56px] md:w-[174px] bg-gradient-to-bl from-[#AA00FF] to-[#0DCCF2] "></div>
            <button className="text-[12px] md:text-[18px] font-poppins h-[28px] w-[87px] md:h-[56px] md:w-[174px] bg-white absolute md:-top-1.5 -top-1 -left-1 md:-left-1.5 md:bottom-[90px] bottom-[5px] flex justify-evenly items-center">
              Let's Talk <FaArrowRight className="md:text-[12px]" />
            </button> */}
            <div className="md:flex justify-between items-center">
              <h2 className="text-white flex-none">Tech Stack |</h2>
             <div  className="flex justify-evenly ml-3 bg-white py-2 px-2 rounded-lg">
             <DiJavascript1 className="text-black text-[20px] ml-[6px]"/>
             <DiHtml5 className="text-black text-[20px] ml-[6px]"/>
             <DiReact className="text-black text-[20px] ml-[6px]"/>
             <DiCss3 className="text-black text-[20px] ml-[6px]"/>
             <SiTailwindcss className="text-black text-[20px] ml-[7px]"/>
             </div>
            </div>

            <a href="#portifolio"className="text-[10px] md:text-[18px] text-white border-b-[1px] border-white font-poppins">
              See Portifolio
            </a>
          </div>
        </div>

        <div>
          <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden  border">
            <img src={profile} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
