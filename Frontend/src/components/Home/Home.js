import React from "react";
import Category from "../Items/Category";
import Location from "../getLocation/Location";
import MainSlider from "../main-slider/main-slider";

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
