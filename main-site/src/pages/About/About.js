import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AboutSec from "../../components/Sections/AboutSec";
import DetailsSec from "../../components/Sections/DetailsSec";

const About = () => {
	return (
		<>
			<Navbar />
			<div className="pt-14">
				<AboutSec />
			</div>
			<DetailsSec />
			<Footer />
		</>
	);
};

export default About;
