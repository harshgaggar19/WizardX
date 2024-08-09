import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
	useGSAP(() => {
		
		const tl2 = gsap.timeline({
			scrollTrigger: {
				trigger: ".section2",
				scroller: "body",
				// markers: true,
				start: "top 80%",
				end: "top 10%",
				scrub: 2,
			},
		});
		tl2.from(".section2", {
			y: 30,
			opacity: 1,
			scale: 0.9,
			duration: 1,
			backgroundColor: "#020617",
			scrollTrigger: {
				trigger: ".section2",
				scroller: "body",
				// markers: true,
				start: "top 100%",
				end: "top 60%",
				scrub: 2,
			},
		});
		tl2.from(".services", {
			y: 30,
			opacity: 0,
			duration: 0.5,
		});
		tl2.from(
			".elem.line1.left",
			{
				x: -300,
				opacity: 0,
				duration: 1,
			},
			"anim1"
		);
		tl2.from(
			".elem.line1.right",
			{
				x: 300,
				opacity: 0,
				duration: 1,
			},
			"anim1"
		);
		tl2.from(
			".elem.line2.left",
			{
				x: -300,
				opacity: 0,
				duration: 1,
			},
			"anim2"
		);
		tl2.from(
			".elem.line2.right",
			{
				x: 300,
				opacity: 0,
				duration: 1,
			},
			"anim2"
		);
	});

	return (
		<section className="section2 w-full -mb-12 mt-86 lg:mt-0 bg-[#020617] rounded-t-[10%] text-white">
			<div className="services py-10 pt-20 px-5 lg:px-36 flex flex-col lg:flex-row items-center justify-start">
				<h3 className="bg-[#B9FF66] text-black font-semibold rounded-sm text-xl px-3 py-2 china">
					Services
				</h3>
				<p className="text-md lg:ml-10 px-10  w-full lg:w-[60%]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
					asperiores fugit quibusdam placeat sequi praesentium nihil repellendus
					explicabo temporibus dolorum!
				</p>
			</div>
			<div className="container h-[86%] w-full px-2 lg:px-32 py-10 lg:flex justify-evenly flex-wrap gap-16">
				<div className="elem lg:w-[45%] line1 left bg-white text-black">
					<div className="elem-part1 h-[100%] lg:w-[50%] w-[100%] flex items-center justify-evenly lg:justify-between flex-col py-4">
						<h2 className="text-xl w-[75%] china font-bold bg-[#B9FF66] px-2">
							Search engine optimization
						</h2>
						<h4 className="flex items-center text-2xl font-bold">
							<i className="ri-arrow-right-up-line px-2 mr-3 bg-black rounded-full text-white "></i>
							Learn More
						</h4>
					</div>
					<div className="elem-part2 h-[100%] w-[50%] hidden sm:block">
						<img src="./hero.avif" alt="" className="h-[100%]" />
					</div>
				</div>
				<div className="elem line1 right lg:w-[45%] bg-[#B9FF66] text-white">
					<div className="elem-part1 h-[100%] lg:w-[50%] w-[100%] flex items-center justify-evenly lg:justify-between  flex-col py-4">
						<h2 className="text-xl w-[75%] china font-bold bg-black px-2">
							Pay per click advertisement
						</h2>
						<h4 className="flex items-center text-2xl text-black font-bold">
							<i className="ri-arrow-right-up-line px-2 mr-3 bg-black rounded-full text-white "></i>
							Learn More
						</h4>
					</div>
					<div className="elem-part2 h-[100%] w-[50%] hidden sm:block">
						<img src="./hero.avif" alt="" className="h-[100%]" />
					</div>
				</div>
				<div className="elem line2 left lg:w-[45%] bg-[#B9FF66] text-white ">
					<div className="elem-part1 h-[100%] lg:w-[50%] w-[100%] flex items-center justify-evenly lg:justify-between flex-col py-4">
						<h2 className="text-xl w-[75%] china font-bold bg-black px-2">
							Social media marketing
						</h2>

						<h4 className="flex items-center text-2xl text-black font-bold">
							<i className="ri-arrow-right-up-line px-2 mr-3 bg-black rounded-full text-white "></i>
							Learn More
						</h4>
					</div>
					<div className="elem-part2 h-[100%] w-[50%] hidden sm:block">
						<img src="./hero.avif" alt="" className="h-[100%]" />
					</div>
				</div>
				<div className="elem line2 right text-black lg:w-[45%] bg-white">
					<div className="elem-part1 h-[100%] lg:w-[50%] w-[100%] flex items-center justify-evenly lg:justify-between  flex-col py-4">
						<h2 className="text-xl w-[75%] china font-bold bg-[#B9FF66] px-2">
							E-mail marketing
						</h2>
						<h4 className="flex items-center text-2xl font-bold">
							<i className="ri-arrow-right-up-line px-2 mr-3 bg-black rounded-full text-white "></i>
							Learn More
						</h4>
					</div>
					<div className="elem-part2 h-[100%] w-[50%] hidden sm:block">
						<img src="./hero.avif" alt="" className="h-[100%]" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
