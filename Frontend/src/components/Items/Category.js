/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Card, Container, Image } from "semantic-ui-react";
import { getCategory } from "../Reducer/categoryReducer";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { getCategoryItem } from "../Reducer/itemReducer";
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
const Category = ({ itemId }) => {
	const { categories } = useSelector((state) => state.category.data);
	const { items } = useSelector((state) => state.items.data);
	const dispatch = useDispatch();
	useEffect(() => {
		if (itemId) {
			dispatch(getCategoryItem(Number(itemId)));
		}
		dispatch(getCategory());
	}, [itemId]);

	return (
		<>
			{itemId ? (
				<>
					<Container>
						<span style={{fontSize:"18px",color:"#212121"}}>Our Some Products </span>
						<div className="carousel-border">
							<Carousel responsive={responsive}>
								{items.map((item, index) => (
									<Link
										to={`/itemDesc/${item.id}`}
										key={index}
										className="carousel-card"
										style={{ cursor: "pointer" }}
									>
										<div className="category-card">
											<Card size="tiny">
												<Image style={{ padding: "15%" }} src={item.categoryImg} wrapped ui={false} />
												<div className="carousel-card-name">
													<Card.Description>{`${item.categoryImgName.slice(0, 20)}...`}</Card.Description>
												</div>
											</Card>
										</div>
									</Link>
								))}
							</Carousel>
						</div>
					</Container>
				</>
			) : (
				<Container>
					<span style={{fontSize:"18px",color:"#212121"}}>Shop By Category</span>
					<div className="carousel-border">
						<Carousel responsive={responsive}>
							{categories.map((category, index) => (
								<Link
									to={`/categoryItem/${category.id}`}
									key={index}
									className="carousel-card"
									style={{ cursor: "pointer" }}
								>
									<div className="category-card">
										<Card size="tiny">
											<Image style={{ padding: "15%" }} src={category.categoryImage} wrapped ui={false} />
											<div className="carousel-card-name">
												<Card.Description>{category.categoryName}</Card.Description>
											</div>
										</Card>
									</div>
								</Link>
							))}
						</Carousel>
					</div>
				</Container>
			)}
		</>
	);
};

export default Category;
