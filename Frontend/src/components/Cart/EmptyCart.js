import React from "react";

import { Container } from "semantic-ui-react";
const EmptyCart = () => {
	return (
		<div>
			<Container
				style={{
					height: "25vh",
					width: "100%",
				}}
			>
				<h3 style={{ textAlign: "center", marginTop: 200 }}>No Item in Your Cart yet</h3>
			</Container>
		</div>
	);
};

export default EmptyCart;
