import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Card, Feed, Grid, Icon } from "semantic-ui-react";

const Summary = ({ items, coupons }) => {
	const { locationInfo } = useSelector((state) => state.common.data);
	const [total, setTotal] = useState(0);
	useEffect(() => {
		const totalPrice = items.reduce(function (prev, cur) {
			const a = parseInt(prev);
			return a + parseInt(cur.itemPrice);
		}, 0);
		setTotal(totalPrice);
	}, [items]);

	const countTotal = items.map((c) => c.count);
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
										<Feed.Summary>{total * countTotal}</Feed.Summary>
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
								{coupons ? (
									<Grid.Row>
										<Grid.Column width={12}>
											<Feed.Summary>Coupon Applied:</Feed.Summary>
										</Grid.Column>
										<Grid.Column width={4}>
											<Feed.Summary>- 499 </Feed.Summary>
										</Grid.Column>
									</Grid.Row>
								) : null}
								<Grid.Row>
									<Grid.Column width={12}>
										<Feed.Summary>To be paid:</Feed.Summary>
									</Grid.Column>
									<Grid.Column width={4}>
										<Feed.Summary>
											{coupons
												? ((total * 18) / 100 + total).toFixed(0) * countTotal - 499
												: ((total * 18) / 100 + total).toFixed(0) * countTotal}
										</Feed.Summary>
									</Grid.Column>
								</Grid.Row>
								<Grid.Row>
									<Grid.Column width={9}>Your Delivery Location</Grid.Column>
									<Grid.Column width={7}>
										<Feed.Summary>
											<Icon name="location arrow" />
											{locationInfo.city}
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
