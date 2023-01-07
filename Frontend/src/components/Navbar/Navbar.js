import React, { useState } from "react";
import { Icon, Image, Menu, Label } from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../image/logo.png";
import LoginSignUpModal from "../Modal/LoginSignUpModal";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Reducer/authReducer";
export default function Navbar() {
	const user = JSON.parse(localStorage.getItem("user"));
	const [activeItem, setActiveItem] = useState("homepage");
	const { cartItem } = useSelector((state) => state.cart.data);
	let navigate = useNavigate();
	const dispatch = useDispatch();
	const handleClick = (e, { name }) => {
		setActiveItem(name);
	};

	const onLogout = () => {
		dispatch(logout());
		navigate("/");
	};
	const style = {
		alignSelf: "center",
		cursor: "pointer",
	};

	const guestUser = (
		<>
			<Menu.Item position="right" style={style}>
				<LoginSignUpModal title="Sign Up" btnType="Sign Up" />
			</Menu.Item>
			<Menu.Item style={style}>
				<LoginSignUpModal title="Login" btnType="Login" />
			</Menu.Item>
		</>
	);
	const authUser = (
		<>
			<Menu.Item position="right" style={style} name="dashboard" active={activeItem === "dashboard"} onClick={handleClick}>
				<Link to="/dashboard" style={{ color: "black", cursor: "pointer" }}>
					Dashboard
				</Link>
			</Menu.Item>
			<Menu.Item style={style}>
				<div onClick={onLogout}>Logout</div>
			</Menu.Item>
		</>
	);

	return (
		<>
			<Menu position="left" className="Navigation" pointing secondary>
				<Menu.Item position="left" as={Link} exact to="/">
					<Image src={logo} size={"small"} />
				</Menu.Item>
				<Menu.Item
					as={Link}
					exact
					to="/"
					name="homepage"
					active={activeItem === "homepage"}
					onClick={handleClick}
					style={{ alignSelf: "center" }}
				>
					Home
				</Menu.Item>
				<Menu.Item
					as={Link}
					exact
					to="/lab"
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
					to="/care"
					name="Care Plan"
					active={activeItem === "Care Plan"}
					onClick={handleClick}
					style={{ alignSelf: "center" }}
				>
					Care Plan
				</Menu.Item>
				<Menu.Item
					as={Link}
					exact
					to="/contact"
					name="Contact us"
					active={activeItem === "Contact us"}
					onClick={handleClick}
					style={{ alignSelf: "center" }}
				>
					Contact Us
				</Menu.Item>
				{user ? authUser : guestUser}
				<Menu.Item
					as={Link}
					exact
					to="/cart"
					name="cart"
					active={activeItem === "cart"}
					onClick={handleClick}
					style={{ alignSelf: "center", marginRight: 30 }}
				>
					<Icon name="cart" size="large" />
					<Label color="teal" floating style={{ top: -5, left: 45 }}>
						{user && cartItem ? cartItem.length : 0}
					</Label>
				</Menu.Item>
			</Menu>
		</>
	);
}
