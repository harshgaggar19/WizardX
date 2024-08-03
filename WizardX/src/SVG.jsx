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
		<div
			id="string"
			className="w-full h-[100px] relative mx-auto px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72"
			ref={stringRef}
		>
			<svg
				className="w-full h-full"
				viewBox="0 0 1000 200"
				preserveAspectRatio="none"
			>
				<path
					d="M 10 100 Q 500 100 990 100"
					stroke="white"
					fill="transparent"
				/>
			</svg>
		</div>
	);
};

export default SVG;
