import React, { useEffect, useState } from "react";

const ErrorAlert = ({ error }) => {
	// notify start
	const [show, setShow] = useState(true);

	// On componentDidMount set the timer
	useEffect(() => {
		const timeId = setTimeout(() => {
			// After 3 seconds set the show value to false
			setShow(false);
		}, 3000);

		return () => {
			clearTimeout(timeId);
		};
	}, []);

	// If show is false the component will return null and stop here
	if (!show) {
		return null;
	}

	// notify end

	return (
		<div className="mt-5 flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md border border-red-500">
			<div className="flex items-center justify-center w-12 bg-red-500">
				<svg
					className="w-6 h-6 text-white fill-current"
					viewBox="0 0 40 40"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
				</svg>
			</div>

			<div className="px-4 py-2 -mx-3">
				<div className="mx-3">
					<span className="font-semibold text-red-500">Error!</span>
					<p className="text-sm text-gray-600">{error.slice(10)}</p>
				</div>
			</div>
		</div>
	);
};

export default ErrorAlert;
