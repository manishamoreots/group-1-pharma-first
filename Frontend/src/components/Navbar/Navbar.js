import React, { useState } from "react";
import { Icon, Image, Menu, Label } from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../image/logo.png";
import LoginSignUpModal from "../Modal/LoginSignUpModal";
import { useDispatch } from "react-redux";
import { logout } from "../Reducer/authReducer";
export default function Navbar() {
	const user = JSON.parse(localStorage.getItem("user"));
	const [activeItem, setActiveItem] = useState("homepage");
	let navigate = useNavigate();
	const dispatch = useDispatch();
	const handleClick = (e, { name }) => {
		setActiveItem(name);
	};
	const onLogout = () => {
		dispatch(logout());
		navigate("/");
	};
	const guestUser = (
		<>
			<Menu.Item position="right" style={{ alignSelf: "center" }}>
				<LoginSignUpModal title="Sign Up" btnType="Sign Up" />
			</Menu.Item>
			<Menu.Item style={{ alignSelf: "center" }}>
				<LoginSignUpModal title="login" btnType="Login" />
			</Menu.Item>
		</>
	);
	const authUser = (
		<>
			<Menu.Item position="right" style={{ alignSelf: "center" }}>
				<Link to="/dashboard" style={{ color: "black" }}>
					Dashboard
				</Link>
			</Menu.Item>
			<Menu.Item style={{ alignSelf: "center" }}>
				<div style={{ color: "black", cursor: "pointer" }} onClick={onLogout}>
					logout
				</div>
			</Menu.Item>
		</>
	);
	return (
		<>
			<Menu position="left" className="Navigation" pointing secondary>
				<Menu.Item position="left" as={Link} exact to="/" name="homepage" onClick={handleClick}>
					<Image src={logo} size={"small"} style={{}} />
				</Menu.Item>
				<Menu.Item
					as={Link}
					exact
					to="/"
					name="Home"
					active={activeItem === "Home"}
					onClick={handleClick}
					style={{ alignSelf: "center" }}
				>
					Home
				</Menu.Item>
				<Menu.Item
					as={Link}
					exact
					to="/browse"
					name="Lab Test"
					active={activeItem === "Lab Test"}
					onClick={handleClick}
					style={{ alignSelf: "center" }}
				>
					Lab Test
				</Menu.Item>
				<Menu.Item
					as={Link}
					exact
					to="/search"
					name="Care Plan"
					active={activeItem === "Care Plan"}
					onClick={handleClick}
					style={{ alignSelf: "center" }}
				>
					Care Plan
				</Menu.Item>
				{user ? authUser : guestUser}
				<Menu.Item as={Link} exact to="/cart" style={{ alignSelf: "center", marginRight: 30 }}>
					<Icon name="cart" size="large" />
					<Label color="teal" floating style={{ top: -5, left: 45 }}>
						22
					</Label>
				</Menu.Item>
			</Menu>
		</>
	);
}
