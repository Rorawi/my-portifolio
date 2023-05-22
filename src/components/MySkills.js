import React from "react";
import logo from "../components/images/logo.png";
import logo2 from "../components/images/Logo2.png";
import logo3 from "../components/images/Logo3.png";

const MySkills = () => {
  return (
    <div className="mt-[200px] mb-[150px]" id="services">
      <h2 className="text-[30px] md:text-6xl font-bold text-[#181818] text-center	font-poppins">
        Creating <span className="text-gradient"> Beautiful Websites </span>
        <br />
        is My Passion
      </h2>

      <div className="md:flex md:justify-evenly justify-center md:items-start items-center my-[70px] mx-[20px] ml-[55px]">
        <div className=" mb-[80px]">
         <div className="flex justify-center">
           <img src={logo} alt="" />
         </div>
                   <h3 className="text-[24px] md:text-center font-bold font-poppins">What I can do for you</h3>
          <p className="text-[18px] md:text-center text-[#797979] font-poppins font-normal w-[357px] my-[12px]">
            Faster, better products that your users love. Here's all the
            services I provide:
          </p>
          
            <li className="font-bold text-[#181818] font-poppins">Mobile App Design</li>
            <li className="font-bold text-[#181818] font-poppins">Web Design</li>
          
        </div>

        <div className=" mb-[80px]">
         <div className="flex justify-center">
           <img src={logo2} alt="" />
         </div>

          <h3 className="text-[24px] md:text-center font-bold font-poppins">What I work with</h3>
          <p className="text-[18px] md:text-center text-[#797979] font-poppins font-normal w-[357px] my-[12px]">
            Faster, better products that your users love. Here's all the
            tools I use:
          </p>
          
            <li className="font-bold text-[#181818] font-poppins">React</li>
            <li className="font-bold text-[#181818] font-poppins">React-Native</li>
            <li className="font-bold text-[#181818] font-poppins">Bootstrap</li>
            <li className="font-bold text-[#181818] font-poppins">Javascript</li>
          
        </div>

        <div className=" mb-[80px]">
         <div className="flex justify-center">
           <img src={logo3} alt="" />
         </div>

          <h3 className="text-[24px] md:text-center font-bold font-poppins">What you can expect</h3>
          <p className="text-[18px] md:text-center text-[#797979] font-poppins font-normal w-[357px] my-[12px]">
           Developing websites and apps with good user interfaces and fast optimization.
          </p>
          
            <li className="font-bold text-[#181818] font-poppins">User friendly websites and apps</li>
            <li className="font-bold text-[#181818] font-poppins">Fast and efficient</li>
            <li className="font-bold text-[#181818] font-poppins">Neat Interfaces</li>
          
        </div>
      </div>
    </div>
  );
};

export default MySkills;
