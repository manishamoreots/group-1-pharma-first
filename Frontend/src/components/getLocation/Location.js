import React, { useEffect, useState } from "react";
import { Input } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../Reducer/commonReducer";

const Location = () => {
	const dispatch = useDispatch();
	const { locationInfo } = useSelector((state) => state.common.data);
	console.log(locationInfo);
	useEffect(() => {
		if (!locationInfo.city) {
			navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
		}
	}, []);
	const successCallback = (position) => {
		const { latitude, longitude } = position.coords;
		dispatch(getLocation({ latitude, longitude }));
	};
	const errorCallback = (error) => {
		console.log(error);
	};

	return (
		<div>
			<Input value={locationInfo.city} type="text" icon="map marker alternate" placeholder="Current location" />
		</div>
	);
};

export default Location;
