import React from "react";
import { SwiperComp } from "./Swiper";

const MyProjects = () => {
  return (
    <div className="mx-[50px]">
      <div className="md:flex md:justify-between md:items-center mt-[200px] ">
        <h2 className="text-[30px] md:text-6xl font-bold text-[#181818]  md:text-left font-poppins">
          Creating <span className="text-gradient"> Outstanding </span>
          <br />
          Digital Solutions
        </h2>

        <div className="relative">
        <div className="h-[56px] w-[174px] bg-gradient-to-bl from-[#AA00FF] to-[#0DCCF2] "></div>
        <button className="h-[56px] w-[174px] bg-[#181818] absolute -top-[4px] -left-[4px] text-white font-poppins">
            View All Projects
        </button>
        </div>
      </div>
     
  <SwiperComp/>
    </div>
  );
};

export default MyProjects;
