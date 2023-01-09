import React, { useEffect, useState } from "react";
import { Image } from "semantic-ui-react";
import loader from "../image/loader.gif";
const Loader = (OriginalComponent) => {
	const NewComponent = () => {
		const [loading, setLoading] = useState(true);
		useEffect(() => {
			setTimeout(() => {
				setLoading(false);
			}, 1000);
		}, [loading]);
		return (
			<>
				{loading ? (
					<div style={{ display: "flex", justifyContent: "center", marginTop: "10%", marginBottom: "10%" }}>
						<Image src={loader} style={{ width: 80, height: 80 }} />;
					</div>
				) : (
					<OriginalComponent />
				)}
			</>
		);
	};
	return NewComponent;
};

export default Loader;
