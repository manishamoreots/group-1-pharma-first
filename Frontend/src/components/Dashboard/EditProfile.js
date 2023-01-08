/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Button, Input, Icon, Container } from "semantic-ui-react";
import { user } from "../LocalStorage";

const EditProfile = () => {
	return (
		<Container>
			<div
				style={{
					display: "flex",
					justifyContent: "space-evenly",
					marginTop: 50,
				}}
			>
				<div
					style={{
						width: "75%",
						justifyContent: "space-evenly",
					}}
				>
					<div>
						<div style={{ width: "80%" }}>
							<div
								style={{
									width: "80%",
									alignSelf: "center",
									justifyContent: "flex-start",
									height: "100vh",
									borderRadius: "10px",
								}}
							>
								<Input iconPosition="left" placeholder={user?.name} style={{ width: "65vh" }} size="large">
									<Icon name="user" />
									<input />
								</Input>

								<Input iconPosition="left" placeholder={user?.email} style={{ width: "65vh" }} size="large">
									<Icon name="at" />
									<input />
								</Input>

								<Input iconPosition="left" placeholder={user?.mobile} style={{ width: "65vh" }} size="large">
									<Icon name="phone" />
									<input />
								</Input>

								<div>
									<Button>Edit Details</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};
export default EditProfile;
