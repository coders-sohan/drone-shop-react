import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const SingleCart = (props) => {
	const { _id, imgUrl, name, price } = props.singleCart;
	return (
		<>
			<div className="bg-white shadow-lg px-5 py-2 mt-8 border hover:shadow-sm transition-all duration-300">
				<div className="flex items-center justify-between">
					<div>
						<img className="w-12 h-auto" src={imgUrl} alt={name} />
					</div>
					<div className="text-base text-gray-500">{name}</div>
					<div className="text-base text-red-500">${price}</div>
					<div>
						<AiOutlineCloseCircle className="text-3xl text-red-500" />
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleCart;
