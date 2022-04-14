import React from "react";
import { Link } from "react-router-dom";

const aboutData = [
	{
		key: "1",
		title: "Mobile Device Supported",
		desc: "When an unknown printer took a galley of type and scrambled it to make.",
		imgUrl: "https://drone-shop-react.netlify.app/feature3-1.webp",
	},
	{
		key: "2",
		title: "Easy integrative control",
		desc: "When an unknown printer took a galley of type and scrambled it to make.",
		imgUrl: "https://drone-shop-react.netlify.app/feature3-2.webp",
	},
	{
		key: "3",
		title: "Customized Commands",
		desc: "When an unknown printer took a galley of type and scrambled it to make.",
		imgUrl: "https://drone-shop-react.netlify.app/feature3-3.webp",
	},
];

const AboutSec = () => {
	return (
		<>
			<div className="flex justify-between items-center py-12">
				<div className="container mx-auto px-3">
					<div className="grid lg:grid-cols-2 m-auto gap-5">
						<div className="p-5">
							<img
								src="https://drone-shop-react.netlify.app/about1.webp"
								alt="about_img"
								className="mx-auto w-auto h-auto"
							/>
						</div>
						<div className="p-5">
							<div>
								<h3 className="md:text-xl text-lg text-red-600 font-medium">
									Feature About
								</h3>
								<h1 className="md:text-5xl text-3xl font-semibold py-4">
									Specializing in Drone.
								</h1>
								<div className="bg-red-600 h-1 w-20 mt-3"></div>
							</div>
							<div>
								{aboutData.map((aboutSingleData) => (
									<div
										className="flex items-center mt-8"
										key={aboutSingleData.key}
									>
										<div>
											<img
												src={aboutSingleData.imgUrl}
												alt={aboutSingleData.title}
												className="md:h-full md:w-full w-40"
											/>
										</div>
										<div className="ml-[1.15rem]">
											<h1 className="md:text-[1.75rem]  text-lg font-medium mb-2">
												{aboutSingleData.title}
											</h1>
											<p className="lg:text-base text-sm">
												{aboutSingleData.desc}
											</p>
										</div>
									</div>
								))}
							</div>
							<div className="mt-14">
								<Link
									to="/shop"
									className="text-lg capitalize text-white bg-red-600 px-6 py-2 border border-red-600 rounded-md hover:text-red-600 hover:bg-transparent transition-all duration-300 lg:mr-3 mr-0"
								>
									Explore more
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutSec;
