import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleProducts from "./SingleProducts";

const ShopSec = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/products")
			.then((res) => res.json())
			.then((data) => setProducts(data.slice(0, 6)));
	}, []);

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
					<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
						{products.map((product) => (
							<SingleProducts key={product._id} product={product} />
						))}
					</div>
					<div className="mt-14 text-center">
						<Link
							to="/shop"
							className="text-lg capitalize text-white bg-red-600 px-6 py-2 border border-red-600 rounded-md hover:text-red-600 hover:bg-transparent transition-all duration-300 lg:mr-3 mr-0"
						>
							view all products
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default ShopSec;
