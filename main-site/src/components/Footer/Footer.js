import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer-sec flex justify-between items-center py-12">
				<div className="container mx-auto px-3">
					<div className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 m-auto gap-5">
						<div className="p-2 bg-green-600"></div>
						<div className="p-2 bg-green-300"></div>
						<div className="p-2 bg-red-600"></div>
						<div className="p-2 bg-red-300"></div>
						<div className="p-2 md:col-span-2 col-span-1 bg-blue-600"></div>
					</div>
				</div>
			</div>
    </>
  );
};

export default Footer;
