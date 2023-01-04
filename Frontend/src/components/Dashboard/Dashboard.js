/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const Dashboard = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const [loading, setLoading] = useState(true);
	let navigate = useNavigate();
	useEffect(() => {
		if (user) {
			console.log(user);
		} else {
			navigate("/");
		}
	}, [user]);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, [loading]);

	return (
		<div>
			{loading ? (
				<div>
					<Loader />
				</div>
			) : (
				<>Dashboard</>
			)}
		</div>
	);
};
export default Dashboard;
