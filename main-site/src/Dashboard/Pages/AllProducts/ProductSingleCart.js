import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ProductSingleCart = (props) => {
	const { _id, imgUrl, name, price, stock } = props.singleProduct;


	return (
		<>
			<div className="bg-white shadow-lg px-5 py-2 mt-8 border hover:shadow-sm transition-all duration-300">
				<div className="flex items-center justify-between">
					<div>
						<img className="w-12 h-auto" src={imgUrl} alt={name} />
					</div>
					<div className="text-base text-gray-500">{name}</div>
					<div className="text-sm">
						Available <span className="text-green-500">{stock}</span> piece
					</div>
					<div className="text-base text-red-500">${price}</div>
					<div>
						<AiOutlineCloseCircle
							onClick={() => props.handleDeleteProduct(_id)}
							className="text-3xl text-red-500"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductSingleCart;
