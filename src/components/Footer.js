import React from "react";
import { FiMail, FiArrowRight } from "react-icons/fi";
import { FaGithub, FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <div className="my-[100px] px-[50px]" id="footer">
      <div className="md:flex justify-between items-center">
        <p className="text-[40px] md:text-7xl font-poppins font-bold text-black md:max-w-2xl text-left">
          Let's
          <span className="text-gradient"> Talk</span>
        </p>

        <div className="flex items-center border-b-black border-b-[1px]">
          <FiMail className="mr-[10px]" />
          <input
            type="text"
            placeholder="Your Email Adress"
            className="border-none outline-none font-poppins"
          />
          <button>
            <FiArrowRight />
          </button>
        </div>
      </div>

      <section className="md:flex justify-around items-start mt-[50px]">
        <div>
          <div className="flex">
            <div className="bg-gradient-to-bl from-[#AA00FF] to-[#0DCCF2]  w-7 h-7 rounded-full flex justify-center items-center">
              <h1 className="text-3l text-white font-bold font-poppins">W</h1>
            </div>
            <h2 className="font-bold font-poppins">Winifred</h2>
          </div>
          <p className="font-poppins text-[14px] max-w-[300px]">
            I’m a Frontend Developer based in Ghana. I am very passionate about
            software engineering and I am eager to gain hands-on experience in
            the field of tech. I love to create projects to help solve societal
            problems.
          </p>
        </div>
        {/* Work enquiries */}
        <div className="mt-[20px] md:mt-0">
          <h2 className="font-bold font-poppins">Work enquiries</h2>
          <p className="font-poppins text-[14px]">
            Interested in working with me?
            <p>
              <span className=" font-bold">Email</span>:{" "}
              <a href="#" className="hover:border-b-2 hover:text-blue">
                winifredasante15@gmail.com
              </a>
            </p>
          </p>
        </div>
        {/* Address */}
        <div className="mt-[20px] md:mt-0">
          <h2 className="font-bold font-poppins">My Address</h2>
          <p className="font-poppins text-[14px]">GA-0000-000,Sarabande St.</p>
          <p className="font-poppins text-[14px]">Ghana</p>
        </div>
        
        {/* Socials*/}
        <div>
          <h2 className="font-bold font-poppins text-center">Follow Me</h2>
          <div className=" flex justify-center items-center">
            <a href="">
              <FaInstagram className="mx-2.5 text-[17px] mb-[6px]" />
            </a>
            <a href="">
              <FaLinkedin className="mx-2.5 text-[17px] mb-[6px] " />
            </a>
            <FaGithub className="mx-2.5 text-[17px] mb-[6px] " />
            <SiGmail className="mx-2.5 text-[17px] mb-[5px] " />
          </div>
        </div>
      </section>

      <hr className="mt-[30px] mb-[20px] "/>

      <p className="text-center text-[#c0c0c0] font-poppins">&copy; 2023 Wini's Folio. All rights reserved.</p>
    </div>
  );
};

export default Footer;
