import React, { useState } from "react";
import { Icon, Image, Menu } from "semantic-ui-react";
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
          <Image src={logo} size={"small"} style={{ margin: 0 }} />
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
          to="/browse"
          name="browse"
          active={activeItem === "browse"}
          onClick={handleClick}
          style={{ alignSelf: "center" }}
        >
          Browse
        </Menu.Item>
        <Menu.Item
          as={Link}
          exact
          to="/search"
          name="search"
          active={activeItem === "search"}
          onClick={handleClick}
          style={{ alignSelf: "center" }}
        >
          Search
        </Menu.Item>
        <Menu.Item position="right" style={{ alignSelf: "center" }}>
          <LoginSignUpModal title="Sign Up" btnType="Sign Up" />
        </Menu.Item>
        <Menu.Item style={{ alignSelf: "center" }}>
          <LoginSignUpModal title="login" btnType="Login" />
        </Menu.Item>
        <Menu.Item as={Link} exact to="/cart" style={{ alignSelf: "center" }}>
          <Icon name="cart" />
        </Menu.Item>
      </Menu>
    </>
  );
}
