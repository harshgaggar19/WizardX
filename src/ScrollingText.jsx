import React from 'react'
import gsap from 'gsap';

const ScrollingText = () => {
    window.addEventListener("wheel", function (dets) {
			if (dets.deltaY > 0) {
				gsap.to(".marque", {
					transform: "translateX(-200%)",
					duration: 4,
					delay: 0.5,
					repeat: -1,
					ease: "powet2.out",
					
				});
				gsap.to(".marque img", {
					rotate: 180,
					delay:0.5
				});
			}
			if (dets.deltaY < 0) {
				gsap.to(".marque", {
					transform: "translateX(0%)",
					duration: 4,
					delay: 0.5,
					repeat: -1,
					ease: "none",

				});
				gsap.to(".marque img", {
					rotate: 0,
					delay:0.5
				});
			}
		});
  return (
		<div>
			<div id="page" className='bg-black mt-20'>
				<div id="move" className="bg-[#B9FF66] flex py-8 border-y-2 border-black overflow-hidden">
					<div className="marque flex china items-center gap-[3vw] px-5  flex-shrink-0 translate-x-[-100%]">
						<h1 className='text-5xl font-semibold'>THRIVE BEYOND LIMITS</h1>
						<img
							src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                          alt="img"
                          className='sm:h-[3vw] h-[9vw]'
						/>
					</div>
					<div className="marque flex china items-center gap-[3vw] px-5  flex-shrink-0 translate-x-[-100%]">
						<h1 className='text-5xl font-semibold'>THRIVE BEYOND LIMITS</h1>
						<img
							src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                          alt="img"
                          className='h-[3vw]'
						/>
					</div>
					<div className="marque flex china items-center gap-[3vw] px-5  flex-shrink-0 translate-x-[-100%]">
						<h1 className='text-5xl font-semibold'>THRIVE BEYOND LIMITS</h1>
						<img
							src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                          alt="img"
                          className='h-[3vw]'
						/>
					</div>
					<div className="marque flex china items-center gap-[3vw] px-5  flex-shrink-0 translate-x-[-100%]">
						<h1 className='text-5xl font-semibold'>THRIVE BEYOND LIMITS</h1>
						<img
							src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                          alt="img"
                          className='h-[3vw]'
						/>
					</div>
					<div className="marque flex china items-center gap-[3vw] px-5  flex-shrink-0 translate-x-[-100%]">
						<h1 className='text-5xl font-semibold'>THRIVE BEYOND LIMITS</h1>
						<img
							src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                          alt="img"
                          className='h-[3vw]'
						/>
					</div>
					<div className="marque flex china items-center gap-[3vw] px-5  flex-shrink-0 translate-x-[-100%]">
						<h1 className='text-5xl font-semibold'>THRIVE BEYOND LIMITS</h1>
						<img
							src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                          alt="img"
                          className='h-[3vw]'
						/>
					</div>
					<div className="marque flex china items-center gap-[3vw] px-5  flex-shrink-0 translate-x-[-100%]">
						<h1 className='text-5xl font-semibold'>THRIVE BEYOND LIMITS</h1>
						<img
							src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                          alt="img"
                          className='h-[3vw]'
						/>
					</div>
					<div className="marque flex china items-center gap-[3vw] px-5  flex-shrink-0 translate-x-[-100%]">
						<h1 className='text-5xl font-semibold'>THRIVE BEYOND LIMITS</h1>
						<img
							src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                          alt="img"
                          className='h-[3vw]'
						/>
					</div>
					<div className="marque flex china items-center gap-[3vw] px-5  flex-shrink-0 translate-x-[-100%]">
						<h1 className='text-5xl font-semibold'>THRIVE BEYOND LIMITS</h1>
						<img
							src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                          alt="img"
                          className='h-[3vw]'
						/>
					</div>
					<div className="marque flex china items-center gap-[3vw] px-5  flex-shrink-0 translate-x-[-100%]">
						<h1 className='text-5xl font-semibold'>THRIVE BEYOND LIMITS</h1>
						<img
							src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                          alt="img"
                          className='h-[3vw]'
						/>
					</div>
					<div className="marque flex china items-center gap-[3vw] px-5  flex-shrink-0 translate-x-[-100%]">
						<h1 className='text-5xl font-semibold'>THRIVE BEYOND LIMITS</h1>
						<img
							src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                          alt="img"
                          className='h-[3vw]'
						/>
					</div>
					<div className="marque flex china items-center gap-[3vw] px-5  flex-shrink-0 translate-x-[-100%]">
						<h1 className='text-5xl font-semibold'>THRIVE BEYOND LIMITS</h1>
						<img
							src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                          alt="img"
                          className='h-[3vw]'
						/>
					</div>
					<div className="marque flex china items-center gap-[3vw] px-5  flex-shrink-0 translate-x-[-100%]">
						<h1 className='text-5xl font-semibold'>THRIVE BEYOND LIMITS</h1>
						<img
							src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                          alt="img"
                          className='h-[3vw]'
						/>
					</div>
					<div className="marque flex china items-center gap-[3vw] px-5  flex-shrink-0 translate-x-[-100%]">
						<h1 className='text-5xl font-semibold'>THRIVE BEYOND LIMITS</h1>
						<img
							src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                          alt="img"
                          className='h-[3vw]'
						/>
					</div>
					<div className="marque flex china items-center gap-[3vw] px-5  flex-shrink-0 translate-x-[-100%]">
						<h1 className='text-5xl font-semibold'>THRIVE BEYOND LIMITS</h1>
						<img
							src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                          alt="img"
                          className='h-[3vw]'
						/>
					</div>
					<div className="marque flex china items-center gap-[3vw] px-5  flex-shrink-0 translate-x-[-100%]">
						<h1 className='text-5xl font-semibold'>THRIVE BEYOND LIMITS</h1>
						<img
							src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                          alt="img"
                          className='h-[3vw]'
						/>
					</div>
					<div className="marque flex china items-center gap-[3vw] px-5  flex-shrink-0 translate-x-[-100%]">
						<h1 className='text-5xl font-semibold'>THRIVE BEYOND LIMITS</h1>
						<img
							src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                          alt="img"
                          className='h-[3vw]'
						/>
					</div>
					<div className="marque flex china items-center gap-[3vw] px-5  flex-shrink-0 translate-x-[-100%]">
						<h1 className='text-5xl font-semibold'>THRIVE BEYOND LIMITS</h1>
						<img
							src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                          alt="img"
                          className='h-[3vw]'
						/>
					</div>
					<div className="marque flex china items-center gap-[3vw] px-5  flex-shrink-0 translate-x-[-100%]">
						<h1 className='text-5xl font-semibold'>THRIVE BEYOND LIMITS</h1>
						<img
							src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                          alt="img"
                          className='h-[3vw]'
						/>
					</div>
					<div className="marque flex china items-center gap-[3vw] px-5  flex-shrink-0 translate-x-[-100%]">
						<h1 className='text-5xl font-semibold'>THRIVE BEYOND LIMITS</h1>
						<img
							src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                          alt="img"
                          className='h-[3vw]'
						/>
					</div>
					<div className="marque flex china items-center gap-[3vw] px-5  flex-shrink-0 translate-x-[-100%]">
						<h1 className='text-5xl font-semibold'>THRIVE BEYOND LIMITS</h1>
						<img
							src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                          alt="img"
                          className='h-[3vw]'
						/>
					</div>
					<div className="marque flex china items-center gap-[3vw] px-5  flex-shrink-0 translate-x-[-100%]">
						<h1 className='text-5xl font-semibold'>THRIVE BEYOND LIMITS</h1>
						<img
							src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
                          alt="img"
                          className='h-[3vw]'
						/>
					</div>
					
				</div>
			</div>
		</div>
	);
}

export default ScrollingText
