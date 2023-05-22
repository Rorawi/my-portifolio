import React from "react";
import { SwiperComp } from "./Swiper";

const MyProjects = () => {
  return (
    <div className="px-[50px] py-[100px] mt-[200px]  bg-[#181818]" id="portifolio">
      <div className="md:flex md:justify-between md:items-center ">
        <h2 className="text-[30px] md:text-6xl font-bold text-[#fff]  md:text-left font-poppins">
          Creating <span className="text-gradient"> Outstanding </span>
          <br />
          User Interfaces
        </h2>

        <div className="relative">
        <div className="h-[56px] w-[174px] bg-gradient-to-bl from-[#AA00FF] to-[#0DCCF2] "></div>
        <button className="h-[56px] w-[174px] bg-[#181818] absolute -top-[4px] -left-[4px] text-white font-poppins">
            My Portifolio
        </button>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
