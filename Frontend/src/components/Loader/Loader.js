import React from "react";
import { Image } from "semantic-ui-react";
import loader from "../image/loader.gif";
const Loader = () => {
	return (
		<div style={{ display: "flex", justifyContent: "center", marginTop: "10%",marginBottom:"10%" }}>
			<Image src={loader} style={{ width: 80, height: 80 }} />;
		</div>
	);
};

export default Loader;
