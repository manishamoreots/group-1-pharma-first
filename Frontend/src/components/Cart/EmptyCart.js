import React from "react";

import { Icon, Grid, Container, Feed, Button, Card, Input } from "semantic-ui-react";
const EmptyCart = () => {
	return (
		<div>
			<Container>
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
														<h1>Cart Is Empty</h1>
														{/* {user ? (
															<div style={{ display: "flex", justifyContent: "flex-start" }}>
																{cartItem.map((item) => ( */}
														<>
															<Grid.Column width={5}>
																{/* <Feed.Date>{`${item.itemName.slice(0, 20)}...`}</Feed.Date> */}
																<div>
																	<Grid.Column width={5}>
																		<Button>
																			<Icon name="add" size="small" />
																		</Button>
																		<Input
																			disabled
																			placeholder={"item quantity"}
																			style={{
																				width: 50,
																				color: "black",
																			}}
																		/>
																		<Button>
																			<Icon name="minus" size="small" />
																		</Button>
																	</Grid.Column>
																</div>
															</Grid.Column>
														</>
														{/* ))}
															</div>
														) : null} */}
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
								{/* <Coupons />
								<Summary /> */}
							</Grid.Column>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</div>
	);
};

export default EmptyCart;
