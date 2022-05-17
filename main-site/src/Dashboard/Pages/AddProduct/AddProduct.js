import React from "react";

const AddProduct = () => {
	return (
		<>
			<div
				id="home"
				className="flex justify-between items-center bg-slate-50 h-screen"
			>
				<div className="container mx-auto px-3">
					<div className="text-center">
						<h1 className="md:text-4xl text-3xl font-semibold py-4">
							Add Products
						</h1>
						<div className="bg-red-600 h-1 w-36 mt-1 block mx-auto"></div>
					</div>
					<form className="mt-8 w-1/2 mx-auto">
						<div className="p-3 flex justify-between gap-5">
							<div className="w-full">
								<input
									type="text"
									placeholder="Product Name"
									name="name"
									id="name"
									className="w-full text-gray-600 focus:outline-none focus:border focus:border-red-500 bg-white font-normal h-12 flex items-center pl-3 text-sm border-gray-300 rounded border shadow-lg"
								/>
							</div>
						</div>
						<div className="p-3 flex justify-between gap-5">
							<div className="w-full">
								<input
									type="text"
									placeholder="Price"
									name="name"
									id="price"
									className="w-full text-gray-600 focus:outline-none focus:border focus:border-red-500 bg-white font-normal h-12 flex items-center pl-3 text-sm border-gray-300 rounded border shadow-lg"
								/>
							</div>
							<div className="w-full">
								<input
									type="text"
									placeholder="Stock"
									name="price"
									id="stock"
									className="w-full text-gray-600 focus:outline-none focus:border focus:border-red-500 bg-white font-normal h-12 flex items-center pl-3 text-sm border-gray-300 rounded border shadow-lg"
								/>
							</div>
						</div>
						<div className="p-3 flex justify-between gap-5">
							<div className="w-full">
								<input
									type="text"
									placeholder="Image URL"
									name="imgUrl"
									id="name"
									className="w-full text-gray-600 focus:outline-none focus:border focus:border-red-500 bg-white font-normal h-12 flex items-center pl-3 text-sm border-gray-300 rounded border shadow-lg"
								/>
							</div>
							<div className="w-full">
								<input
									type="text"
									placeholder="Rating"
									name="rating"
									id="price"
									className="w-full text-gray-600 focus:outline-none focus:border focus:border-red-500 bg-white font-normal h-12 flex items-center pl-3 text-sm border-gray-300 rounded border shadow-lg"
								/>
							</div>
						</div>
						<div className="p-3 w-full">
							<textarea
								name="desc"
								id="desc"
								className="w-full h-40 text-gray-600 focus:outline-none focus:border focus:border-red-500 bg-white font-normal flex items-center pl-3 text-sm border-gray-300 rounded border shadow-lg"
							></textarea>
						</div>
						<div className="p-3 w-full">
							<button
								type="submit"
								className="text-lg capitalize w-full h-12 border text-red-600 border-red-600 rounded-full hover:text-black hover:bg-transparent hover:border-black transition-all duration-300 lg:mr-3 mr-0"
							>
								Add Product
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default AddProduct;
