import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import swal from "sweetalert";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const ProductDetails = () => {
	const { productId } = useParams();
	const [singleProduct, setSingleProduct] = useState([]);

	useEffect(() => {
		fetch(`https://drone-shop-react.herokuapp.com/products/${productId}`)
			.then((res) => res.json())
			.then((data) => setSingleProduct(data));
	}, [productId]);

	const addToCart = () => {
		fetch("http://localhost:5000/cart", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(singleProduct),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					swal("Good job!", "Add to cart successfully", "success");
				}
			});
		console.log("cart added submitted");
	};

	return (
		<>
			<Navbar />
			<div
				id="home"
				className="flex justify-between items-center pt-28 pb-20 bg-slate-50"
			>
				<div className="container mx-auto px-3">
					<div className="text-center">
						<h1 className="md:text-4xl text-3xl font-semibold py-4">
							Details of Each Drone
						</h1>
						<div className="bg-red-600 h-1 w-36 mt-1 block mx-auto"></div>
					</div>
					<div className="flex lg:flex-row flex-col items-center lg:gap-8 gap-6 mt-8">
						<div className="shadow-lg bg-white w-full">
							<img
								src={singleProduct.imgUrl}
								className="w-auto h-96 mx-auto"
								alt={singleProduct.name}
							/>
						</div>
						<div className="w-full h-auto shadow-lg bg-white">
							<div className="bg-white">
								<div className="px-8 py-[2.4rem]">
									<div className="flex items-center justify-between">
										<h2 className="text-2xl font-semibold">
											{singleProduct.name}
										</h2>
										<p className="text-sm text-gray-600 pl-5">
											Available{" "}
											<span className="text-green-500">
												{singleProduct.stock}
											</span>{" "}
											piece
										</p>
									</div>
									<p className="text-base text-gray-600 mt-2 text-justify">
										{singleProduct.desc}
									</p>
									<div>
										<Rating
											className="text-base text-red-600 my-3"
											initialRating={singleProduct.rating}
											emptySymbol="fa fa-star-o"
											fullSymbol="fa fa-star"
											readonly
										/>
										<span className="ml-3 text-base text-gray-400">
											({singleProduct.rating}/5)
										</span>
									</div>
									<div className="flex items-center justify-between">
										<h3 className="text-red-600 text-2xl font-semibold">
											${singleProduct.price}
										</h3>
										<h2 className="text-red-600 text-sm font-semibold">
											Delivery:{" "}
											<span className="text-green-500">Worldwide</span>
										</h2>
									</div>
									<div className="mt-8 text-center">
										<HashLink to="/dashboard/cart#home">
											<button
												onClick={addToCart}
												className="text-base capitalize px-4 py-1 border text-red-600 border-red-600 rounded-full hover:text-black hover:bg-transparent hover:border-black transition-all duration-300 lg:mr-3 mr-0"
											>
												add to cart
											</button>
										</HashLink>
										<button className="text-base capitalize px-4 py-1 border text-red-600 border-red-600 rounded-full hover:text-black hover:bg-transparent hover:border-black transition-all duration-300 lg:mr-3 mr-0 ml-2">
											buy now
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default ProductDetails;
