import React from "react";
import Category from "../Items/Category";
import Location from "../getLocation/Location";
import MainSlider from "../main-slider/main-slider";
import Navbar from "../Navbar/Navbar";
const Home = () => {
	return (
		<div>
			<Location />
			<MainSlider />
			<br />
			<br />
			<Category />
			<br />
		</div>
	);
};

export default Home;
