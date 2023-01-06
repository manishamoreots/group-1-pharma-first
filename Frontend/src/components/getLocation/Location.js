/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../Reducer/commonReducer";

const Location = () => {
	const dispatch = useDispatch();
	const { locationInfo } = useSelector((state) => state.common.data);
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

	return <> </>;
};

export default Location;
