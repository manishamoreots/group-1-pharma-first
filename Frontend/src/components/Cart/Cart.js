/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Icon, Grid, Container, Button, Card, Item } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartItems, removeFromCart } from "../Reducer/cartReducer";
import Coupons from "./Coupons";
import Summary from "./Summery";
import EmptyCart from "./EmptyCart";
import Loader from "../Loader/Loader";
export default function Cart() {
	const dispatch = useDispatch();
	const { cartItem } = useSelector((state) => state.cart.data);
	const [coupons, setCoupons] = useState(false);
	useEffect(() => {
		let cartItems = JSON.parse(localStorage.getItem("cartItem"));
		dispatch(getCartItems(cartItems));
	}, []);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, [loading]);
	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<Container>
					{cartItem && cartItem.length <= 0 ? (
						<EmptyCart />
					) : (
						<Container>
							<Grid>
								<Grid.Row>
									<Grid.Column width={11}>
										<Card style={{ width: 750 }}>
											<Card.Content>
												<Card.Header style={{ textAlign: "center" }}>Items In Your Cart</Card.Header>
											</Card.Content>
											<Card.Content>
												{cartItem.map((item) => (
													<>
														<Item.Group divided>
															<Item
																style={{
																	paddingLeft: 20,
																	paddingRight: 20,
																}}
															>
																<Item.Image
																	src={item.itemImage}
																	size="tiny"
																	style={{
																		paddingTop: 30,
																		paddingBottom: 20,
																	}}
																/>
																<Item.Content
																	style={{
																		paddingTop: 50,
																	}}
																>
																	<Item.Header as="a">
																		{`${item.itemName.slice(0, 49)}...`}
																	</Item.Header>
																	<Item.Meta>
																		<div>Price : {item.itemPrice}</div>
																	</Item.Meta>
																	<Item.Description>
																		<Item.Extra>
																			<Button.Group floated="right">
																				<Button
																					onClick={() =>
																						dispatch(addToCart(item))
																					}
																					style={{ width: 50 }}
																				>
																					<Icon name="add" size="small" />
																				</Button>
																				<Button
																					disabled
																					style={{
																						width: 50,
																						color: "black",
																					}}
																				>
																					{item.count}
																				</Button>
																				<Button
																					onClick={() =>
																						dispatch(removeFromCart(item))
																					}
																					style={{ width: 50 }}
																				>
																					<Icon name="minus" size="small" />
																				</Button>
																			</Button.Group>
																		</Item.Extra>
																	</Item.Description>
																</Item.Content>
															</Item>
														</Item.Group>
													</>
												))}
											</Card.Content>
										</Card>
									</Grid.Column>
									<Grid.Column width={5}>
										<Grid.Column>
											<Coupons setIsTrue={(value) => setCoupons(value)} />
											<Summary coupons={coupons} items={cartItem} />
										</Grid.Column>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Container>
					)}
				</Container>
			)}
		</>
	);
}
