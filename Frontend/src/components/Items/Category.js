/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from "react";
import { Card, Image } from "semantic-ui-react";
import { getCategory } from "../Reducer/categoryReducer";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificItem } from "../Reducer/itemReducer";
import "./style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 8,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};
const Category = () => {
	const { categories } = useSelector((state) => state.category.data);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCategory());
		console.log(categories);
	}, []);

	return (
		<div className="carousel-border">
			<Carousel responsive={responsive}>
				{categories.map((category, index) => (
					<div
						key={index}
						className="carousel-card"
						style={{ cursor: "pointer" }}
						onClick={() => dispatch(getSpecificItem(category.id))}
					>
						<Card size="small">
							<Image style={{ padding: "15%" }} src={category.categoryImage} wrapped ui={false} />
							<Card.Description>{category.categoryName}</Card.Description>
						</Card>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default Category;
