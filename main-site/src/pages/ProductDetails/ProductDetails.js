import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const ProductDetails = () => {
	const { productId } = useParams();
	const [singleProduct, setSingleProduct] = useState([]);
	useEffect(() => {
		fetch(`https://drone-shop-react.herokuapp.com/products/${productId}`)
			.then((res) => res.json())
			.then((data) => setSingleProduct(data));
	}, []);

	return (
		<>
			<Navbar />
			<div className="flex justify-between items-center pt-28 pb-20 bg-slate-50">
				<div className="container mx-auto px-3">
					<div className="text-center">
						<h1 className="md:text-5xl text-3xl font-semibold py-4">
							Details of {singleProduct.name}
						</h1>
						<div className="bg-red-600 h-1 w-36 mt-3 block mx-auto"></div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ProductDetails;
