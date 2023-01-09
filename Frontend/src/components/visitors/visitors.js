import React from "react";
import "./visitors.css";
import { Statistic } from "semantic-ui-react";
import Loader from "../Loader/Loader";
const Visitors = () => {
	return (
		<div
			style={{
				justifyContent: "center",
				alignItems: "center",
				marginLeft: "25%",
				marginTop: "5%",
			}}
		>
			<div style={{ marginLeft: "7%" }}>
				<h2>INDIA'S LARGEST HEALTHCARE PLATFORM</h2>
				<Statistic.Group>
					<div className="first-statistic">
						{" "}
						<Statistic size="small">
							<Statistic.Value>260m+</Statistic.Value>
							<Statistic.Label>Visitors</Statistic.Label>
						</Statistic>
					</div>

					<div className="middle-statistic">
						{" "}
						<Statistic size="small">
							<Statistic.Value>31m+</Statistic.Value>
							<Statistic.Label>Orders Delivered</Statistic.Label>
						</Statistic>
					</div>
					<div>
						<Statistic size="small">
							<Statistic.Value>1800+</Statistic.Value>
							<Statistic.Label>Cities</Statistic.Label>
						</Statistic>
					</div>
				</Statistic.Group>
			</div>
		</div>
	);
};
export default Loader(Visitors);
