import React from "react";
import { Container, Divider, Grid, Header, Image, List, Segment, Icon } from "semantic-ui-react";
import "./footer.css";

export default function Footer() {
	return (
		<>
			<div>
				<Segment inverted vertical style={{ margin: "5em 0em 0em", padding: "5em 0em" }} className="footer-container">
					<Container textAlign="center">
						<Grid divided inverted stackable>
							<Grid.Column width={3}>
								<Header inverted as="h4" content="Know Us" />
								<List link inverted>
									<List.Item as="a">About Us</List.Item>
									<List.Item as="a">Contact Us</List.Item>
									<List.Item as="a">Business Partnership</List.Item>
									<List.Item as="a">Careers</List.Item>
									<List.Item as="a">Become a Health Partner</List.Item>
								</List>
							</Grid.Column>
							<Grid.Column width={3}>
								<Header inverted as="h4" content="Our Policies" />
								<List link inverted>
									<List.Item as="a">Privacy Policy</List.Item>
									<List.Item as="a">Terms and Conditions</List.Item>
									<List.Item as="a">Return Policy</List.Item>
									<List.Item as="a">Editorial Policy</List.Item>
									<List.Item as="a">IP Policy</List.Item>
								</List>
							</Grid.Column>
							<Grid.Column width={3}>
								<Header inverted as="h4" content="Our Services" />
								<List link inverted>
									<List.Item as="a">Order Medicines</List.Item>
									<List.Item as="a">Book Lab Tests</List.Item>
									<List.Item as="a">Consult a Doctor</List.Item>
									<List.Item as="a">Ayurveda Articles</List.Item>
									<List.Item as="a">Care Plan</List.Item>
								</List>
							</Grid.Column>
							<Grid.Column width={7}>
								<Header inverted as="h4" content="Connect" />
								<List link inverted>
									<List.Item as="a">Social Links</List.Item>
								</List>
								<List horizontal inverted divided link size="small" className="social-icons">
									<Icon name="facebook square" size="big" />
									<Icon name="instagram" size="big" />
									<Icon name="twitter square" size="big" />
									<Icon name="linkedin" size="big" />
									<Icon name="youtube square" size="big" />
								</List>
							</Grid.Column>
						</Grid>

						<Divider inverted section />
						<Image centered size="mini" src="/logo.png" />

						<div className="style__copyright">
							© 2022 Tata 1mg. All rights reserved. In compliance with Drugs and Cosmetics Act, 1940 and Drugs and
							Cosmetics Rules, 1945, we don't process requests for Schedule X and other habit forming drugs.
						</div>
					</Container>
				</Segment>
			</div>
		</>
	);
}
