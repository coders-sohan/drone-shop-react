import React from "react";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import HeroSec from "../../components/Sections/HeroSec";
import AboutSec from "../../components/Sections/AboutSec";
import DetailsSec from "../../components/Sections/DetailsSec";
import ShopSec from "../../components/Sections/ShopSec";

const Home = () => {
	return (
		<>
			<Navbar />
			<HeroSec />
			<AboutSec />
			<DetailsSec />
			<ShopSec />
			<Footer />
		</>
	);
};

export default Home;
