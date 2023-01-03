import React from "react";
import { Icon, Label, Grid, Image, Container } from "semantic-ui-react";

export default function Cart() {
	return (
		<Container>
			<Grid>
				<Grid.Row>
					<Grid.Column width={8}>
						<Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
					</Grid.Column>
					<Grid.Column width={8}>
						<Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Container>
	);
}
