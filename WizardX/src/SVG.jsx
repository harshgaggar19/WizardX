import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const SVG = () => {
	const stringRef = useRef(null);

	useEffect(() => {
		let path = `M 10 100 Q 500 100 990 100`;
		let finalPath = `M 10 100 Q 500 100 990 100`;

		const string = stringRef.current;

		const handleMouseMove = (event) => {
			const rect = string.getBoundingClientRect();
			const x = event.clientX - rect.left;
			const y = event.clientY - rect.top;

			path = `M 10 100 Q ${x} ${y} 990 100`;

			gsap.to("svg path", {
				attr: {
					d: path,
				},
				duration: 0.3,
				ease: "power3.out",
			});
		};

		const handleMouseLeave = () => {
			gsap.to("svg path", {
				attr: {
					d: finalPath,
				},
				duration: 1.5,
				ease: "elastic.out(1, 0.2)",
			});
		};

		string.addEventListener("mousemove", handleMouseMove);
		string.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			string.removeEventListener("mousemove", handleMouseMove);
			string.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	return (
		<div id="string" className="w-full px-72 h-[100px] relative" ref={stringRef}>
			<svg width="1000" height="200">
				<path
					d="M 10 10 Q 500 100 990 10"
					stroke="white"
					fill="transparent"
				/>
			</svg>
		</div>
	);
};

export default SVG;
