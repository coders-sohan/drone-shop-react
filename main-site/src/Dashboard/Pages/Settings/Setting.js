import React, { useState } from "react";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";

const Setting = () => {
	const [email, setEmail] = useState("");
	const { token } = useAuth();

	const handleOnBlur = (e) => {
		setEmail(e.target.value);
	};

	const handleAdminSubmit = (e) => {
		const user = { email };
		swal({
			title: "Are you sure?",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((willAdmin) => {
			if (willAdmin) {
				fetch(`http://localhost:5000/users/admin`, {
					method: "PUT",
					headers: {
						authorization: `Bearer ${token}`,
						"content-type": "application/json",
					},
					body: JSON.stringify(user),
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.modifiedCount) {
							setEmail("");
							swal("Good job!", "Make admin successfully", "success");
						}
					});
			} else {
				swal("Successfully canceled!");
			}
		});

		// fetch(`http://localhost:5000/users/admin`, {
		// 	method: "PUT",
		// 	headers: {
		// 		"content-type": "application/json",
		// 	},
		// 	body: JSON.stringify(user),
		// })
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		if (data.modifiedCount) {
		// 			setEmail("");
		// 			swal("Good job!", "Make admin successfully", "success");
		// 		}
		// 	});
		e.preventDefault();
	};

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
								<form
									onSubmit={handleAdminSubmit}
									className="mt-8 w-2/3 mx-auto flex items-center"
								>
									<div className="w-full">
										<input
											onBlur={handleOnBlur}
											type="email"
											placeholder="Make Admin"
											name="email"
											id="email"
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
