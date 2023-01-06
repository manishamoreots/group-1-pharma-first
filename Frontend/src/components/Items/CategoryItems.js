/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getCategoryItem } from "../Reducer/itemReducer";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Icon, Rating } from "semantic-ui-react";
import Loader from "../Loader/Loader";
import swal from "sweetalert";
import "./categoryitem.css";
import { addToCart } from "../Reducer/cartReducer";

const CategoryItems = ({ view }) => {
	const dispatch = useDispatch();
	const { items, loading } = useSelector((state) => state.items.data);
	const { isUser } = useSelector((state) => state.cart.data);
	const { id } = useParams();
	useEffect(() => {
		setTimeout(() => {
			if (view) {
				dispatch(getCategoryItem(view));
			} else {
				dispatch(getCategoryItem(Number(id)));
			}
		}, 1000);
	}, [id]);

	return (
		<div>
			{loading ? (
				<Loader />
			) : (
				<div className="cart-gallery">
					{items.map((item, index) => (
						<Link key={index} to={`/itemDesc/${item.id}`} style={{ color: "black" }}>
							<Card className="cart-item">
								<img className="grid-item-Image" alt="grid item" src={item.itemImage} />
								<div className="cart-description">
									<Card.Description>{`${item.itemName.slice(0, 35)}...`}</Card.Description>
									<div className="btn-container">
										<button size="ui compact button" className="rating-btn">
											<strong> {Math.floor(Math.random() * 4) + 1.3}</strong>
											{item.rating}
											<span>
												<Rating className="ui rating" size="small" color={"white"} />
											</span>
										</button>
										<Card.Meta
											style={{
												justifyContent: "center",
												marginTop: "2%",
												marginLeft: "5%",
											}}
										>
											{Math.floor(Math.random() * 500) + 94} Rating &{" "}
											{Math.floor(Math.random() * 500) + 93} Reviews
										</Card.Meta>
									</div>
									<div className="cart-bottom">
										<Card.Description style={{ margin: "2%" }}>
											MRP
											<strike> {item.offerPrice}</strike>
											<span
												style={{
													color: "green",
													fontSize: 13,
													marginLeft: "2%",
													margin: "2%",
												}}
											>
												{`${Math.floor(Math.random() * 4) + 5} % off`}
											</span>
										</Card.Description>
										<div
											style={{
												display: "flex",
												justifyContent: "space-between",
											}}
										>
											<div>
												<Icon className="rupee sign" />
												<span style={{ margin: "0" }}>{item.itemPrice}</span>
											</div>
											<div className="add-btn" style={{ color: "tomato", fontWeight: "300" }}>
												<Button
													onClick={() => {
														if (isUser) {
															swal({ text: "Please login" });
														}
														dispatch(addToCart(item));
													}}
												>
													ADD
												</Button>
											</div>
										</div>
									</div>
								</div>
							</Card>
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export default CategoryItems;
