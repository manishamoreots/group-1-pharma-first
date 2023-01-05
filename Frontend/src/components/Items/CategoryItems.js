/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getCategoryItem } from "../Reducer/itemReducer";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Icon, Image, Rating } from "semantic-ui-react";
import Loader from "../Loader/Loader";
// import "./card.css";

const CategoryItems = () => {
	const dispatch = useDispatch();
	const { items, loading } = useSelector((state) => state.items.data);
	const { id } = useParams();
	useEffect(() => {
		setTimeout(() => {
			dispatch(getCategoryItem(Number(id)));
			console.log(items);
		}, 1000);
	}, [id]);

	return (
		<div>
			{loading ? (
				<Loader />
			) : (
				<div className="services-gallery">
					{items.map((item, index) => (
						<Link key={index} to={`/itemDesc/${item.id}`} style={{ color: "black" }}>
							<div className="cart-item">
								<Card>
									<Image
										style={{
											height: "50%",
											width: "50%",
											padding: "5%",
										}}
										src={item.itemImage}
									/>
									<Card.Description style={{ justifyContent: "left" }}>
										{`${item.itemName.slice(0, 35)}...`}
									</Card.Description>
									<Card.Meta>
										<span>{item.netQuantity}</span>
									</Card.Meta>
									<div className="btn-container">
										<Button
											size="ui compact button"
											style={{ backgroundColor: "limegreen", color: "white" }}
											width="50%"
										>
											{Math.floor(Math.random() * 4) + 1.3}
											{item.rating}
											<span className="rating">
												<Rating className="ui rating" size="mini" />
											</span>
										</Button>
										<Card.Meta style={{ justifyContent: "center", marginTop: "2%", marginLeft: "5%" }}>
											{Math.floor(Math.random() * 500) + 94} rating
										</Card.Meta>
									</div>
									<div className="cart-bottom">
										<Card.Description>
											<strike>MRP {Number(item.itemPrice) - 5}</strike>
											<Icon className="rupee sign" />
											{item.itemPrice}
											<sup style={{ color: "green", fontSize: 12 }}>
												{`${Math.floor(Math.random() * 4) + 5} % off`}
											</sup>
											<br />
										</Card.Description>
										<div className="add-btn" style={{ color: "tomato" }}>
											ADD
										</div>
									</div>
								</Card>
							</div>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default CategoryItems;
