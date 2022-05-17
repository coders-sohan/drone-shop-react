import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SingleCart from "./SingleCart";

const Cart = () => {
	const [cartData, setCartData] = useState([]);

	useEffect(() => {
		fetch(`https://drone-shop-react.herokuapp.com/cart`)
			.then((res) => res.json())
			.then((data) => setCartData(data));
	}, [cartData]);

	return (
		<>
			<Navbar />
			<div
				id="home"
				className="flex justify-between items-center pt-24 pb-20 bg-slate-50"
			>
				<div className="container mx-auto px-3">
					<div className="text-center">
						<h1 className="md:text-4xl text-3xl font-semibold py-4">
							Products Cart
						</h1>
						<div className="bg-red-600 h-1 w-36 mt-1 block mx-auto"></div>
					</div>
					<div className="w-4/6 mx-auto">
						{cartData.map((singleCart) => (
							<SingleCart key={singleCart._id} singleCart={singleCart} />
						))}
					</div>
					<div className="mt-20">
						<div className="text-center">
							<Link
								to="/checkout"
								className="text-lg capitalize px-6 py-2 border text-red-600 border-red-600 rounded-full hover:text-black hover:bg-transparent hover:border-black transition-all duration-300 lg:mr-3 mr-0"
							>Proceed to payment</Link>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Cart;
