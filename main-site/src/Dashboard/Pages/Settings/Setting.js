import React from "react";

const Setting = () => {
	return (
		<>
			<div
				id="home"
				className="flex justify-between items-center bg-slate-50 h-screen"
			>
				<div className="container mx-auto px-3">
					<div className="text-center">
						<h1 className="md:text-4xl text-3xl font-semibold py-4">
							Make Admin
						</h1>
						<div className="bg-red-600 h-1 w-36 mt-1 block mx-auto"></div>
						<div>
							<div>
								<form className="mt-8 w-2/3 mx-auto flex items-center">
									<div className="w-full">
										<input
											type="text"
											placeholder="Make Admin"
											name="admin"
											id="price"
											className="w-full text-gray-600 focus:outline-none focus:border focus:border-red-500 bg-white font-normal h-12 flex items-center pl-3 text-sm border-gray-300 rounded border shadow-lg"
										/>
									</div>
									<div className="w-1/3">
										<button
											type="submit"
											className="w-full h-12 text-lg capitalize border rounded-none text-red-600 border-red-600 hover:text-black hover:bg-transparent hover:border-black transition-all duration-300"
										>
											Make Admin
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Setting;
