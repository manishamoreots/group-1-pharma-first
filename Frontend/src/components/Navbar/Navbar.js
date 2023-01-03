import React, { useState } from "react";
import { Icon, Image, Menu, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import LoginSignUpModal from "../Modal/LoginSignUpModal";
export default function Navbar() {
  const [activeItem, setActiveItem] = useState("homepage");
  const handleClick = (e, { name }) => {
    setActiveItem(name);
  };
  return (
    <>
      <Menu position="left" className="Navigation" pointing secondary>
        <Menu.Item
          position="left"
          as={Link}
          exact
          to="/"
          name="homepage"
          //   active={activeItem === "homepage"}

          onClick={handleClick}
        >
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
        <Menu.Item
          as={Link}
          exact
          to="/contact"
          name="Contact Us"
          active={activeItem === "Contact Us"}
          onClick={handleClick}
          style={{ alignSelf: "center" }}
        >
          Contact Us
        </Menu.Item>
        <Menu.Item position="right" style={{ alignSelf: "center" }}>
          <LoginSignUpModal title="Sign Up" btnType="Sign Up" />
        </Menu.Item>
        <Menu.Item style={{ alignSelf: "center" }}>
          <LoginSignUpModal title="login" btnType="Login" />
        </Menu.Item>
        <Menu.Item
          as={Link}
          exact
          to="/cart"
          style={{ alignSelf: "center", marginRight: 30 }}
        >
          <Icon name="cart" size="large" />
          <Label color="teal" floating style={{ top: -5, left: 45 }}>
            22
          </Label>
        </Menu.Item>
      </Menu>
    </>
  );
}
