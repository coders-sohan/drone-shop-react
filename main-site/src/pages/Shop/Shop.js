import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SingleProducts from "../../components/Sections/SingleProducts";
import Spinner from "../../contexts/Spinner/Spinner";
import useAuth from "../../hooks/useAuth";

const Shop = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/products")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	const { isLoading } = useAuth();

	return (
		<>
			<Navbar />
			<div className="flex justify-between items-center pt-28 pb-20 bg-slate-50">
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
					{isLoading && <Spinner />}
					{!isLoading && (
						<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10">
							{products.map((product) => (
								<SingleProducts key={product._id} product={product} />
							))}
						</div>
					)}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Shop;
