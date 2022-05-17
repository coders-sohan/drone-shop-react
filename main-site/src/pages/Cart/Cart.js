import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Cart = () => {
	const [cartData, setCartData] = useState([]);

	useEffect(() => {
		fetch(`https://drone-shop-react.herokuapp.com/cart`)
			.then((res) => res.json())
			.then((data) => setCartData(data));
	}, []);

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
							Products Cart
						</h1>
						<div className="bg-red-600 h-1 w-36 mt-1 block mx-auto"></div>
					</div>
					<div className=""></div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Cart;
