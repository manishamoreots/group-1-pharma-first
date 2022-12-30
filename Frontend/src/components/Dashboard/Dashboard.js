/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { logout } from '../Reducer/authReducer';
import { useNavigate } from 'react-router-dom';
import Loader from '../Loader/Loader';

const Dashboard = () => {
	const user = JSON.parse(localStorage.getItem('user'));
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	let navigate = useNavigate();
	useEffect(() => {
		if (user) {
			console.log(user);
		} else {
			navigate('/');
		}
	}, [user]);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, [loading]);

	const onLogout = () => {
		dispatch(logout());
		navigate('/');
	};
	return (
		<div>
			{loading ? (
				<div style={{ display: 'flex', justifyContent: 'center', marginTop: '10%' }}>
					<Loader />
				</div>
			) : (
				<>
					Dashboard
					<Button onClick={onLogout}>logout</Button>
				</>
			)}
		</div>
	);
};
export default Dashboard;
