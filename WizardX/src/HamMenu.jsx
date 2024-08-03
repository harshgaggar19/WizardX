import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

import { useEffect } from "react";

const HamMenu = ({menu}) => {
    useEffect(() => {
        if (menu) {
            gsap.to(".menu", {
                x: "-100%",
                duration: 0.5,
                opacity: 1,
            });
        }
        // } else {
        //     gsap.to(".menu", {
        //         x: -1000,
        //         duration: 0.5,
        //         opacity: 0,
        //     });
        // }
    }, [menu]);
    const handleClick = () => {
        gsap.to(".menu", {
					x: 0,
					duration: 0.5,
					opacity: 0,
				});
    };
	return (
		<div
			className={`menu ${menu ? "block" : "hidden"} h-screen w-full z-[40] absolute bg-black px-10 py-20 leading-[3] text-white top-0 left-[100%] text-lg`}
		>
			<img
				src="close.svg"
				alt="X"
				className="relative left-64 z-[40] invert"
				onClick={handleClick}
			/>
			<h4 className="hover:underline">About Us</h4>
			<h4 className="hover:underline">Services</h4>
			<h4 className="hover:underline">Use cases</h4>
			<h4 className="hover:underline">Blog</h4>
			<h4 className="hover:underline">Pricing</h4>
			<button className="border-2 px-5 py-1 mt-4 bg-white text-black font-semibold rounded-lg hover:bg-slate-200 ">
				Request a quote
			</button>
		</div>
	);
};

export default HamMenu;
