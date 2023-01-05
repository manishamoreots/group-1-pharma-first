import React from "react";
import { Container, Grid, Header, Item, Image, Card } from "semantic-ui-react";
function Care() {
	return (
		<Container>
			<Grid>
				<Grid.Row>
					<Grid.Column>{/* <Container>lorem*5</Container> */}</Grid.Column>
				</Grid.Row>
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
						<Item.Group>
							<Item>
								<Item.Image
									size="tiny"
									src="https://onemg.gumlet.io/image/upload/v1617168621/marketing/zby23g1o4u5pdp4imzan.png"
								/>

								<Item.Content>
									<Item.Header as="a">Save Extra 7%</Item.Header>
									<Item.Meta>Description</Item.Meta>
									<Item.Description></Item.Description>
									<Item.Extra>Additional Details</Item.Extra>
								</Item.Content>
							</Item>

							<Item>
								<Item.Image
									size="tiny"
									src="https://onemg.gumlet.io/image/upload/v1617168794/marketing/xrrbnozjyplezqml6crx.png"
								/>

								<Item.Content>
									<Item.Header as="a">No Shipping Charges</Item.Header>
									<Item.Meta>Description</Item.Meta>
									<Item.Description></Item.Description>
									<Item.Extra>Additional Details</Item.Extra>
								</Item.Content>
							</Item>
						</Item.Group>
					</Grid.Column>
					<Grid.Column width={8}>
						<Item.Group>
							<Item>
								<Item.Image
									size="tiny"
									src="https://onemg.gumlet.io/image/upload/v1617168743/marketing/dmkbmj7zdcumqhvloswv.png"
								/>

								<Item.Content>
									<Item.Header as="a">Free Lab Test</Item.Header>
									<Item.Meta>Description</Item.Meta>
									<Item.Description></Item.Description>
									<Item.Extra>Additional Details</Item.Extra>
								</Item.Content>
							</Item>

							<Item>
								<Item.Image
									size="tiny"
									src="https://onemg.gumlet.io/image/upload/v1617168863/marketing/ll8w1jwk0yjkbcx1dpcw.png"
								/>

								<Item.Content>
									<Item.Header as="a">Free E-Consultant</Item.Header>
									<Item.Meta>Description</Item.Meta>
									<Item.Description></Item.Description>
									<Item.Extra>Additional Details</Item.Extra>
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
									src="https://onemg.gumlet.io/image/upload/v1617169012/marketing/mqwi4hji0xmevi0leqxt.png"
									size="small"
									// ui={false}
									wrapped
								/>
							</Card.Meta>
							<Card.Content>
								<Card.Header>FREE Health Monitoring</Card.Header>

								<Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
							</Card.Content>
							<Card.Content extra></Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column width={4}>
						<Card>
							<Card.Meta>
								<Image
									src="https://onemg.gumlet.io/image/upload/v1617169094/marketing/rciejxt8uupxvkdoztx1.png"
									wrapped
									// ui={false}
									size="small"
								/>
							</Card.Meta>
							<Card.Content>
								<Card.Header>Priority Processing</Card.Header>
								<Card.Meta>Joined in 2016</Card.Meta>
								<Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
							</Card.Content>
							<Card.Content extra></Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column width={4}>
						<Card>
							<Card.Meta>
								<Image
									src="https://onemg.gumlet.io/image/upload/v1617169138/marketing/q2xl4gwlyw55awctv1lk.png"
									wrapped
									size="small"
								/>
							</Card.Meta>

							<Card.Content>
								<Card.Header>Premium Customer Support</Card.Header>
								<Card.Meta>Joined in 2016</Card.Meta>
								<Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
							</Card.Content>
							<Card.Content extra></Card.Content>
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

export default Care;
