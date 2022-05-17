import React from "react";
import useAuth from "../../../hooks/useAuth";

const DashboardHome = () => {
	const { user, logout } = useAuth();

	return (
		<>
			<div
				id="home"
				className="flex justify-between items-center bg-slate-50 h-screen"
			>
				<div className="container mx-auto px-3">
					<div className="text-center">
						<div className="">
							<img
								className="h-28 w-28 rounded-full border-2 border-red-500 mx-auto"
								src={user?.photoURL}
								alt={user?.displayName}
							/>
						</div>
						<h1 className="md:text-4xl text-3xl font-semibold py-4">
							Log In as {user?.displayName}
						</h1>
						<div className="bg-red-600 h-1 w-36 mt-1 block mx-auto"></div>
						<h1 className="md:text-xl text-base font-semibold py-4">
							E-mail: <span className="text-green-600">{user?.email}</span>
						</h1>
						<div className="mt-10">
							<button
								className="lg:text-lg text-base text-red-600 border-red-600 hover:bg-black hover:text-white hover:border-black transition-all duration-150 ease-linear px-4 py-1"
								onClick={logout}
							>
								Logout
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DashboardHome;
