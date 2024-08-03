import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";
import Footer from "./Footer";
import Home from "./Home";
import Services from "./Services";
import CaseStudy from "./CaseStudy";
import CustomCursor from "./CustomCursor";
import ScrollingText from "./ScrollingText";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const App = () => {
	
	let [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="overflow-x-hidden">
			{isLoading ? <SplashScreen /> : <></>}
			<CustomCursor />
			<Home />
			<Services />
			<CaseStudy />
			<ScrollingText/>
			<Footer />
			
		</div>
	);
};

export default App;
