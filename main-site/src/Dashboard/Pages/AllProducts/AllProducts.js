import React, { useEffect, useState } from "react";
import ProductSingleCart from "./ProductSingleCart";

const AllProducts = () => {
	const [productData, setProductData] = useState([]);

	useEffect(() => {
		fetch(`https://drone-shop-react.herokuapp.com/products`)
			.then((res) => res.json())
			.then((data) => setProductData(data));
	}, [productData]);

	return (
		<>
			<div id="home" className="bg-slate-50 pt-5 pb-10">
				<div className="container mx-auto">
					<div className="text-center">
						<h1 className="md:text-4xl text-3xl font-semibold py-4">
							All Products
						</h1>
						<div className="bg-red-600 h-1 w-36 mt-1 block mx-auto"></div>
					</div>
					<div className="w-4/6 mx-auto">
						<div>
							{productData.map((singleProduct) => (
								<ProductSingleCart
									key={singleProduct._id}
									singleProduct={singleProduct}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AllProducts;
