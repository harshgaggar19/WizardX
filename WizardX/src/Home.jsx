import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

import { useState, useEffect } from "react";
import HamMenu from "./HamMenu";


const Home = () => {
    const [menu, setMenu] = useState(false)
	useGSAP(() => {
        const tl = gsap.timeline();
        
		tl.from("nav h4,nav button", {
			y: -40,
			duration: 0.3,
			opacity: 0,
			delay: 2.5,
			stagger: 0.15,
		});
		tl.from(
			".center-part1",
			{
				x: -200,
				opacity: 0,
				duration: 1,
			},
			"-=0.3"
		);
		tl.from(".center-part1 p", {
			x: 500,
			opacity: 0,
			duration: 1,
		},"-=0.3");
        // tl.from(".center-part1 button", {
        //     x:-30,
		// 	opacity: 0,
		// 	duration: 0.4,
		// });
		tl.from(
			".center-part2 img",
			{
				opacity: 0,
				duration: 0.5,
				x: 200,
			},
			"-=1"
		);
		tl.from(".sectionbottom img", {
			opacity: 0,
			y: 30,
			stagger: 0.15,
			duration: 0.6,
		});
    });
    
    
    useEffect(() => {
            if (menu) {
                gsap.to(".menu", {
                    x: "-100%",
                    duration: 0.5,
                });
            } else {
                gsap.to(".menu", {
                    x: "100%",
                    duration: 0.5,
                });
            }
        }, [menu]);

    const handleClick = () => {
         setMenu(!menu)
        
    }
	return (
		<section className="section1 h-screen w-full mb-5">
			<nav className=" flex justify-between items-center px-8 py-3">
				<h4 className="text-3xl font-semibold cursor-pointer text-black">
					<i className="ri-bard-fill mr-2"></i> WizardX
				</h4>
				<img
					src="menu.svg"
					alt=""
					className="lg:hidden"
					onClick={handleClick}
				/>
				<HamMenu menu={menu} />

				<div className="part2 hidden lg:flex justify-center items-center gap-14 text-lg font-medium">
					<h4 className="underline-animation">About Us</h4>
					<h4 className="underline-animation">Services</h4>
					<h4 className="underline-animation">Use cases</h4>
					<h4 className="underline-animation">Blog</h4>
					<h4 className="underline-animation">Pricing</h4>
					<button className="border-2 px-5 py-3 rounded-md">
						Request a quote
					</button>
				</div>
			</nav>
			<hr />
			<div className="center h-[65vh] w-[90vw] lg:w-[100vw] lg:flex p-5 lg:p-[50px] pb-0">
				<div className="center-part1 h-[100%] lg:w-[49%]">
					<h1 className="text-5xl lg:text-7xl font-bold china leading-[1.15]">
						Navigating the digital landscape for success...
					</h1>
					<p className="text-sm lg:text-lg w-fit lg:w-[95%] mt-6 mb-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, qui!
						Distinctio rerum sunt perferendis culpa a tempore ratione, magnam
						dolore, accusamus quaerat soluta quas in, cum libero ex excepturi
						placeat.
					</p>

					<button className="px-3 py-1 text-md lg:text-lg lg:px-5 lg:py-3 rounded-md bg-slate-900 text-white mt-3 hover:shadow-slate-400 shadow-lg">
						Book a Consultaion
					</button>
				</div>
				<div className="center-part2 hidden lg:block h-[100%] w-[55%] relative">
					<img
						src="https://www.rsmediasolution.in/Hero.svg"
						alt=""
						className="h-[100%] absolute right-20"
					/>
				</div>
			</div>
			<div className="sectionbottom w-full h-[100vh] lg:mt-5  lg:ml-10 flex flex-row flex-wrap ">
				<img
					src="https://freelogopng.com/images/all_img/1688364239amazon-logo-black.png"
					alt=""
					className="h-[30px] relative lg:top-4 top-8 lg:scale-[0.8] lg:h-[60px] m-10"
				/>
				<img
					src="https://logowik.com/content/uploads/images/dribbble.jpg"
					alt=""
					className="h-[60px] lg:scale-[1.6] relative top-4 m-10"
				/>
				<img
					src="https://www.mac-group.com/wp-content/uploads/2018/02/Hubspot.png"
					alt=""
					className="h-[60px] lg:relative top-4 lg:scale-[1.6] m-10"
				/>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm4EujEwAzZ_ta6AODoKd3AoLxqrMejBwLSw&s"
					alt=""
					className="h-[30px] relative top-4 lg:h-[60px] m-10"
				/>
				<img
					src="https://images.ctfassets.net/y2ske730sjqp/6ptT5wjoIMeOCYkXjORQGw/81500256bcb3bf4144d7ef369b41a6e0/BrandAssets_Logos_06-SpecialUse_01.jpg?w=460"
					alt=""
					className="h-[60px] lg:scale-[2] lg:relative top-4 m-10"
				/>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc8ZGXmaVH0hCxrfZtXaVDcM9J2DRC38JMrA&s"
					alt=""
					className="h-[20px] relative top-4 lg:h-[60px] m-10"
				/>
			</div>
		</section>
	);
};

export default Home;
