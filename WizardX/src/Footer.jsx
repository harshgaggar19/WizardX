import React from "react";
import SVG from "./SVG";

const Footer = () => {
	return (
		<div className="footer h-auto w-full bg-black text-white py-16 md:py-32">
			<div className="flex flex-row justify-evenly px-5 md:px-16">
				<div className="useful-links text-lg leading-[2] font-normal mb-10 md:mb-0 md:mx-8">
					<h1 className="text-[#B9FF66] text-xl mb-5">Useful links</h1>
					<p className="underline-animation">Content</p>
					<p className="underline-animation">How it works</p>
					<p className="underline-animation">Explore</p>
					<p className="underline-animation">Create</p>
					<p className="underline-animation">Terms and Condition</p>
				</div>
				<div className="useful-links text-lg leading-[2] font-normal mb-10 md:mb-0 md:mx-8">
					<h1 className="text-[#B9FF66] text-xl mb-5">Community</h1>
					<p className="underline-animation">Help center</p>
					<p className="underline-animation">Partners</p>
					<p className="underline-animation">Suggestions</p>
					<p className="underline-animation">Blog</p>
					<p className="underline-animation">Newsletter</p>
				</div>
				<div className="contact text-lg md:text-6xl hidden flex-1 md:flex-4 md:flex flex-col items-start md:items-end leading-[1.2] mb-10 md:mb-0">
					<div className="hover:border-b-2 hover:border-white mb-2">
						hello@wizardx.com
					</div>
					<div>020-564 1688</div>
				</div>
			</div>
			<SVG />
			<div className="last-section flex flex-col md:flex-row justify-between items-center mt-5 mx-5 md:mx-16">
				<div>WizardX &#174; Agency</div>
				<div className="flex flex-col items-center justify-center my-5 md:my-0">
					<p className="underline-animation">All rights reserved | 2024</p>
					<p className="underline-animation">Terms and Conditions</p>
				</div>
				<div>Based in India &#9829;</div>
			</div>
		</div>
	);
};

export default Footer;
