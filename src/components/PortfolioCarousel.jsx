import React from "react";

import hungryImg from "../components/images/hungryimg.png";
import cert from "../components/images/cert2.png";
import health from "../components/images/health.png";
import news from "../components/images/news-agric.png";
import { DiBootstrap, DiCss3, DiJavascript1, DiReact } from "react-icons/di";
import { FaGithub, FaEye } from "react-icons/fa";
import "./myStyle.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const PortfolioCarousel = () => {
    const projects = [ 
        {
            id: 1,
            title: "Food Website",
            description: "A food website educating you on the nutrition value and displays a portion more like an e-commerce website to purchase your desired desert.",
            image: hungryImg,
            stack: ["DiBootstrap", "DiCss3", "DiJavascript1"],
            github: "",
            live: "https://melodic-starlight-f57b44.netlify.app/",
        },

        {
            id: 2,
            title: "Health Website",
            description: "A health website educating you on the nutrition value and displays a portion more like an e-commerce website to purchase your desired desert.",
            image: health,
            stack: ["DiBootstrap", "DiCss3", "DiJavascript1"],
            github: "",
            live: "https://melodic-starlight-f57b44.netlify.app/",
        },

        {
            id: 3,
            title: "News Website",
            description: "A news website educating you on the nutrition value and displays a portion more like an e-commerce website to purchase your desired desert.",
            image: news,
            stack: ["DiBootstrap", "DiCss3", "DiJavascript1"],
            github: "",
            live: "https://melodic-starlight-f57b44.netlify.app/",
        },
    ]
	return (
		<div className=" mb-[150px]">
			<div className="overflow-x-scroll">
  <div className="flex flex-nowrap gap-4 p-4">
    {projects.map((project) => (
      <article
        key={project.id}
        className="lg:grid lg:grid-cols-2 flex-shrink-0 gap-2 bg-[#3c3c3c] w-full rounded-md overflow-hidden lg:h-[326px] lg:w-[996px]"
      >
        {/* Image div */}
        <a
          href="https://melodic-starlight-f57b44.netlify.app/"
          className="h-full rounded-md overflow-hidden lg:w-[500px] md:h-auto md:rounded-none mx-auto"
        >
          <img
            src={project.image}
            alt=""
            className="w-full h-full transition-all duration-300 transform hover:scale-110"
          />
        </a>

        {/* Description */}
        <div className="p-4">
          <p className="text-[#0DCCF2] text-[16px] font-poppins">Web Design</p>
          <h2 className="text-white font-poppins text-[24px] font-bold mb-[15px]">
            {project.title}
          </h2>
          <p className="font-poppins text-[15px] text-white">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex items-center gap-4 mt-5">
            {project.stack.map((tech, index) => {
              const IconComponent = {
                DiBootstrap: DiBootstrap,
                DiCss3: DiCss3,
                DiJavascript1: DiJavascript1,
                DiReact: DiReact,
              }[tech];

              return (
                <IconComponent
                  key={index}
                  className="text-white w-[30px] h-[30px] rounded-full text-gradient3"
                />
              );
            })}
          </div>

          {/* Links */}
          <div className="flex justify-between items-center mt-5">
            <a
              href="#"
              className="flex items-center text-white font-poppins"
            >
              <FaGithub className="mx-1" />
              Code
            </a>
            <a
              href="https://melodic-starlight-f57b44.netlify.app/"
              className="flex items-center text-white font-poppins"
            >
              <FaEye className="mx-1" />
              Live Preview
            </a>
          </div>
        </div>
      </article>
    ))}
  </div>
</div>

		</div>
	);
};

export default PortfolioCarousel;
