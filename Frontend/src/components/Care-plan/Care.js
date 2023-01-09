import React from "react";
import { Container, Grid, Header, Item, Image, Card } from "semantic-ui-react";
import Loader from "../Loader/Loader";
function Care() {
	return (
		<Container>
			<Grid>
				<Grid.Row>
					<Grid.Column>
						<Container>
							<Header as="h2" icon textAlign="center">
								<Header.Content>Benefits</Header.Content>
							</Header>
						</Container>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column width={8}>
						<Item.Group style={{ marginLeft: 80 }}>
							<Item>
								<Item.Image
									style={{ height: 50, width: 50 }}
									avatar
									src="https://previews.123rf.com/images/icreative3d/icreative3d1607/icreative3d160700762/59358137-discount-7-percent-off-3d-illustration-on-white-background-.jpg"
								/>

								<Item.Content>
									<Item.Header as="a">Save Extra 7%</Item.Header>
									<Item.Meta>You can save upto 7% extra discount on all orders</Item.Meta>
								</Item.Content>
							</Item>
							<hr />

							<Item>
								<Item.Image
									style={{ height: 50, width: 50 }}
									avatar
									src="https://i.pinimg.com/originals/2e/f2/f3/2ef2f3289430a49cfbd483bf44dd2f17.jpg"
								/>

								<Item.Content>
									<Item.Header as="a">No Shipping Charges</Item.Header>
									<Item.Meta>You will get free shipping on every order *</Item.Meta>
								</Item.Content>
							</Item>
						</Item.Group>
					</Grid.Column>
					<Grid.Column width={8}>
						<Item.Group style={{ marginLeft: 180 }}>
							<Item>
								<Item.Image
									style={{ height: 50, width: 50 }}
									avatar
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUoTvUaw_rK9EjiVVSqVAM5eL2AnF1-WnT7Q&usqp=CAU"
								/>

								<Item.Content>
									<Item.Header as="a">Free Lab Test</Item.Header>
									<Item.Meta>You will get Free Lab test reports to your Home</Item.Meta>
								</Item.Content>
							</Item>
							<hr />
							<Item>
								<Item.Image
									style={{ height: 50, width: 50 }}
									avatar
									src="https://png.pngtree.com/png-clipart/20200710/original/pngtree-consulting-logo-png-image_4136394.jpg"
								/>

								<Item.Content>
									<Item.Header as="a">Free E-Consultant</Item.Header>
									<Item.Meta>You Will get 24*7 E consultant available to help </Item.Meta>
								</Item.Content>
							</Item>
						</Item.Group>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
						<Container>
							<Header as="h2" icon textAlign="center">
								<Header.Content>Additional Benefits</Header.Content>
							</Header>
						</Container>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row style={{ justifyContent: "center" }}>
					<Grid.Column width={4}>
						<Card>
							<Card.Meta>
								<Image
									src="https://png.pngtree.com/png-vector/20190615/ourlarge/pngtree-monitoringhealthheartpulsepatient-report-flat-color-icon-png-image_1485923.jpg"
									size="tiny "
									// ui={false}
									style={{ marginLeft: 75, height: 100, width: 110 }}
									wrapped
								/>
							</Card.Meta>
							<Card.Content>
								<Card.Header style={{ textAlign: "center" }}>FREE Health Monitoring</Card.Header>

								<Card.Description style={{ textAlign: "center" }}>
									You will get 24*7 health monitoring information whenever you need
								</Card.Description>
							</Card.Content>
							<Card.Content extra></Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column width={4}>
						<Card>
							<Card.Meta>
								<Image
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRlcdVSb_CxXofDYXQbiJ-0V6zA-90hyLXCQ&usqp=CAU"
									wrapped
									// ui={false}
									style={{ marginLeft: 85, height: 100, width: 100 }}
								/>
							</Card.Meta>
							<Card.Content>
								<Card.Header style={{ textAlign: "center" }}>Priority Processing</Card.Header>

								<Card.Description style={{ textAlign: "center" }}>
									Your order and purchase will be processed faster than normal users
								</Card.Description>
							</Card.Content>
							<Card.Content extra></Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column width={4}>
						<Card>
							<Card.Meta>
								<Image
									style={{ marginLeft: 72, height: 100, width: 110 }}
									src="https://cdn-icons-png.flaticon.com/512/4298/4298373.png"
									wrapped
									size="tiny"
								/>
							</Card.Meta>

							<Card.Content>
								<Card.Header style={{ textAlign: "center" }}>Premium Customer Support</Card.Header>

								<Card.Description style={{ textAlign: "center" }}>
									You will get 24*7 Premium Customer Support and consultation
								</Card.Description>
							</Card.Content>
						</Card>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column></Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
}

export default Loader(Care);
