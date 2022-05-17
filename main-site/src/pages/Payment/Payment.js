import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Payment = () => {
	return (
		<>
			<Navbar />
			<div
				id="home"
				className="flex justify-between items-center pt-24 pb-20 bg-slate-50 h-screen"
			>
				<div className="container mx-auto px-3">
					<div className="text-center">
						<h1 className="md:text-4xl text-3xl font-semibold py-4">
							Payment coming soon
						</h1>
						<div className="bg-red-600 h-1 w-36 mt-1 block mx-auto"></div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Payment;
