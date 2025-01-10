import React from 'react';
import { DiBootstrap, DiCss3, DiJavascript1 } from 'react-icons/di';
import { FaGithub, FaEye } from 'react-icons/fa';

const WaakyeLandingPageDetails = () => {
  return (
    <div>
              <article className="md:flex md:justify-evenly mb-[150px]">
          {/* Image div */}
          <a href="https://melodic-starlight-f57b44.netlify.app/" className="md:w-[380px] h-[100%] rounded-md overflow-hidden">
            <img src={hungryImg} alt="" className="w-full h-auto transition-all duration-300 transform hover:scale-110"
/>
          </a>

          {/* Description */}
          <div className="md:w-[450px]">
            <h2 className="text-white text-center font-poppins text-[20px] font-bold mb-[15px] text-gradient2">
              Food Website
            </h2>
            <p className="text-center font-poppins text-[15px] text-white">
              A food website educating you on the nutrition value and displays a portion more like an e-commerce website to purchase your desired desert.
            </p>

            <div className="flex justify-evenly mt-5">
              <DiBootstrap className="text-white w-[30px] h-[30px] rounded-full text-[35px] text-gradient3" />
              <DiCss3 className="text-white w-[30px] h-[30px] rounded-full text-[35px] text-gradient3" />
              <DiJavascript1 className="text-white w-[30px] h-[30px] rounded-full text-[35px] text-gradient3" />
            </div>

            <div className="flex justify-evenly mt-5">
              <a href="#" className="flex items-center  text-white font-poppins">
                <FaGithub className="mx-1" />
                Code
              </a>
              <a href="https://melodic-starlight-f57b44.netlify.app/" className="flex items-center  text-white font-poppins">
                <FaEye className="mx-1" />
                Live Preview
              </a>
            </div>
          </div>
        </article>
    </div>
  )
}

export default WaakyeLandingPageDetails