/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { getCategory } from '../Reducer/categoryReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getSpecificItem } from '../Reducer/itemReducer';
const Category = () => {
	const { categories } = useSelector((state) => state.category.data);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCategory());
		// console.log(categories);
	}, []);

	return (
		<div>
			{categories && (
				<>
					{categories.map((category, index) => (
						<div key={index} onClick={() => dispatch(getSpecificItem(category.id))} style={{ cursor: 'pointer' }}>
							<Card>
								<Image src={category.categoryImage} />
								<Card.Content>
									<Card.Header>{category.categoryName}</Card.Header>
								</Card.Content>
							</Card>
						</div>
					))}
				</>
			)}
		</div>
	);
};

export default Category;
