import React, { useEffect, useState } from "react";

const SuccessAlert = ({ user }) => {
	// notify start
	const [show, setShow] = useState(true);

	// On componentDidMount set the timer
	useEffect(() => {
		const timeId = setTimeout(() => {
			// After 3 seconds set the show value to false
			setShow(false);
		}, 2000);

		return () => {
			clearTimeout(timeId);
		};
	}, []);

	// If show is false the component will return null and stop here
	if (!show) {
		return null;
	}

	// notify end

	// { login, register }
	return (
		<>
			<div className="mt-5 flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md border border-green-500">
				<div className="flex items-center justify-center w-12 bg-green-500">
					<svg
						className="w-6 h-6 text-white fill-current"
						viewBox="0 0 40 40"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
					</svg>
				</div>

				<div className="px-4 py-2 -mx-3">
					<div className="mx-3">
						<span className="font-semibold text-green-500">Success</span>
						<p className="text-sm text-gray-600">
							{/* {!login && "Your account was registered!"}
          {!register && "User login successfully"} */}
							{user?.email} login successfully
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default SuccessAlert;
