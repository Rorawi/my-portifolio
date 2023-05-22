import React from "react";
import Navbar from "./Navbar";
import MySkills from "./MySkills";
import profile from "../components/images/profile.jpg";
import "./myStyle.css";
import { FaArrowRight } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="bg-[#181818] ">
      <Navbar />
      <div className="py-16 px-10 md:px-20 md:flex md:justify-around md:items-start">
        <div>
          <p className="text-[40px] md:text-7xl font-poppins font-bold text-white md:max-w-2xl max-w-[300px] text-center md:text-left">
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

          <div className="relative flex md:justify-center items-center">
            <div className="h-[28px] w-[87px] md:h-[56px] md:w-[174px] bg-gradient-to-bl from-[#AA00FF] to-[#0DCCF2] "></div>
            <button className="text-[12px] md:text-[18px] font-poppins h-[28px] w-[87px] md:h-[56px] md:w-[174px] bg-white absolute md:-top-1.5 -top-1 -left-1 md:-left-1.5 md:bottom-[90px] bottom-[5px] flex justify-evenly items-center">
              Let's Talk <FaArrowRight className="md:text-[12px]" />
            </button>

            <a href="#"className="text-[10px] md:text-[18px] ml-[35px] text-white border-b-[1px] border-white font-poppins">
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
