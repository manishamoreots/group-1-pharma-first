/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Container, Dropdown, Grid, Header, Image, Menu, Segment, Card, Rating, Icon } from "semantic-ui-react";
import { getItemDescription } from "../Reducer/itemReducer";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import { addToCart } from "../Reducer/cartReducer";
import swal from "sweetalert";
import "./itemdescription.css";

const options = [
	{ key: 1, text: "2 Jar", value: 1 },
	{ key: 2, text: "3 Jar", value: 2 },
	{ key: 3, text: "4 Jar", value: 3 },
	{ key: 4, text: "5 Jar", value: 4 },
	{ key: 5, text: "6 Jar", value: 5 },
];
const ItemDescription = () => {
	const dispatch = useDispatch();
	const { description, loading } = useSelector((state) => state.items.data);
	const { isUser } = useSelector((state) => state.cart.data);
	const { id } = useParams();
	useEffect(() => {
		dispatch(getItemDescription(Number(id)));
	}, [id]);
	return (
		<Container>
			<>
				{loading ? (
					<Loader />
				) : (
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
												{description.ratingPoints}
												<span>
													<Rating className="ui rating" size="big" />
												</span>
											</button>
											<div style={{ marginTop: "2%" }}>
												<Card.Meta>{description.ratingReview}</Card.Meta>
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
												<Image
													src="https://www.1mg.com/images/social_cue.svg"
													alt="social cue"
													size="20%"
												/>
												<p style={{ marginLeft: "4%" }}>647 people bought this recently</p>
											</div>

											<div className="main-container">
												<div style={{ display: "flex" }}>
													<h4 style={{ fontSize: "25px", display: "flex" }}>
														<Icon className="rupee sign" /> {description.itemPrice}
													</h4>
													<Card.Meta className="itemDescription-offerprice">
														{description.offerPrice}
													</Card.Meta>
													<Card.Meta className="itemDescription-offerpercent">
														{description.offPercentage}
													</Card.Meta>
												</div>

												<div className="itemDescription-dropdown">
													<Menu compact>
														<Dropdown text="1 Jar" options={options} simple item size="tiny" />
													</Menu>
													<span style={{ marginTop: "5%" }}>of 50 Test Strips</span>
												</div>

												<Button
													onClick={() => {
														if (isUser) {
															swal({ text: "Please login" });
														}
														dispatch(addToCart(description));
														swal({ text: "Item Added" });
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
											4.5
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
				)}
			</>
		</Container>
	);
};

export default ItemDescription;
