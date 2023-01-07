/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Icon, Grid, Container, Feed, Button, Card, Input } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCartItems, removeFromCart } from "../Reducer/cartReducer";
import Coupons from "./Coupons";
import Summary from "./Summery";
import EmptyCart from "./EmptyCart";
export default function Cart() {
	const dispatch = useDispatch();
	const { cartItem } = useSelector((state) => state.cart.data);
	useEffect(() => {
		dispatch(getCartItems());
		console.log(cartItem);
	}, []);
	return (
		<Container>
			{cartItem && cartItem.length <= 0 ? (
				<EmptyCart />
			) : (
				<>
					<Grid>
						<Grid.Row>
							<Grid.Column width={11}>
								<Card style={{ width: 750 }}>
									<Card.Content>
										<Card.Header>Items In Your Cart</Card.Header>
									</Card.Content>
									<Card.Content>
										<Feed>
											<Feed.Event>
												<Feed.Content>
													<Grid>
														<Grid.Row>
															<Grid.Column width={12}>
																<Feed.Summary>Item Name</Feed.Summary>
															</Grid.Column>
															<Grid.Column width={4}>
																<Feed.Summary>Item Price</Feed.Summary>
															</Grid.Column>
														</Grid.Row>
														<Grid.Row>
															{cartItem.map((item) => (
																<>
																	<Grid.Column width={5}>
																		{item.count}
																		<div>Price:{item.itemPrice}</div>
																		<Feed.Date>{`${item.itemName.slice(
																			0,
																			20
																		)}...`}</Feed.Date>
																		<div>
																			<Grid.Column width={5}>
																				<Button
																					onClick={() =>
																						dispatch(addToCart(item))
																					}
																				>
																					<Icon name="add" size="small" />
																				</Button>
																				<Input
																					value={item.count}
																					disabled
																					placeholder={"item quantity"}
																					style={{
																						width: 50,
																						color: "black",
																					}}
																				/>
																				<Button
																					onClick={() =>
																						dispatch(removeFromCart(item))
																					}
																				>
																					<Icon name="minus" size="small" />
																				</Button>
																			</Grid.Column>
																		</div>
																	</Grid.Column>
																</>
															))}
														</Grid.Row>
														<Grid.Row></Grid.Row>
													</Grid>
												</Feed.Content>
											</Feed.Event>
										</Feed>
									</Card.Content>
								</Card>
							</Grid.Column>
							<Grid.Column width={5}>
								<Grid.Column>
									<Coupons />
									<Summary items={cartItem} />
								</Grid.Column>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</>
			)}
		</Container>
	);
}
