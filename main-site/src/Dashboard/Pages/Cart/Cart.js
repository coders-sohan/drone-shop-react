import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";
import SingleCart from "./SingleCart";

const Cart = () => {
	const { user, token } = useAuth();

	const [cartData, setCartData] = useState([]);

	useEffect(() => {
		const url = `http://localhost:5000/cart?email=${user?.email}`;
		fetch(url, {
			headers: {
				authorization: `Bearer ${token}`,
			},
		})
			.then((res) => res.json())
			.then((data) => setCartData(data));
	}, [user?.email, token]);

	// delete a cart form all cart
	const handleDeleteCart = (id) => {
		swal({
			title: "Are you sure?",
			text: "Once deleted, you will not be able to recover this cart!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				const url = `http://localhost:5000/cart/${id}`;
				fetch(url, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							swal("Poof! Your cart has been deleted!", {
								icon: "success",
							});
							const remainingCart = cartData.filter((cart) => cart._id !== id);
							setCartData(remainingCart);
						}
					});
			} else {
				swal("Your cart is safe!");
			}
		});

		// const proceed = window.confirm("Are you sure, you want to delete?");
		// if (proceed) {
		// 	const url = `http://localhost:5000/cart/${id}`;
		// 	fetch(url, {
		// 		method: "DELETE",
		// 	})
		// 		.then((res) => res.json())
		// 		.then((data) => {
		// 			if (data.deletedCount > 0) {
		// 				swal("Good job!", "Data delete successfully", "success");
		// 				const remainingCart = cartData.filter((cart) => cart._id !== id);
		// 				setCartData(remainingCart);
		// 			}
		// 		});
		// }
	};

	return (
		<>
			<div id="home" className="bg-slate-50 pt-5 pb-10 h-screen">
				<div className="container mx-auto">
					<div className="text-center">
						<h1 className="md:text-4xl text-3xl font-semibold py-4">
							My products cart
						</h1>
						<div className="bg-red-600 h-1 w-36 mt-1 block mx-auto"></div>
					</div>
					<div className="w-4/6 mx-auto">
						<div>
							{cartData.map((singleCart) => (
								<SingleCart
									key={singleCart._id}
									singleCart={singleCart}
									handleDeleteCart={handleDeleteCart}
								/>
							))}
						</div>
						<div className="mt-12">
							<div className="text-center">
								<Link
									to="/dashboard/checkout"
									className="text-lg capitalize px-6 py-2 border text-red-600 border-red-600 rounded-full hover:text-black hover:bg-transparent hover:border-black transition-all duration-300 lg:mr-3 mr-0"
								>
									Proceed to payment
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
