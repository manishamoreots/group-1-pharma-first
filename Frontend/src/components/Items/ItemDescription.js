/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Container, Dropdown, Grid, Header, Image, Menu, Segment } from "semantic-ui-react";
import { getItemDescription } from "../Reducer/itemReducer";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";

const options = [
	{ key: 1, text: "1 box", value: 1 },
	{ key: 2, text: "2 Box", value: 2 },
	{ key: 3, text: "3 Box", value: 3 },
];
const ItemDescription = () => {
	const dispatch = useDispatch();
	const { description, loading } = useSelector((state) => state.items.data);
	const { id } = useParams();
	useEffect(() => {
		console.log(loading);
		setTimeout(() => {
			dispatch(getItemDescription(Number(id)));
		}, 1000);
	}, [id]);
	useEffect(() => {
		console.log(description);
	}, [description]);
	return (
		<Container>
			{loading ? (
				<Loader />
			) : (
				<>
					{description && (
						<Grid>
							<Grid.Column width={5}>
								<Image src={description.itemImage} />
								<Button style={{ margin: 0 }}>Add to Cart</Button>
							</Grid.Column>
							<Grid.Column width={6}>
								<Header>{description.itemName}</Header>
								<ul>
									{description.desc.keybenefit.map((item, index) => (
										<li key={index}>{item}</li>
									))}
								</ul>
							</Grid.Column>

							<Grid.Column width={4}>
								<Segment size="large">
									{description.itemPrice}
									<br />
									<br />
									<Menu compact>
										<Dropdown text="select" options={options} simple item />
									</Menu>
									of 50 Test Strips
									<Button>Add To cart</Button>
								</Segment>
							</Grid.Column>
						</Grid>
					)}
				</>
			)}
		</Container>
	);
};

export default ItemDescription;
