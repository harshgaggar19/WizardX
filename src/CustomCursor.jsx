import React from "react";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const CustomCursor = () => {
	var cursor = document.querySelector("#cursor");
	var trails = document.querySelectorAll(".trail");

	window.addEventListener("mousemove", function (dets) {
		gsap.to(cursor, {
			x: dets.clientX,
			y: dets.clientY,
			ease: "power3.out",
		});

		trails.forEach((trail, index) => {
			gsap.to(trail, {
				x: dets.clientX,
				y: dets.clientY,
				ease: "power3.out",
				delay: index * 0.05,
			});
		});
	});
	return (
		<>
			<img
				src="https://www.svgrepo.com/show/226243/navigation-ui.svg"
				alt="i"
				id="cursor"
				className="h-[20px] w-[20px] fixed z-50 pointer-events-none"
			/>
			<div class="trail bg-red-600"></div>
			<div class="trail bg-pink-600"></div>
			<div class="trail bg-blue-300"></div>
			<div class="trail bg-blue-600"></div>
			<div class="trail bg-yellow-400"></div>
			<div class="trail bg-yellow-200"></div>
		</>
	);
};

export default CustomCursor;
