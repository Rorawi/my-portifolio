import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdOutlineArrowOutward } from "react-icons/md";

import { Icon } from '@iconify/react';
import homeIcon from '@iconify-icons/mdi/home';
import alertIcon from '@iconify-icons/mdi/alert';

import hungryImg from "../components/images/hungryimg.png";
import health from "../components/images/health.png";
import news from "../components/images/news-agric.png";


const MyProjects = () => {
	const projects = [
		{
			id: 1,
			title: "Food Website",
			description:
				"A food website educating you on the nutrition value and displays a portion more like an e-commerce website to purchase your desired desert.",
			image: hungryImg,
			stack: ["DiBootstrap", "DiCss3", "DiJavascript1"],
			github: "",
			live: "https://melodic-starlight-f57b44.netlify.app/",
		},

		{
			id: 2,
			title: "Health Website",
			description:
				"A health website educating you on the nutrition value and displays a portion more like an e-commerce website to purchase your desired desert.",
			image: health,
			stack: ["DiBootstrap", "DiCss3", "DiJavascript1"],
			github: "",
			live: "https://melodic-starlight-f57b44.netlify.app/",
		},

		{
			id: 3,
			title: "News Website",
			description:
				"A news website educating you on the nutrition value and displays a portion more like an e-commerce website to purchase your desired desert.",
			image: news,
			stack: ["DiBootstrap", "DiCss3", "DiJavascript1"],
			github: "",
			live: "https://melodic-starlight-f57b44.netlify.app/",
		},
	];
	return (
		<div>
			<div className="mb-[150px] pb-16 px-4 lg:px-20" id="portifolio">
				<h1 className="font-semibold text-[20px] md:text-[45px] text-white mb-4">
					Feature Works
				</h1>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{/* <div className="bg-[#34363A61] border-2 border-[#344054] p-6 w-full rounded-xl overflow-hidden"> */}
					<div className="bg-[#81363F] border-2 border-[#c35461] p-3 md:p-6 w-full rounded-xl overflow-hidden">
						<h4 className="font-bold text-white mb-1 text-xl">New App</h4>
						<p className="text-white text-sm">
							A platform that helps students easily find accomodation
						</p>

						<div className="flex justify-between space-x-4 my-3">
							<div className="flex justify-start space-x-3">
								<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:scale-105 transition-all duration-100">
								<Icon icon="vscode-icons:file-type-html" className="text-orange-500 text-3xl" />
								</div>
								<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:scale-105 transition-all duration-100">
								<Icon icon="vscode-icons:file-type-css" className="text-blue-600 text-3xl" />
								</div>

								<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:scale-105 transition-all duration-100">
								<Icon icon="vscode-icons:file-type-js" className="text-yellow-400 text-3xl" />
								</div>
							</div>
							<div className="flex justify-end space-x-2">
								<a
									href="#"
									className="w-10 h-10 rounded-full bg-white shadow-sm shrink-0 flex items-center justify-center hover:scale-105 transition-all duration-100"
								>
									<FaGithub className=" text-black text-2xl" />
								</a>
								<a
									href="#"
									className="w-10 md:w-fit h-10 rounded-full md:px-2 bg-white shadow-sm  shrink-0 flex items-center justify-center hover:scale-105 transition-all duration-100"
								>
									<MdOutlineArrowOutward className="text-black text-2xl" />
									<h6 className="font-semibold hidden md:block">Visit Project</h6>
								</a>
							</div>
						</div>

						<div className="w-full rounded-xl overflow-hidden md:h-[361px] mt-7">
							<img src={hungryImg} alt="" className="w-full h-full" />
						</div>
					</div>
					<div className="bg-[#0B4A6F] border-2 border-[#026AA2] p-3 md:p-6 w-full rounded-xl overflow-hidden">
						<h4 className="font-bold text-white mb-1 text-xl">New App</h4>
						<p className="text-white text-sm">
							A platform that helps students easily find accomodation
						</p>

						<div className="flex justify-between space-x-4 my-3">
							<div className="flex justify-start space-x-3">
								<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:scale-105 transition-all duration-100">
								<Icon icon="vscode-icons:file-type-html" className="text-orange-500 text-3xl" />
								</div>
								<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:scale-105 transition-all duration-100">
								<Icon icon="vscode-icons:file-type-css" className="text-blue-600 text-3xl" />
								</div>

								<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:scale-105 transition-all duration-100">
								<Icon icon="vscode-icons:file-type-js" className="text-yellow-400 text-3xl" />
								</div>
							</div>
							<div className="flex justify-end space-x-2">
								<a
									href="#"
									className="w-10 h-10 rounded-full bg-white shadow-sm shrink-0 flex items-center justify-center hover:scale-105 transition-all duration-100"
								>
									<FaGithub className=" text-black text-2xl" />
								</a>
								<a
									href="#"
									className="w-10 md:w-fit h-10 rounded-full md:px-2 bg-white shadow-sm shrink-0 flex items-center justify-center hover:scale-105 transition-all duration-100"
								>
									<MdOutlineArrowOutward className="text-black text-2xl" />
									<h6 className="font-semibold hidden md:block">Visit Project</h6>
								</a>
							</div>
						</div>

						<div className="w-full rounded-xl overflow-hidden md:h-[361px] mt-7">
							<img src={hungryImg} alt="" className="w-full h-full" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyProjects;
