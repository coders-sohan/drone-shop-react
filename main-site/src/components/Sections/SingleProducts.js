import React from "react";
import Rating from "react-rating";
import { HashLink } from "react-router-hash-link";

const SingleProducts = (props) => {
	const { _id, imgUrl, name, desc, price, stock, rating } = props.product;

	return (
		<>
			{/* Card */}
			<div className="w-full shadow-lg bg-white">
				<div>
					<img src={imgUrl} className="w-auto h-96 mx-auto" alt={name} />
				</div>
				<div className="bg-white">
					<div className="px-8 py-5">
						<div className="flex items-center justify-between">
							<h2 className="text-lg font-semibold">{name}</h2>
							<p className="text-xs text-gray-600 pl-5">
								Available piece <span className="text-green-500">{stock}</span>
							</p>
						</div>
						<p className="text-xs text-gray-600 mt-2 text-justify">{desc}</p>
						<div>
							<Rating
								className="text-sm text-red-600 my-3"
								initialRating={rating}
								emptySymbol="fa fa-star-o"
								fullSymbol="fa fa-star"
								readonly
							/>
							<span className="ml-3 text-sm text-gray-400">({rating}/5)</span>
						</div>
						<div className="flex items-center justify-between">
							<h2 className="text-red-600 text-xs font-semibold">
								Delivery: Worldwide
							</h2>
							<h3 className="text-red-600 text-xl font-semibold">${price}</h3>
						</div>
						<div className="mt-10 text-center">
							<HashLink
								smooth
								to={`/product/details/${_id}#home`}
								className="text-base capitalize px-4 py-1 border text-red-600 border-red-600 rounded-full hover:text-black hover:bg-transparent hover:border-black transition-all duration-300 lg:mr-3 mr-0"
							>
								product details
							</HashLink>
						</div>
					</div>
				</div>
			</div>
			{/* Card Ends */}
		</>
	);
};

export default SingleProducts;
