/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getCategoryItem } from "../Reducer/itemReducer";
import { useDispatch, useSelector } from "react-redux";
import { Card, Icon, Image } from "semantic-ui-react";
import Loader from "../Loader/Loader";

const CategoryItems = () => {
	const dispatch = useDispatch();
	const { items, loading } = useSelector((state) => state.items.data);
	const { id } = useParams();
	useEffect(() => {
		setTimeout(() => {
			dispatch(getCategoryItem(Number(id)));
		}, 1000);
	}, [id]);

	return (
		<div>
			{loading ? (
				<Loader />
			) : (
				<>
					{items.map((item, index) => (
						<Link key={index} to={`/itemDesc/${item.id}`}>
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
						</Link>
					))}
				</>
			)}
		</div>
	);
};

export default CategoryItems;
