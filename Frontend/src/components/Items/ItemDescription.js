/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Container, Dropdown, Grid, Header, Image, Menu, Segment, Card, Rating, Icon } from "semantic-ui-react";
import { getItemDescription } from "../Reducer/itemReducer";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { addToCart } from "../Reducer/cartReducer";
import swal from "sweetalert";
import "./itemdescription.css";

const options = [
	{ key: 1, text: "2 item", value: 2 },
	{ key: 2, text: "3 item", value: 3 },
	{ key: 3, text: "4 item", value: 4 },
	{ key: 4, text: "5 item", value: 5 },
	{ key: 5, text: "6 item", value: 6 },
];
const ItemDescription = () => {
	const dispatch = useDispatch();
	const { description } = useSelector((state) => state.items.data);
	const { cartItem } = useSelector((state) => state.cart.data);
	const [itemCount, setItemCount] = useState(1);
	const { id } = useParams();
	const user = JSON.parse(localStorage.getItem("user"));
	useEffect(() => {
		dispatch(getItemDescription(Number(id)));
	}, [id]);
	return (
		<Container>
			<>
				{description && description.itemName && (
					<div className="itemDescription-hero-container">
						<Grid>
							<div className="img-container">
								<Grid.Column width={5}>
									<Image src={description.itemImage} />
								</Grid.Column>
							</div>

							<Grid.Column
								width={7}
								style={{
									boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
									padding: "2%",
								}}
							>
								<div className="description-name">
									<Header>{description.itemName}</Header>
								</div>
								<div className="rating-review">
									<button className="rating-button">
										{Math.floor(Math.random() * 4) + 1.3}
										<span>
											<Rating className="ui rating" size="big" />
										</span>
									</button>
									<div style={{ marginTop: "2%" }}>
										<Card.Meta>
											{Math.floor(Math.random() * 500) + 94} Rating &{" "}
											{Math.floor(Math.random() * 500) + 93} Reviews
										</Card.Meta>
									</div>
								</div>

								<ul style={{ width: "100%" }}>
									<div className="product-highlights-container">Product Highlights</div>
									{description.highlights.map((item, index) => (
										<div className="product-highlights-details">
											<li key={index}>{item}</li>
										</div>
									))}
								</ul>
							</Grid.Column>

							<Grid.Column width={4}>
								<Segment size="large">
									<div className="top-heading">
										<Image src="https://www.1mg.com/images/social_cue.svg" alt="social cue" size="20%" />
										<p style={{ marginLeft: "4%" }}>
											{Math.floor(Math.random() * 500) + 3} people bought this recently
										</p>
									</div>

									<div className="main-container">
										<div style={{ display: "flex" }}>
											<h4 style={{ fontSize: "25px", display: "flex" }}>
												<Icon className="rupee sign" /> {description.itemPrice}
											</h4>
											<Card.Meta className="itemDescription-offerprice">
												{`${Math.floor(Math.random() * description.itemPrice) - 5}`}
											</Card.Meta>
											<Card.Meta className="itemDescription-offerpercent">
												{`${Math.floor(Math.random() * 4) + 5} % off`}
											</Card.Meta>
										</div>

										<div className="itemDescription-dropdown">
											<Menu compact>
												<Dropdown
													text={`${itemCount} Item`}
													options={options}
													simple
													item
													size="tiny"
													onChange={(e, { value }) => {
														setItemCount(value);
													}}
												/>
											</Menu>
											<span style={{ marginTop: "5%" }}>of 50 Test Strips</span>
										</div>

										<Button
											onClick={() => {
												if (user) {
													const newData = cartItem.filter((c) => c.id === description.id);
													if (newData[0]) {
														swal({ text: "Already Added" });
													} else {
														dispatch(addToCart({ ...description, count: itemCount }));
														swal({ text: "Item Added" });
													}
												} else {
													swal({ text: "Please login" });
												}
											}}
											width="100%"
											style={{ marginTop: "5%" }}
										>
											Add To cart
										</Button>
									</div>
								</Segment>
							</Grid.Column>
						</Grid>
						<Container style={{ display: "flex" }}>
							<div className="item-description-container">
								<ul>
									<div className="item-name">
										<h3>Information about {description.itemName}</h3>
									</div>
									<div style={{ width: "98%" }}>
										<strong>{description.itemName} </strong>
										{description.itemInfo}
									</div>

									<div className="key-Ingredients-container">Key Ingredients :</div>
									{description.desc.keybenefit.map((item, index) => (
										<div className="key-Ingredients-details">
											<li key={index}>{item}</li>
										</div>
									))}
								</ul>
								<ul>
									<div className="key-Ingredients-container">Directions For Use :</div>
									{description.desc.directions.map((item, index) => (
										<div className="key-Ingredients-details">
											<li key={index}>{item}</li>
										</div>
									))}
								</ul>
								<ul>
									<div className="key-Ingredients-container">Safety Information :</div>
									{description.desc.Safetyinfo &&
										description.desc.Safetyinfo.map((item, index) => (
											<div className="key-Ingredients-details">
												<li key={index}>{item}</li>
											</div>
										))}
								</ul>
							</div>

							<div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} className="Rating-and-Review">
								<h2 style={{ marginBottom: "2%" }}>Rating & Reviews</h2>
								<Header as="h1" style={{ color: "limegreen" }}>
									{Math.floor(Math.random() * 4) + 4.3}
									<Rating className="ui rating" size="massive" />
								</Header>
								<div style={{ marginTop: "2%", marginBottom: "4%" }}>
									<Card.Meta>{description.ratingReview}</Card.Meta>
								</div>
								<p>
									1<Rating className="ui rating" disabled />
									<input type="range" value={100} />
									<span>35%</span>
								</p>
								<p>
									2<Rating className="ui rating" disabled />
									<input type="range" color="cyan" />
									<span>45%</span>
								</p>
								<p>
									3<Rating className="ui rating" disabled />
									<input type="range" />
									<span>50%</span>
								</p>
								<p>
									4<Rating className="ui rating" disabled />
									<input type="range" />
									<span>75%</span>
								</p>
								<p>
									5<Rating className="ui rating" disabled />
									<input type="range" />
									<span>100%</span>
								</p>
							</div>
						</Container>
					</div>
				)}
			</>
		</Container>
	);
};

export default Loader(ItemDescription);
