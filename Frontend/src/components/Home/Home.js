import React, { useEffect } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { getCategory } from "../Reducer/category";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
	const { categories } = useSelector((state) => state.category.data);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCategory());
		console.log(categories);
	}, []);
	return (
		<div>
			{categories && (
				<>
					{categories.map((category) => (
						<Card>
							<Image src={category.categoryImage} wrapped ui={false} />
							<Card.Content>
								<Card.Header>{category.categoryName}</Card.Header>
								<Card.Meta>
									<span className="date">Joined in 2015</span>
								</Card.Meta>
								<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
							</Card.Content>
							<Card.Content extra>
								<a>
									<Icon name="user" />
									22 Friends
								</a>
							</Card.Content>
						</Card>
					))}
				</>
			)}
		</div>
	);
}
