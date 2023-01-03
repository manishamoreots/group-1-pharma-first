import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";

const CategoryGrid = () => {
	return (
		<>
			<Card>
				<Image src="/images/avatar/large/matthew.png" wrapped ui={false} />
				<Card.Content>
					<Card.Header>Matthew</Card.Header>
					<Card.Meta>
						<span className="date">Joined in 2015</span>
					</Card.Meta>
					<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
				</Card.Content>
				<Card.Content extra>
					<Link>
						<Icon name="user" />
						22 Friends
					</Link>
				</Card.Content>
			</Card>
		</>
	);
};
export default CategoryGrid;
