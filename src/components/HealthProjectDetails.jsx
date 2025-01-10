import React from 'react';
import health from "../components/images/health.png";
import { DiReact, DiCss3, DiJavascript1 } from "react-icons/di";
import { FaGithub, FaEye } from 'react-icons/fa';


const HealthProjectDetails = () => {
  return (
    <div>
           <article className="md:flex md:justify-evenly mb-[150px]">
          {/* Image div */}
          <a href="https://wi-care.netlify.app/" className="md:w-[380px] h-[300px] rounded-md overflow-hidden">
            <img src={health} alt="" className="w-full h-full object-cover transition-all duration-300 transform hover:scale-110"
/>
          </a>

          {/* Description */}
          <div className="md:w-[450px]">
            <h2 className="text-white text-center font-poppins text-[20px] font-bold mb-[15px] text-gradient2">
              Health Website
            </h2>
            <p className="text-center font-poppins text-[15px] text-white">
              A health website provides information on various health topics,
              including medical conditions and fitness. It aims to allow doctors login to a database for clients data.
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
              <a href="https://wi-care.netlify.app" className="flex items-center  text-white font-poppins">
                <FaEye className="mx-1" />
                Live Preview
              </a>
            </div>
          </div>
        </article>
    </div>
  )
}

export default HealthProjectDetails