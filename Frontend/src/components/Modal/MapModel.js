/* eslint-disable react-hooks/exhaustive-deps */
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon, Modal } from "semantic-ui-react";
import { getLocation } from "../Reducer/commonReducer";
const MapModel = ({ contact }) => {
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();
	const { locationInfo } = useSelector((state) => state.common.data);

	const { isLoaded } = useLoadScript({
		googleMapsApiKey: "AIzaSyBmc9trQvqHIrTShvRAb0MoHOFZzzKB5GY",
	});
	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			const { latitude, longitude } = position.coords;
			dispatch(getLocation({ latitude, longitude }));
		});
	}, []);
	const localLocation = {
		lat: 28.4212,
		lng: 77.0404,
	};
	const apiLocation = {
		lat: locationInfo.latitude,
		lng: locationInfo.longitude,
	};
	const map = (
		<>
			<GoogleMap
				zoom={12}
				center={locationInfo.latitude ? apiLocation : localLocation}
				mapContainerStyle={{
					height: "65vh",
					width: "100%",
				}}
			>
				<MarkerF position={locationInfo.latitude ? apiLocation : localLocation} />
			</GoogleMap>
		</>
	);
	if (isLoaded) {
		return (
			<>
				{contact ? (
					map
				) : (
					<>
						<Modal
							size="small"
							onClose={() => setOpen(false)}
							onOpen={() => setOpen(true)}
							open={open}
							trigger={
								<div style={{ display: "flex", cursor: "pointer" }}>
									<Icon name="map outline" size="large" style={{ marginLeft: "10px", color: "tomato" }} />
									<p style={{ lineHeight: "none" }}>See your Location</p>
								</div>
							}
						>
							<Modal.Header>
								{locationInfo.city
									? `${locationInfo.city} ${locationInfo.locality} ${locationInfo.principalSubdivision}`
									: "Default OTS Location"}
							</Modal.Header>
							{map}
							<Modal.Actions>
								<button
									style={{
										width: 70,
										height: 30,
										padding: 5,
										borderRadius: 10,
										backgroundColor: "limegreen",
										border: "2px solid red",
										color: "white",
									}}
									onClick={() => setOpen(false)}
								>
									Back
								</button>
							</Modal.Actions>
						</Modal>
					</>
				)}
			</>
		);
	}
};

export default MapModel;
