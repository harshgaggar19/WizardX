import React from "react";
import SVG from "./SVG";

const Footer = () => {
	
	return (
		<div className="footer h-[82vh] w-full bg-black text-white py-32">
			<div className="flex flex-start justify-items-start ">
				<div className="useful-links text-lg leading-[2] font-normal mx-32 ">
					<h1 className="text-[#B9FF66] text-xl mb-5 ">Useful links</h1>
					<p className="underline-animation">Content</p>
					<p className="underline-animation">How it works</p>
					<p className="underline-animation">Explore</p>
					<p className="underline-animation">Create</p>
					<p className="underline-animation">Terms and Condition</p>
				</div>
				<div className="useful-links text-lg leading-[2] font-normal">
					<h1 className="text-[#B9FF66] text-xl mb-5">Community</h1>
					<p className="underline-animation">Help center</p>
					<p className="underline-animation">Partners </p>
					<p className="underline-animation">Suggestions</p>
					<p className="underline-animation">Blog</p>
					<p className="underline-animation">Newsletter</p>
				</div>
				<div className="contact text-6xl flex-4 flex flex-col items-end w-[60vw] leading-[1.2]">
					<div className="hover:border-b-2 hover:border-white mb-2">
						hello@wizardx.com
					</div>
					<div>020-564 1688</div>
				</div>
			</div>
			<SVG />
			<div className="last-section flex flex-row justify-between items-center mt-5 mx-10">
				<div>WizardX &#174; Agency</div>
				<div className="flex flex-col items-center justify-center">
					<p className="underline-animation">All rights reserved | 2024 </p>
					<p className="underline-animation">Terms and Conditions </p>
				</div>
				<div>Based in India &#9829;</div>
			</div>
		</div>
	);
};

export default Footer;
