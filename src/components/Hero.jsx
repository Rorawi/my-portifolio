import React from "react";
import Navbar from "./Navbar";
import MySkills from "./MySkills";
import profile from "../components/images/profile.jpg";
import "./myStyle.css";
import bgpattern from "../components/images/bgpattern.avif";
import { MdOutlineArrowOutward } from "react-icons/md";


const Hero = () => {
	return (
		<div className="h-[100vh] hero-section relative overflow-hidden">
			<img
				src={bgpattern}
				alt=""
				className="absolute top-0 left-0 lg:h-full opacity-20"
			/>
			<Navbar className="" />
			<div className="pb-16 px-10 md:px-20 flex flex-col justify-center items-center h-full z-20 relative">
				<div className="md:max-w-5xl">
					<div>
						<p className="text-[40px] md:text-7xl  font-bold dark:text-white text-black text-center">
							I'm Winifred
							<span className="text-gradient">
								<br />A Frontend Developer
							</span>
						</p>
						<p className=" font-normal py-5 md:py-10 text-center text-slate-400 max-w-xl mx-auto">
							{/* I’m a Frontend Developer based in Ghana */}I am a passionate
							Frontend Developer with a keen interest in building responsive and
							interactive web applications. I am proficient in HTML, CSS,
							JavaScript, React, and Tailwind CSS.
						</p>
					</div>

				</div>
						
			</div>
			<img
				src={bgpattern}
				alt=""
				className="absolute bottom-0 right-0 lg:h-full opacity-20 rotate-180"
			/>
		</div>
	);
};

export default Hero;
