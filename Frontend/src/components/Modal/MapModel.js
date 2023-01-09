/* eslint-disable react-hooks/exhaustive-deps */
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Icon, Modal } from "semantic-ui-react";

const MapModel = ({ contact }) => {
	const [open, setOpen] = useState(false);
	const { locationInfo } = useSelector((state) => state.common.data);
	const [currentLocation, setCurrentLocation] = useState({
		lat: 28.4212,
		lng: 77.0404,
	});
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: "AIzaSyBmc9trQvqHIrTShvRAb0MoHOFZzzKB5GY",
	});
	useEffect(() => {
		setCurrentLocation({ lat: locationInfo.latitude, lng: locationInfo.longitude });
	}, []);
	const map = (
		<>
			<GoogleMap
				zoom={12}
				center={currentLocation}
				mapContainerStyle={{
					height: "65vh",
					width: "100%",
				}}
			>
				<MarkerF position={currentLocation} />
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
								<div style={{ display: "flex" }}>
									<Icon name="map outline" size="large" style={{ marginLeft: "10px" }} />
									<p style={{ lignHeight: "none" }}>See your Location</p>
								</div>
							}
						>
							<Modal.Header>{`${locationInfo.city} ${locationInfo.locality} ${locationInfo.principalSubdivision}`}</Modal.Header>
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
