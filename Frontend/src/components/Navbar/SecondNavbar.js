import React from "react";
import "./secondnavbar.css";
import { Button, Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MapModel from "../Modal/MapModel";
import SearchItem from "../Search/SearchItem";

const SecondNavbar = () => {
	const { locationInfo } = useSelector((state) => state.common.data);
	return (
		<div>
			<Menu secondary>
				<Menu.Menu>
					<Menu.Item>
						<MapModel />
						<Input
							style={{ marginLeft: "10px", color: "tomato" }}
							type="text"
							icon="map marker alternate"
							iconPosition="left"
							placeholder="Current location "
							size="large"
							value={locationInfo.city ? locationInfo.city : "Please Enable Location"}
						/>
					</Menu.Item>
					<Menu.Item>
						<SearchItem />
						{/* <Input
							style={{ width: "300px" }}
							icon="search"
							placeholder="Search for Medicine and Health Product..."
							size="large"
						/> */}
					</Menu.Item>

					<Menu.Item>
						<span style={{ width: "300px" }}>QUICK BUY! Get 25% off on medicines *</span>
						<Button as={Link} to="/care" size="large" style={{ background: "tomato", color: "white", width: "75%" }}>
							Quick order
						</Button>
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		</div>
	);
};

export default SecondNavbar;
