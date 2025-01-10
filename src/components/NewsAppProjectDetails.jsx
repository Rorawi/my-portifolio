import React from 'react';
import { DiReact, DiCss3 } from 'react-icons/di';
import news from "../components/images/news-agric.png";
import { FaGithub, FaEye } from 'react-icons/fa';

const NewsAppProjectDetails = () => {
  return (
    <div>
             {/* Food Website */}
             <article className="md:flex md:justify-evenly mb-[150px] flex-row-reverse">
          {/* Image div */}
          <a href="https://www.linkedin.com/posts/winifredasantewaaasante_codetrain-codetrainchallenge-reactnative-activity-7050575490369122304-w2JH?utm_source=share&utm_medium=member_desktop" className="md:w-[380px] h-[300px] rounded-md overflow-hidden">
            <img src={news} alt="" className="w-full h-full object-contain transition-all duration-300 transform hover:scale-110"/>
          </a>

          {/* Description */}
          <div className="md:w-[450px]">
            <h2 className="text-white text-center font-poppins text-[20px] font-bold mb-[15px] text-gradient2">
              News-Weather App
            </h2>
            <p className="text-center font-poppins text-[15px] text-white">
              A news weather app that contains information of your weather and crops you can plant according to your location.
              It also has a feature that gives you saftey precautions on the various weather conditions.
            </p>

            <div className="flex justify-evenly mt-5">
              <DiReact className="text-white w-[30px] h-[30px] rounded-full text-[35px] text-gradient3" />
              <DiCss3 className="text-white w-[30px] h-[30px] rounded-full text-[35px] text-gradient3" />
              {/* <DiJavascript1 className="text-white w-[30px] h-[30px] rounded-full text-[35px] text-gradient3" /> */}
            </div>

            <div className="flex justify-evenly mt-5">
              <a href="#" className="flex items-center  text-white font-poppins">
                <FaGithub className="mx-1" />
                Code
              </a>
              <a href="https://www.linkedin.com/posts/winifredasantewaaasante_codetrain-codetrainchallenge-reactnative-activity-7050575490369122304-w2JH?utm_source=share&utm_medium=member_desktop" className="flex items-center  text-white font-poppins">
                <FaEye className="mx-1" />
                Live Preview
              </a>
            </div>
          </div>
        </article>
    </div>
  )
}

export default NewsAppProjectDetails