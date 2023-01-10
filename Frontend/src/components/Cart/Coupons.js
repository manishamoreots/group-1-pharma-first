import React, { useState } from "react";
import { Button, Card, Feed, Grid, Input } from "semantic-ui-react";
import swal from "sweetalert";
const couponArray = ["Rahul", "Arun", "Manisha"];
const Coupons = ({ setIsTrue }) => {
	const [coupon, setCoupon] = useState("");
	const applyCoupon = () => {
		const filter = couponArray.find((item) => item === coupon);
		if (filter) {
			setIsTrue(true);
			swal({ text: "Coupons Applied" });
			setCoupon("");
		} else {
			swal({ text: "Wrong Code", icon: "error" });
		}
	};
	return (
		<Grid.Column>
			<Card>
				<Card.Content>
					<Card.Header>Add Coupon</Card.Header>
				</Card.Content>
				<Card.Content>
					<Feed>
						<Feed.Event>
							<Feed.Content>
								<Grid>
									<Grid.Row>
										<Grid.Column width={12}>
											<Feed.Summary>
												<Input
													focus
													value={coupon}
													icon="tags"
													onChange={(e, { value }) => setCoupon(value)}
													iconPosition="left"
													placeholder="Enter Coupon"
													type="text"
												/>
											</Feed.Summary>
										</Grid.Column>
									</Grid.Row>
								</Grid>
							</Feed.Content>
						</Feed.Event>
					</Feed>
				</Card.Content>
				<Button onClick={applyCoupon}>Apply Coupon</Button>
			</Card>
		</Grid.Column>
	);
};

export default Coupons;
