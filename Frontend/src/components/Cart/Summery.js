import React from "react";
import { Button, Card, Feed, Grid, Icon } from "semantic-ui-react";

const Summary = () => {
	return (
		<Card>
			<Card.Content>
				<Card.Header>Order Summary</Card.Header>
			</Card.Content>
			<Card.Content>
				<Feed>
					<Feed.Event>
						<Feed.Content>
							<Grid>
								<Grid.Row>
									<Grid.Column width={12}>
										<Feed.Summary>Total Price(MRP):</Feed.Summary>
									</Grid.Column>
									<Grid.Column width={4}>
										<Feed.Summary>1000</Feed.Summary>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column width={12}>
										<Feed.Summary>GST:</Feed.Summary>
									</Grid.Column>
									<Grid.Column width={4}>
										<Feed.Summary>18%</Feed.Summary>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column width={12}>
										<Feed.Summary>Coupon Applied:</Feed.Summary>
									</Grid.Column>
									<Grid.Column width={4}>
										<Feed.Summary>18%</Feed.Summary>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column width={12}>
										<Feed.Summary>To be paid:</Feed.Summary>
									</Grid.Column>
									<Grid.Column width={4}>
										<Feed.Summary>1180</Feed.Summary>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column width={9}>Your Delivery Location</Grid.Column>
									<Grid.Column width={7}>
										<Feed.Summary>
											<Icon name="location arrow" />
											{/* {locationInfo.city} */}
										</Feed.Summary>
									</Grid.Column>
								</Grid.Row>
							</Grid>
						</Feed.Content>
					</Feed.Event>
				</Feed>
			</Card.Content>
			<Button>CheckOut</Button>
		</Card>
	);
};

export default Summary;
