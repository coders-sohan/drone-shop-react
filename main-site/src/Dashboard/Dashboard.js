import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineUnorderedList,AiOutlineAppstoreAdd } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { GoThreeBars } from "react-icons/go";
import { IoMdLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
	const [open, setOpen] = useState(true);

	return (
		<>
			<div>
				<div>
					<div className="flex h-auto">
						<div
							className={`${
								open ? "w-56" : "lg:w-[6.5rem] md:w-20 w-10"
							} bg-gray-100 relative duration-300 lg:px-4 md:px-3 px-0 pt-8 py-6 border-r`}
						>
							<span
								className="absolute cursor-pointer right-9 top-2 lg:p-[0.4rem] md:p-2 p-1 rounded-full bg-slate-100 border border-red-500"
								onClick={() => setOpen(!open)}
							>
								<GoThreeBars
									className={`${!open && "rotate-180"} text-red-500`}
								/>
							</span>
							<ul>
								<li className="p-2 mt-3">
									<NavLink
										to="/dashboard"
										className="text-black flex items-center gap-x-2 lg:px-4 md:px-3 px-2 h-[2.9rem] hover:bg-white hover:text-red-500 rounded-md hover:shadow-md duration-200"
									>
										<span>
											<BiHomeAlt className="text-xl" />
										</span>
										<span className={`${!open && "hidden"} origin-left mt-1`}>
											Dashboard
										</span>
									</NavLink>
								</li>
								<li className="p-2 mt-3">
									<NavLink
										to="/dashboard/all-products"
										className="text-black flex items-center gap-x-2 lg:px-4 md:px-3 px-2 h-[2.9rem] hover:bg-white hover:text-red-500 rounded-md hover:shadow-md duration-200"
									>
										<span>
											<AiOutlineUnorderedList className="text-xl" />
										</span>
										<span className={`${!open && "hidden"} origin-left mt-1`}>
											All Products
										</span>
									</NavLink>
								</li>
								<li className="p-2 mt-3">
									<NavLink
										to="/dashboard/add-product"
										className="text-black flex items-center gap-x-2 lg:px-4 md:px-3 px-2 h-[2.9rem] hover:bg-white hover:text-red-500 rounded-md hover:shadow-md duration-200"
									>
										<span>
											<AiOutlineAppstoreAdd className="text-xl" />
										</span>
										<span className={`${!open && "hidden"} origin-left mt-1`}>
											Add Product
										</span>
									</NavLink>
								</li>
								<li className="p-2 mt-3">
									<NavLink
										to="/dashboard/cart"
										className="text-black flex items-center gap-x-2 lg:px-4 md:px-3 px-2 h-[2.9rem] hover:bg-white hover:text-red-500 rounded-md hover:shadow-md duration-200"
									>
										<span>
											<AiOutlineShoppingCart className="text-xl" />
										</span>
										<span className={`${!open && "hidden"} origin-left mt-1`}>
											My Cart
										</span>
									</NavLink>
								</li>
								<li className="p-2 mt-3">
									<NavLink
										to="/dashboard/checkout"
										className="text-black flex items-center gap-x-2 lg:px-4 md:px-3 px-2 h-[2.9rem] hover:bg-white hover:text-red-500 rounded-md hover:shadow-md duration-200"
									>
										<span>
											<MdPayment className="text-xl" />
										</span>
										<span className={`${!open && "hidden"} origin-left mt-1`}>
											Payment
										</span>
									</NavLink>
								</li>
								<li className="p-2 mt-3">
									<NavLink
										to="/dashboard/setting"
										className="text-black flex items-center gap-x-2 lg:px-4 md:px-3 px-2 h-[2.9rem] hover:bg-white hover:text-red-500 rounded-md hover:shadow-md duration-200"
									>
										<span>
											<IoSettingsOutline className="text-xl" />
										</span>
										<span className={`${!open && "hidden"} origin-left mt-1`}>
											Settings
										</span>
									</NavLink>
								</li>
								<li className="p-2 mt-3">
									<NavLink
										to="/"
										className="text-black flex items-center gap-x-2 lg:px-4 md:px-3 px-2 h-[2.9rem] hover:bg-white hover:text-red-500 rounded-md hover:shadow-md duration-200"
									>
										<span>
											<IoMdLogOut className="text-xl" />
										</span>
										<span className={`${!open && "hidden"} origin-left mt-1`}>
											Back to home
										</span>
									</NavLink>
								</li>
							</ul>
						</div>
						<div className="text-4xl font-semibold flex-1">
							<Outlet></Outlet>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
