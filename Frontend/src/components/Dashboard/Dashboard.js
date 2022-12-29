import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { logout } from '../Reducer/authReducer';
import { useNavigate } from 'react-router-dom';
export default function Dashboard() {
	const user = JSON.parse(localStorage.getItem('user'));
	const dispatch = useDispatch();
	let navigate = useNavigate();
	useEffect(() => {
		if (user) {
			console.log(user);
		} else {
			navigate('/');
		}
	}, [user]);

	const onLogout = () => {
		dispatch(logout());
		navigate('/');
	};
	return (
		<div>
			Dashboard
			<Button onClick={onLogout}>logout</Button>
		</div>
	);
}
