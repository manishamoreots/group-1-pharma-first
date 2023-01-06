/* eslint-disable react-hooks/exhaustive-deps */
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon, Modal } from "semantic-ui-react";
import { getLocation } from "../Reducer/commonReducer";

const MapModel = () => {
	const [open, setOpen] = useState(false);
	const { locationInfo } = useSelector((state) => state.common.data);
	const [currentLocation, setCurrentLocation] = useState({
		lat: 28.9845,
		lng: 77.7064,
	});
	const dispatch = useDispatch();
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: "AIzaSyBmc9trQvqHIrTShvRAb0MoHOFZzzKB5GY",
	});
	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			const { latitude, longitude } = position.coords;
			dispatch(getLocation({ latitude, longitude }));
			setCurrentLocation({ lat: latitude, lng: longitude });
		});
	}, []);
	if (isLoaded) {
		console.log(locationInfo);
		return (
			<>
				<Modal
					size="small"
					onClose={() => setOpen(false)}
					onOpen={() => setOpen(true)}
					open={open}
					trigger={
						<div>
							<span>
								See On map <Icon name="map outline"> </Icon>
							</span>
						</div>
					}
				>
					<Modal.Header>{`${locationInfo.city} ${locationInfo.locality} ${locationInfo.principalSubdivision}`}</Modal.Header>
					<GoogleMap
						zoom={12}
						center={currentLocation}
						mapContainerStyle={{
							height: "70vh",
							width: "70%",
						}}
					>
						<MarkerF position={currentLocation} />
					</GoogleMap>
					<Modal.Actions>
						<button
							style={{ width: 100, padding: 5, borderRadius: 10, backgroundColor: "green", border: "black" }}
							onClick={() => setOpen(false)}
						>
							Ok
						</button>
					</Modal.Actions>
				</Modal>
			</>
		);
	}
};

export default MapModel;
