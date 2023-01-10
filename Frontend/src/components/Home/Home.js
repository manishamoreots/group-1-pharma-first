import React from "react";
import Category from "../Items/Category";
import MainSlider from "../main-slider/main-slider";
import SecondNavbar from "../Navbar/SecondNavbar";
import Visitors from "../visitors/visitors";

const Home = () => {
	return (
		<div>
			<SecondNavbar />
			<MainSlider />
			<br />
			<Category />
			<br />
			<Category itemId={1} />
			<br />
			<Visitors />
		</div>
	);
};

export default Home;
