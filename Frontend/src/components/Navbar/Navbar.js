import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
export default function Navbar() {
	const [activeItem, setActiveItem] = useState("homepage");
	const handleClick = (e, { name }) => {
		setActiveItem(name);
	};
	return (
		<Menu className="Navigation" style={{ display: "flex", justifyContent: "end", margin: 10 }}>
			<Menu.Item as={Link} exact to="/" name="homepage" active={activeItem === "homepage"} onClick={handleClick}>
				Home
			</Menu.Item>
			<Menu.Item as={Link} exact to="/browse" name="browse" active={activeItem === "browse"} onClick={handleClick}>
				Browse
			</Menu.Item>
			<Menu.Item as={Link} exact to="/login" name="login" active={activeItem === "login"} onClick={handleClick}>
				login
			</Menu.Item>
			<Menu.Item as={Link} exact to="/my-drinks" name="my-drinks" active={activeItem === "my-drinks"} onClick={handleClick}>
				My Drinks
			</Menu.Item>
		</Menu>
	);
}
