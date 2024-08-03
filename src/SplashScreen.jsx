import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const SplashScreen = () => {
	useGSAP(() => {
		gsap.from("h1", {
			opacity: 0,
			y: 40,
			duration: 0.2,
			delay: 0.1,
			stagger: 0.08,
		});
		gsap.to("h1", {
			opacity: 0,
			duration: 0.2,
			y: -40,
			delay: 1,
			stagger: 0.08,
		});
		gsap.to(".splash-screen", {
			y: "-1000%",
			delay: 2,
			duration: 2,
			scrub: 3,
		});
	});

	return (
		<div className="h-screen w-full overflow-x-hidden splash-screen fixed top-0 left-0 flex items-center justify-center z-[999] bg-black text-white">
			<div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] china flex">
				<h1 className="m-1">W</h1>
				<h1 className="m-1">I</h1>
				<h1 className="m-1">Z</h1>
				<h1 className="m-1">A</h1>
				<h1 className="m-1">R</h1>
				<h1 className="m-1">D</h1>
				<h1 className="m-1">X</h1>
			</div>
		</div>
	);
};

export default SplashScreen;
