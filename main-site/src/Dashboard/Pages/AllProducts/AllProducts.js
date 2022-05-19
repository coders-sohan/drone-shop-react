import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import ProductSingleCart from "./ProductSingleCart";

const AllProducts = () => {
	const [productData, setProductData] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/products`)
			.then((res) => res.json())
			.then((data) => setProductData(data));
	}, []);

	// delete a product form all product
	const handleDeleteProduct = (id) => {
		const proceed = window.confirm("Are you sure, you want to delete?");
		if (proceed) {
			const url = `http://localhost:5000/products/${id}`;
			fetch(url, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					if (data.deletedCount > 0) {
						swal("Good job!", "Data delete successfully", "success");
						const remainingProducts = productData.filter(
							(products) => products._id !== id
						);
						setProductData(remainingProducts);
					}
				});
		}
	};

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
									handleDeleteProduct={handleDeleteProduct}
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
