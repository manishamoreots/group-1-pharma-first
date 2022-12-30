import React from 'react';
import { Link } from 'react-router-dom';
import ItemDescription from '../Items/ItemDescription';
import Category from '../Items/Category';
const Home = () => {
	return (
		<div>
			<Link to="/login">Login</Link>
			<Category />
			<ItemDescription />
		</div>
	);
};

export default Home;
