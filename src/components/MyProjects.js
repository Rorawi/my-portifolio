import React from "react";
import hungryImg from "../components/images/hungryimg.png"
import cert from "../components/images/cert2.png";
import { DiCss3, DiJavascript1, DiReact } from "react-icons/di";
import { FaGithub,FaEye } from "react-icons/fa";
import "./myStyle.css";

const MyProjects = () => {
  return (
    <div
      className="px-[50px] py-[100px] mt-[200px]  bg-[#181818]"
      id="portifolio"
    >
      <div className="md:flex md:justify-between md:items-center ">
        <h2 className="text-[30px] md:text-6xl font-bold text-[#fff]  md:text-left font-poppins">
          Creating <span className="text-gradient"> Outstanding </span>
          <br />
          User Interfaces
        </h2>

        <div className="relative">
          <div className="h-[56px] w-[174px] shadow-lg bg-gradient-to-bl from-[#AA00FF] to-[#0DCCF2] "></div>
          <a href="#" className="h-[56px] w-[174px] bg-[#181818] flex justify-center items-center absolute -top-[4px] -left-[4px] text-white font-poppins">
            See More
          </a>
        </div>
      </div>

      <section className="mt-[100px]">
        <article className="md:flex md:justify-evenly mb-[150px]">
          {/* Image div */}
          <a href="#" className="md:w-[380px] h-[300px] rounded-md overflow-hidden">
            <img src={cert} alt="" className="w-full h-full object-cover transition-all duration-300 transform hover:scale-110"
/>
          </a>

          {/* Description */}
          <div className="md:w-[450px]">
            <h2 className="text-white text-center font-poppins text-[20px] font-bold mb-[15px] text-gradient2">
              Health Website
            </h2>
            <p className="text-center font-poppins text-[15px] text-white">
              A health website provides information on various health topics,
              including medical conditions, wellness tips, nutrition, and
              fitness. It aims to educate and empower individuals to make
              informed decisions about their health. Users can access articles,
              videos, and interactive tools, and find healthcare providers and
              resources for better well-being.
            </p>

            <div className="flex justify-evenly mt-5">
              <DiReact className="text-white w-[30px] h-[30px] rounded-full text-[35px] text-gradient3" />
              <DiCss3 className="text-white w-[30px] h-[30px] rounded-full text-[35px] text-gradient3" />
              <DiJavascript1 className="text-white w-[30px] h-[30px] rounded-full text-[35px] text-gradient3" />
            </div>

            <div className="flex justify-evenly mt-5">
              <a href="#" className="flex items-center  text-white font-poppins">
                <FaGithub className="mx-1" />
                Code
              </a>
              <a href="#" className="flex items-center  text-white font-poppins">
                <FaEye className="mx-1" />
                Live Preview
              </a>
            </div>
          </div>
        </article>


        {/* Food Website */}
        <article className="md:flex md:justify-evenly mb-[150px] flex-row-reverse">
          {/* Image div */}
          <a href="#" className="md:w-[380px] h-[300px] rounded-md overflow-hidden">
            <img src={cert} alt="" className="w-full h-full object-contain transition-all duration-300 transform hover:scale-110"/>
          </a>

          {/* Description */}
          <div className="md:w-[450px]">
            <h2 className="text-white text-center font-poppins text-[20px] font-bold mb-[15px] text-gradient2">
              Health Website
            </h2>
            <p className="text-center font-poppins text-[15px] text-white">
              A health website provides information on various health topics,
              including medical conditions, wellness tips, nutrition, and
              fitness. It aims to educate and empower individuals to make
              informed decisions about their health. Users can access articles,
              videos, and interactive tools, and find healthcare providers and
              resources for better well-being.
            </p>

            <div className="flex justify-evenly mt-5">
              <DiReact className="text-white w-[30px] h-[30px] rounded-full text-[35px] text-gradient3" />
              <DiCss3 className="text-white w-[30px] h-[30px] rounded-full text-[35px] text-gradient3" />
              <DiJavascript1 className="text-white w-[30px] h-[30px] rounded-full text-[35px] text-gradient3" />
            </div>

            <div className="flex justify-evenly mt-5">
              <a href="#" className="flex items-center  text-white font-poppins">
                <FaGithub className="mx-1" />
                Code
              </a>
              <a href="#" className="flex items-center  text-white font-poppins">
                <FaEye className="mx-1" />
                Live Preview
              </a>
            </div>
          </div>
        </article>


        <article className="md:flex md:justify-evenly mb-[150px]">
          {/* Image div */}
          <a href="#" className="md:w-[380px] h-[100%] rounded-md overflow-hidden">
            <img src={cert} alt="" className="w-full h-auto transition-all duration-300 transform hover:scale-110"
/>
          </a>

          {/* Description */}
          <div className="md:w-[450px]">
            <h2 className="text-white text-center font-poppins text-[20px] font-bold mb-[15px] text-gradient2">
              Health Website
            </h2>
            <p className="text-center font-poppins text-[15px] text-white">
              A health website provides information on various health topics,
              including medical conditions, wellness tips, nutrition, and
              fitness. It aims to educate and empower individuals to make
              informed decisions about their health. Users can access articles,
              videos, and interactive tools, and find healthcare providers and
              resources for better well-being.
            </p>

            <div className="flex justify-evenly mt-5">
              <DiReact className="text-white w-[30px] h-[30px] rounded-full text-[35px] text-gradient3" />
              <DiCss3 className="text-white w-[30px] h-[30px] rounded-full text-[35px] text-gradient3" />
              <DiJavascript1 className="text-white w-[30px] h-[30px] rounded-full text-[35px] text-gradient3" />
            </div>

            <div className="flex justify-evenly mt-5">
              <a href="#" className="flex items-center  text-white font-poppins">
                <FaGithub className="mx-1" />
                Code
              </a>
              <a href="#" className="flex items-center  text-white font-poppins">
                <FaEye className="mx-1" />
                Live Preview
              </a>
            </div>
          </div>
        </article>

        <article className="md:flex md:justify-evenly mb-[150px] flex-row-reverse">
          {/* Image div */}
          <a href="#" className="md:w-[380px] h-[100%] rounded-md overflow-hidden">
            <img src={cert} alt="" className="w-full h-auto transition-all duration-300 transform hover:scale-110"
/>
          </a>

          {/* Description */}
          <div className="md:w-[450px]">
            <h2 className="text-white text-center font-poppins text-[20px] font-bold mb-[15px] text-gradient2">
              Health Website
            </h2>
            <p className="text-center font-poppins text-[15px] text-white">
              A health website provides information on various health topics,
              including medical conditions, wellness tips, nutrition, and
              fitness. It aims to educate and empower individuals to make
              informed decisions about their health. Users can access articles,
              videos, and interactive tools, and find healthcare providers and
              resources for better well-being.
            </p>

            <div className="flex justify-evenly mt-5">
              <DiReact className="text-white w-[30px] h-[30px] rounded-full text-[35px] text-gradient3" />
              <DiCss3 className="text-white w-[30px] h-[30px] rounded-full text-[35px] text-gradient3" />
              <DiJavascript1 className="text-white w-[30px] h-[30px] rounded-full text-[35px] text-gradient3" />
            </div>

            <div className="flex justify-evenly mt-5">
              <a href="#" className="flex items-center  text-white font-poppins">
                <FaGithub className="mx-1" />
                Code
              </a>
              <a href="#" className="flex items-center  text-white font-poppins">
                <FaEye className="mx-1" />
                Live Preview
              </a>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default MyProjects;
