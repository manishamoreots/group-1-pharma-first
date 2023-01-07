import React from "react";
import { Button, Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MapModel from "../Modal/MapModel";

const SecondNavbar = () => {
	const { locationInfo } = useSelector((state) => state.common.data);
	return (
		<div>
			<Menu secondary style={{ justifyContent: "space-evenly" }}>
				<Menu.Menu position="left">
					<Menu.Item style={{ width: "26%" }}>
						<MapModel />
						<Input
							disabled
							type="text"
							icon="map marker alternate"
							iconPosition="left"
							placeholder="Current location "
							size="large"
							value={locationInfo.city ? locationInfo.city : "Please Enable Location"}
						/>
					</Menu.Item>
					<Menu.Item style={{ width: "50%" }}>
						<Input icon="search" placeholder="Search for Medicine and Health Product..." size="large" />
					</Menu.Item>

					<Menu.Item style={{ paddingRight: "0" }}>
						<span style={{ width: "50%", marginRight: "5%" }}>QUICK BUY! Get 25% off on medicines *</span>
						<Button size="large" style={{ background: "tomato", color: "white" }}>
							<Link to={`/categoryItem/7`} style={{ color: "white" }}>
								Quick order
							</Link>
						</Button>
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		</div>
	);
};

export default SecondNavbar;
