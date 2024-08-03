import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);



const SplashScreen = () => {
    useGSAP(() => {
        gsap.from("h1", {
            opacity:0,
            y: 40,
            duration: 0.2,
            delay: 0.1,
            stagger: 0.08,
        })
        gsap.to("h1", {
            opacity: 0,
            duration: 0.2,
            y: -40,
            delay: 1,
            stagger:0.08
        })
         gsap.to(".splash-screen", {
            y: "-1000%",
            delay: 2,
            duration: 2,
            scrub:3
         }); 
        
    })
    
	return (
		<div className="h-screen w-full overflow-x-hidden splash-screen fixed top-0 left-0 flex items-center text-9xl justify-center z-[999] bg-black text-white china ">
			<h1>W</h1>
			<h1>I</h1>
			<h1>Z</h1>
			<h1>A</h1>
			<h1>R</h1>
			<h1>D</h1>
			<h1>X</h1>
		</div>
	);
};

export default SplashScreen;
