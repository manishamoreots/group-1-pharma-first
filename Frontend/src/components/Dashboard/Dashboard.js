/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { Image, Breadcrumb, Container, Icon } from "semantic-ui-react";
import userLogo from "../image/userlogo.png";
import { useDispatch, useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import { logout } from "../Reducer/authReducer";
import swal from "sweetalert";

const Dashboard = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const dispatch = useDispatch();
	const { locationInfo } = useSelector((state) => state.common.data);
	const [editView, setEditView] = useState(false);
	let navigate = useNavigate();
	useEffect(() => {
		if (user) {
			console.log(user);
		} else {
			navigate("/");
		}
	}, [user]);

	const accountDelete = () => {
		swal({
			title: "Are you sure?",
			text: "Once deleted, you will not be able to recover this Account",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				swal("Your Account Deleted Successfully", {
					icon: "success",
				});
				dispatch(logout());
				navigate("/");
			} else {
				swal("Your Account is safe!");
			}
		});
	};

	return (
		<div>
			<Container>
				<Breadcrumb style={{ borderBottom: "1px solid #777" }}>
					<Breadcrumb.Section active={!editView} onClick={() => setEditView(false)}>
						<Icon name="user" /> Personal Information
					</Breadcrumb.Section>
					<Breadcrumb.Divider>/</Breadcrumb.Divider>
					<Breadcrumb.Section active={editView} onClick={() => setEditView(true)}>
						<Icon name="edit" /> EditProfile
					</Breadcrumb.Section>
				</Breadcrumb>

				<div style={{ display: "flex" }}>
					<div style={{ width: "300px" }}>
						<Image
							src={user.picture ? user.picture : userLogo}
							avatar
							centered
							size="small"
							style={{ marginLeft: 70, marginTop: 50 }}
						/>
						<h3 style={{ marginLeft: 85 }}>{user?.name}</h3>
						<button
							style={{
								marginLeft: "14%",
								width: "200px",
								backgroundColor: "tomato",
								color: "white ",
								height: "35px",
								border: "none",
								borderRadius: ".28571429rem",
								cursor: "pointer",
							}}
							onClick={accountDelete}
						>
							<Icon name="user delete" /> Delete My Account
						</button>
					</div>
					{editView ? (
						<EditProfile EditView={setEditView} />
					) : (
						<div
							style={{
								width: "75%",
								justifyContent: "space-evenly",
								marginTop: 40,
							}}
						>
							<div
								style={{
									display: "flex",
									justifyContent: "space-evenly",
									flexDirection: "row",
								}}
							>
								<div style={{ width: "80%" }}>
									<div
										style={{
											boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
											width: "80%",
											height: "300px",
											padding: "5%",
											borderRadius: "5px",
										}}
									>
										<div
											style={{
												display: "flex",
												borderBottom: "1.5px solid teal",
												marginBottom: "2%",
											}}
										>
											<h4 style={{ fontFamily: "cursive" }}>Full Name : </h4>
											<p
												style={{
													marginLeft: "20px",
													fontSize: "15px",
													fontFamily: "cursive",
												}}
											>
												{user?.name}
											</p>
										</div>

										<div
											style={{
												display: "flex",
												borderBottom: "1.5px solid teal",
												marginBottom: "2%",
											}}
										>
											<h4 style={{ fontFamily: "cursive" }}>Email Id : </h4>
											<p
												style={{
													marginLeft: "32px",
													fontSize: "15px",
													fontFamily: "cursive",
												}}
											>
												{user?.email}
											</p>
										</div>

										<div
											style={{
												display: "flex",
												borderBottom: "1.5px solid teal",
												marginBottom: "2%",
											}}
										>
											<h4 style={{ fontFamily: "cursive" }}>Mobile No : </h4>
											<p
												style={{
													marginLeft: "18px",
													fontSize: "15px",
													fontFamily: "cursive",
												}}
											>
												{user.mobile ? user.mobile : "Please Update"}
											</p>
										</div>

										<div
											style={{
												display: "flex",
												borderBottom: "1.5px solid teal",
												marginBottom: "2%",
											}}
										>
											<h4 style={{ fontFamily: "cursive" }}>Country : </h4>
											<p
												style={{
													marginLeft: "30px",
													fontSize: "15px",
													fontFamily: "cursive",
												}}
											>
												{locationInfo.countryName ? locationInfo.countryName : "Please Enable Location"}
											</p>
										</div>

										<div
											style={{
												display: "flex",
												borderBottom: "1.5px solid teal",
											}}
										>
											<h4 style={{ fontFamily: "cursive" }}>Address : </h4>
											<p
												style={{
													marginLeft: "30px",
													fontSize: "15px",
													fontFamily: "cursive",
												}}
											>
												{locationInfo.city
													? `${locationInfo.city}  ${locationInfo.principalSubdivision}`
													: "Please Enable Location"}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</Container>
		</div>
	);
};
export default Loader(Dashboard);
