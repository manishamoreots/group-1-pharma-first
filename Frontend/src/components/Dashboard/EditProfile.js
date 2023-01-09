/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Input, Icon, Container } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { EditUser } from "../Reducer/authReducer";
import swal from "sweetalert";

const EditProfile = ({ EditView }) => {
	const user = JSON.parse(localStorage.getItem("user"));
	const [userDetails, setUserDetails] = useState({
		name: "",
		email: "",
		mobile: "",
	});
	const dispatch = useDispatch();
	useEffect(() => {
		setUserDetails(user);
	}, []);
	const change = (e) => {
		const { name, value } = e.target;
		setUserDetails((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	const update = () => {
		dispatch(EditUser(userDetails));
		swal({ text: "User Updated" });
		EditView(false);
		setUserDetails({
			name: "",
			email: "",
			mobile: "",
		});
	};

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
									height: "50vh",
									borderRadius: "10px",
								}}
							>
								<Input iconPosition="left" placeholder={userDetails?.name} style={{ width: "65vh" }} size="large">
									<Icon name="user" />
									<input name="name" value={userDetails?.name} onChange={change} />
								</Input>

								<Input iconPosition="left" placeholder={userDetails?.email} style={{ width: "65vh" }} size="large">
									<Icon name="at" />
									<input name="email" disabled value={userDetails?.email} onChange={change} />
								</Input>

								<Input
									iconPosition="left"
									placeholder={userDetails.mobile ? userDetails.mobile : "Please Update"}
									style={{ width: "65vh" }}
									size="large"
								>
									<Icon name="phone" />
									<input name="mobile" value={userDetails.mobile} onChange={change} />
								</Input>

								<div>
									<Button onClick={update}>Edit Details</Button>
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
