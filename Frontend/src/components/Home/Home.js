import React from "react";
import Category from "../Items/Category";
import MainSlider from "../main-slider/main-slider";
import CategoryItems from "../Items/CategoryItems";
import { Segment } from "semantic-ui-react";
import SecondNavbar from "../Navbar/SecondNavbar";

const Home = () => {
	return (
		<div>
			<SecondNavbar />
			<MainSlider />
			<br />
			<Category />
			<Segment size="mini">
				<CategoryItems view={1} />
			</Segment>
		</div>
	);
};

export default Home;
