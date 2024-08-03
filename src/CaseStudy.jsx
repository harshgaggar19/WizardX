import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const CaseStudy = () => {
	useGSAP(() => {
		gsap.from(".case-study", {
			opacity: 0,
			duration: 0.5,
			y: 30,
			scrollTrigger: {
				trigger: ".case-study",
				scroller: "body",
				// markers: true,
				start: "top 80%",
				end: "top 50%",
				scrub: 2,
			},
		});
		gsap.from(".white-box", {
			opacity: 0,
			duration: 0.5,
			y: 30,
			scrollTrigger: {
				trigger: ".white-box",
				scroller: "body",
				// markers: true,
				start: "top 70%",
				end: "top 50%",
				scrub: 2,
			},
		});
		gsap.from(".black-box p", {
			opacity: 0,
			duration: 0.5,
			y: 30,
			scrollTrigger: {
				trigger: ".white-box",
				scroller: "body",
				// markers: true,
				start: "top 30%",
				end: "top 10%",
				scrub: 2,
			},
		});
	});

	return (
		<section>
			<div className="case-study py-10 px-5 lg:px-36 flex flex-col lg:flex-row items-center justify-start mt-16">
				<h3 className="bg-[#B9FF66] font-semibold rounded-sm text-xl px-3 py-2 china">
					Case Study
				</h3>
				<p className="text-md lg:ml-10 px-10 w-full lg:w-[60%]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
					asperiores fugit quibusdam placeat sequi praesentium nihil repellendus
					explicabo temporibus dolorum!
				</p>
			</div>
			<div className="white-box h-full elem w-[95%] lg:w-[78%] lg:h-80 mx-2 lg:mx-40">
				<div className="elem-part1 flex-1 h-[100%] w-[50%] lg:w-[50%] flex items-center justify-between lg:justify-between flex-col ">
					<h2 className="lg:text-3xl text-lg w-[75%] china font-bold px-2">
						Let's make this happen..
					</h2>
					<p className="flex w-[75%] items-center text-sm sm:text-md lg:text-lg px-2">
						Contact us today to learn more about how our digital marketing
						services can help you business grow and succeed online.
					</p>
					<button className="px-3 py-1 relative lg:-left-20 mb-4 text-md lg:text-lg lg:px-5 cursor-none lg:py-3 rounded-md bg-slate-900 text-white mt-3 hover:shadow-slate-400 shadow-lg transition duration-200">
						Get Your Free Proposal
					</button>
				</div>
				<div className="elem-part2 h-[100%] w-[50%] hidden lg:block">
					<img
						src="https://www.rsmediasolution.in/Hero.svg"
						alt=""
						className="h-[100%] lg:relative left-20"
					/>
				</div>
			</div>

			<div className="black-box lg:flex p-6 lg:flex-row flex-col w-[95%] rounded-[45px]  lg:w-[78%] lg:h-72 mx-2 mb-4 lg:mx-40 mt-20 bg-slate-950 text-white">
				<div className="elem-part1 h-[80%] border-b-2 lg:border-b-0 lg:border-r-2 mt-5 py-5 border-gray-700 flex items-center flex-col ">
					<p className="flex w-[75%] items-center text-md px-2">
						For a local restaurant, we implemented a targeted PPC campaign that
						resulted in a 50% increase in website traffic and a 25% increase in
						sales
					</p>
					<h4 className="flex items-center text-lg text-[#B9FF66] mt-4 font-semibold">
						<i className="ri-arrow-right-up-line text-[#B9FF66] "></i>
						Learn More
					</h4>
				</div>
				<div className="elem-part1 h-[80%] border-b-2 lg:border-b-0 lg:border-r-2 mt-5 py-5 border-gray-700 flex items-center flex-col ">
					<p className="flex w-[75%] items-center text-md px-2">
						For a B2B software company ,we developed an SEO strategy that
						resulted in a first page ranking for key keyword and a 200% increase
						in organic traffic.
					</p>
					<h4 className="flex items-center text-lg text-[#B9FF66] mt-4 font-semibold">
						<i className="ri-arrow-right-up-line text-[#B9FF66] "></i>
						Learn More
					</h4>
				</div>
				<div className="elem-part1 h-[80%] mt-5 py-5 flex items-center flex-col ">
					<p className="flex w-[75%] items-center text-md px-2">
						For a national retail chain, we created a social media marketing
						campaign that increased followers by 25% and generated a 20%
						increase in organic sales
					</p>
					<h4 className="flex items-center text-lg text-[#B9FF66] mt-4 font-semibold">
						<i className="ri-arrow-right-up-line text-[#B9FF66] "></i>
						Learn More
					</h4>
				</div>
			</div>
		</section>
	);
};

export default CaseStudy;
