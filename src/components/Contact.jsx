import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Contact = () => {
	return (
		<div className="mb-[150px] pb-16 px-4 lg:px-20" id="contact">
			<div className="bg-[#34363A61] border-2 border-[#344054] p-6 w-full rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8">
				<h4 className="font-semibold text-[20px] text-white mb-4">
					Got an idea? I’ve got the frontend expertise to bring it to life.
					Whether it’s building intuitive interfaces, optimizing performance, or
					creating seamless user experiences, I’m ready to collaborate and turn
					your vision into reality. Drop me a message, and let’s code something
					amazing together!
				</h4>
				<div>
					<div class="max-w-md mx-auto mt-10 space-y-6">
						<div class="relative">
							<input
								type="text"
								id="name"
								class="peer w-full border-b bg-transparent border-gray-300 px-4 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								placeholder="Your Name"
							/>
							<label
								for="name"
								class="absolute left-4 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500"
							>
								Name
							</label>
						</div>

						<div class="relative">
							<input
								type="tel"
								id="number"
								class="peer w-full border-b bg-transparent border-gray-300 px-4 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								placeholder="Your Number"
							/>
							<label
								for="number"
								class="absolute left-4 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500"
							>
								Number
							</label>
						</div>

						<div class="relative">
							<input
								type="email"
								id="email"
								class="peer w-full border-b bg-transparent border-gray-300 px-4 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								placeholder="Your Email"
							/>
							<label
								for="email"
								class="absolute left-4 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500"
							>
								Email
							</label>
						</div>

						<div class="relative">
							<textarea
								id="message"
								rows="4"
								class="peer w-full border-b bg-transparent border-gray-300 px-4 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
								placeholder="How can I help?"
							></textarea>
							<label
								for="message"
								class="absolute left-4 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-blue-500"
							>
								How can I help?
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
