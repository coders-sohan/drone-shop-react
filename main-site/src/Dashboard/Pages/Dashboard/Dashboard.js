import React, { useState } from "react";
import { AiOutlineFileText } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { GoThreeBars } from "react-icons/go";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
	const [open, setOpen] = useState(true);

	return (
		<>
			<div>
				<div>
					<div className="flex">
						<div
							className={`${
								open ? "w-56" : "lg:w-[6.5rem] md:w-20 w-10"
							} h-screen bg-gray-100 relative duration-300 lg:px-4 md:px-3 px-0 pt-8 py-6 border-r`}
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
										to="/"
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
										to="/inventory"
										className="text-black flex items-center gap-x-2 lg:px-4 md:px-3 px-2 h-[2.9rem] hover:bg-white hover:text-red-500 rounded-md hover:shadow-md duration-200"
									>
										<span>
											<AiOutlineFileText className="text-xl" />
										</span>
										<span className={`${!open && "hidden"} origin-left mt-1`}>
											Inventory
										</span>
									</NavLink>
								</li>
								<li className="p-2 mt-3">
									<NavLink
										to="/documents"
										className="text-black flex items-center gap-x-2 lg:px-4 md:px-3 px-2 h-[2.9rem] hover:bg-white hover:text-red-500 rounded-md hover:shadow-md duration-200"
									>
										<span>
											<HiOutlineDocumentText className="text-xl" />
										</span>
										<span className={`${!open && "hidden"} origin-left mt-1`}>
											Documents
										</span>
									</NavLink>
								</li>
								<li className="p-2 mt-3">
									<NavLink
										to="/settings"
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
							</ul>
						</div>
						<div className="p-7 text-4xl font-semibold flex-1 h-screen">
							<h1>Dashboard</h1>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
