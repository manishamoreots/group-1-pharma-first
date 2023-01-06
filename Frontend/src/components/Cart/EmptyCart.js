import React from "react";

import { Grid, Container, Feed, Card } from "semantic-ui-react";
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
														<>
															<Grid.Column width={5}>
																<h1>Cart Is Empty</h1>
															</Grid.Column>
														</>
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
							<Grid.Column></Grid.Column>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</div>
	);
};

export default EmptyCart;
