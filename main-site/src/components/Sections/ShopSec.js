import React from "react";
import { Link } from "react-router-dom";

const ShopSec = () => {
	return (
		<>
			<div className="flex justify-between items-center py-12 bg-slate-50">
				<div className="container mx-auto px-3">
					<div className="text-center">
						<h3 className="md:text-xl text-lg text-red-600 font-medium">
							POPULAR ITEM
						</h3>
						<h1 className="md:text-5xl text-3xl font-semibold py-4">
							Featured in Drone
						</h1>
						<div className="bg-red-600 h-1 w-36 mt-3 block mx-auto"></div>
					</div>
					<div className="mt-14 text-center">
						<Link
							to="/shop"
							className="text-lg capitalize text-white bg-red-600 px-6 py-2 border border-red-600 rounded-md hover:text-red-600 hover:bg-transparent transition-all duration-300 lg:mr-3 mr-0"
						>
							view all
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default ShopSec;
