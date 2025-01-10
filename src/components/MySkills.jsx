import React from "react";
import { Icon } from "@iconify/react";
import logo from "../components/images/logo.png";
import logo2 from "../components/images/Logo2.png";
import logo3 from "../components/images/Logo3.png";

const MySkills = () => {
  return (
    <div className="mt-[200px] mb-[150px] lg:px-20 py-10 px-5" id="services">
      <h2 className="text-[30px] md:text-6xl font-extrabold text-white text-center mb-12 ">
        Creating <span className="bg-clip-text text-transparent text-gradient">Beautiful Websites</span>
        <br /> and <span className="bg-clip-text text-transparent text-gradient">Mobile Apps </span> 
        is My Passion
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* What I can do */}
        <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-500">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Services" className="w-20 h-20" />
          </div>
          <h3 className="text-[24px] font-bold text-white mb-3 text-center">What I can do for you</h3>
          <p className="text-[18px] text-gray-300 font-normal mb-6 text-center hidden">
            Faster, better products that your users love. Here's what I offer:
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-gray-900 bg-opacity-30 p-4 rounded-lg shadow-md">
              <Icon icon="mdi:tablet-cellphone" className="text-pink-400 text-3xl" />
              <span className="text-white font-bold">Mobile App Design</span>
            </div>
            <div className="flex items-center gap-4 bg-gray-900 bg-opacity-30 p-4 rounded-lg shadow-md">
              <Icon icon="mdi:web" className="text-blue-400 text-3xl" />
              <span className="text-white font-bold">Web Design</span>
            </div>
            <div className="flex items-center gap-4 bg-gray-900 bg-opacity-30 p-4 rounded-lg shadow-md">
              <Icon icon="mdi:magnify" className="text-green-400 text-3xl" />
              <span className="text-white font-bold">UX Auditing</span>
            </div>
          </div>
        </div>

        {/* What I work with */}
        <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-500">
          <div className="flex justify-center mb-6">
            <img src={logo2} alt="Tools" className="w-20 h-20" />
          </div>
          <h3 className="text-[24px] font-bold text-white mb-3 text-center">What I work with</h3>
          <p className="text-[18px] text-gray-300 font-normal mb-6 text-center hidden">
            Work with efficient tools for great user experience. Here are my tools:
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="flex items-center gap-4 bg-gray-900 bg-opacity-30 p-4 rounded-lg shadow-md">
              <Icon icon="mdi:react" className="text-blue-500 text-3xl" />
              <span className="text-white font-bold">React</span>
            </div>
            <div className="flex items-center gap-4 bg-gray-900 bg-opacity-30 p-4 rounded-lg shadow-md">
              <Icon icon="mdi:cellphone-link" className="text-purple-400 text-3xl" />
              <span className="text-white font-bold">React-Native</span>
            </div>
            <div className="flex items-center gap-4 bg-gray-900 bg-opacity-30 p-4 rounded-lg shadow-md">
              <Icon icon="mdi:bootstrap" className="text-indigo-400 text-3xl" />
              <span className="text-white font-bold">Bootstrap</span>
            </div>
            <div className="flex items-center gap-4 bg-gray-900 bg-opacity-30 p-4 rounded-lg shadow-md">
              <Icon icon="mdi:language-javascript" className="text-yellow-400 text-3xl" />
              <span className="text-white font-bold">JavaScript</span>
            </div>
            <div className="flex items-center gap-4 bg-gray-900 bg-opacity-30 p-4 rounded-lg shadow-md">
              <Icon icon="mdi:cellphone-link" className="text-purple-400 text-3xl" />
              <span className="text-white font-bold">React-Native</span>
            </div>
            <div className="flex items-center gap-4 bg-gray-900 bg-opacity-30 p-4 rounded-lg shadow-md">
              <Icon icon="mdi:bootstrap" className="text-indigo-400 text-3xl" />
              <span className="text-white font-bold">Bootstrap</span>
            </div>
            <div className="flex items-center gap-4 bg-gray-900 bg-opacity-30 p-4 rounded-lg shadow-md">
              <Icon icon="mdi:language-javascript" className="text-yellow-400 text-3xl" />
              <span className="text-white font-bold">JavaScript</span>
            </div>
          </div>
        </div>

        {/* What you can expect */}
        <div className="bg-white bg-opacity-10 p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-500">
          <div className="flex justify-center mb-6">
            <img src={logo3} alt="Expectations" className="w-20 h-20" />
          </div>
          <h3 className="text-[24px] font-bold text-white mb-3 text-center">What you can expect</h3>
          <p className="text-[18px] text-gray-300 font-normal mb-6 text-center hidden">
            Developing websites and apps with outstanding user interfaces.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-gray-900 bg-opacity-30 p-4 rounded-lg shadow-md">
              <Icon icon="mdi:account-group" className="text-teal-400 text-3xl" />
              <span className="text-white font-bold">User-friendly websites</span>
            </div>
            <div className="flex items-center gap-4 bg-gray-900 bg-opacity-30 p-4 rounded-lg shadow-md">
              <Icon icon="mdi:flash" className="text-orange-400 text-3xl" />
              <span className="text-white font-bold">Fast and efficient</span>
            </div>
            <div className="flex items-center gap-4 bg-gray-900 bg-opacity-30 p-4 rounded-lg shadow-md">
              <Icon icon="mdi:palette" className="text-red-400 text-3xl" />
              <span className="text-white font-bold">Neat Interfaces</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
