import React from "react";
import { Link } from "react-router-dom";
import Modal from "../Extra/Modal";

const HeroSec = () => {
	return (
		<div className="hero-sec h-screen flex justify-between items-center">
			<div className="container mx-auto px-3">
				<div className="grid lg:grid-cols-2 m-auto">
					<div className="p-5">
						<h3 className="text-xl">Exclusive Offer -20% Off This Week</h3>
						<h1 className="lg:text-[5rem] text-[4rem] leading-[1.1] uppercase py-5 font-semibold">
							<span className="text-red-600">Drone</span> <span>Classic</span>
						</h1>
						<p className="text-lg">
							Experience the decibels like your ears deserve to. Safe for the
							ears, very for the heart.
						</p>
						<div className="mt-10 flex lg:flex-row flex-col items-center">
							<Link
								to="/shop"
								className="text-lg capitalize text-red-600 px-6 py-2 border border-red-600 rounded-md lg:mr-3 mr-0"
							>
								Explore more
							</Link>
							<div>
								<Modal />
							</div>
						</div>
					</div>
					<div className="bg-green-600 p-5 hidden"></div>
				</div>
			</div>
		</div>
	);
};

export default HeroSec;
