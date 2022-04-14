import React from "react";
import { Link } from "react-router-dom";

const detailsData = [
	{
		key: "1",
		title: "30 Mins",
		desc: "Flight time",
		imgUrl: "https://drone-shop-react.netlify.app/d1.webp",
	},
	{
		key: "2",
		title: "4K 65fps",
		desc: "Video resolution",
		imgUrl: "https://drone-shop-react.netlify.app/d2.webp",
	},
	{
		key: "3",
		title: "72 KM/H",
		desc: "Speed Meter",
		imgUrl: "https://drone-shop-react.netlify.app/d3.webp",
	},
	{
		key: "4",
		title: "300 Meter",
		desc: "Sensor range",
		imgUrl: "https://drone-shop-react.netlify.app/d4.webp",
	},
	{
		key: "5",
		title: "10 KM",
		desc: "Control Range",
		imgUrl: "https://drone-shop-react.netlify.app/d5.webp",
	},
	{
		key: "6",
		title: "5 Direction",
		desc: "Obstacle sensing",
		imgUrl: "https://drone-shop-react.netlify.app/d6.webp",
	},
];

const DetailsSec = () => {
	return (
		<>
			<div className="details-sec flex justify-between items-center py-12">
				<div className="container mx-auto px-3">
					<div className="grid lg:grid-cols-2 m-auto gap-5">
						<div className="p-5">
							<div>
								<h1 className="md:text-5xl text-3xl font-semibold py-4">
									Ultra Birght Screen.
								</h1>
								<p className="text-lg mt-2">
									A 5.5in 1080p screen integrated with the Phantom 4 Pro +
									offers 1000 cd/m2 of brightness, more than twice as bright as
									conve ntional smart devices. It makes bright, vivid colors
									easily visible in direct sunlight.
								</p>
							</div>
							<div className="grid grid-cols-2">
								{detailsData.map((singleDetailsData) => (
									<div
										className="flex items-center mt-8"
										key={singleDetailsData.key}
									>
										<div>
											<img
												src={singleDetailsData.imgUrl}
												alt={singleDetailsData.title}
												className="w-full h-full"
											/>
										</div>
										<div className="lg:ml-5 ml-[0.39rem]">
											<h3 className="md:text-xl text-lg">{singleDetailsData.title}</h3>
											<p className="md:text-sm text-sm text-gray-400">
												{singleDetailsData.desc}
											</p>
										</div>
									</div>
								))}
							</div>
							<div className="mt-14">
								<Link
									to="/shop"
									className="text-lg capitalize text-red-600 bg-transparent px-6 py-2 border border-red-600 rounded-md hover:text-white hover:bg-red-600 transition-all duration-300 lg:mr-3 mr-0"
								>
									view more
								</Link>
							</div>
						</div>
						<div className="p-5">
							<img
								src="https://drone-shop-react.netlify.app/photos2.webp"
								alt="about_img"
								className="mx-auto w-auto h-auto"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DetailsSec;
