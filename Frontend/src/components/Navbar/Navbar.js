import React, { useState } from "react";
import { Menu, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [activeItem, setActiveItem] = useState("homepage");
  const handleClick = (e, { name }) => {
    setActiveItem(name);
  };
  return (
    // <Menu className="Navigation">
    // 	<Menu.Item as={Link} exact to="/" name="homepage" active={activeItem === "homepage"} onClick={handleClick}>
    // 		Home
    // 	</Menu.Item>
    // 	<Menu.Item as={Link} exact to="/browse" name="browse" active={activeItem === "browse"} onClick={handleClick}>
    // 		Browse
    // 	</Menu.Item>
    // 	<Menu.Item as={Link} exact to="/search" name="search" active={activeItem === "search"} onClick={handleClick}>
    // 		Search
    // 	</Menu.Item>
    // 	<Menu.Item as={Link} exact to="/my-drinks" name="my-drinks" active={activeItem === "my-drinks"} onClick={handleClick}>
    // 		My Drinks
    // 	</Menu.Item>
    // </Menu>

    <Menu secondary className="Navigation">
      <div
        style={{
          display: "flex",
          width: "100%",
          minHeight: "25%",
        }}
      >
        <Image
          src=""
          size={"tiny"}
          style={{ marginLeft: "2%", padding: "0" }}
        />
        <div className="header-container" style={{ display: "flex" }}>
          <Menu.Item as="a" header style={{ marginLeft: "5%" }}>
            MEDICINES
          </Menu.Item>
          <Menu.Item as="a" header>
            CONSULT DOCTORS
          </Menu.Item>
          <Menu.Item as="a" header>
            LAB TESTS
          </Menu.Item>
          <Menu.Item as="a" header>
            COVID-19
          </Menu.Item>
          <Menu.Item as="a" header>
            AYURVEDA
          </Menu.Item>
          <Menu.Item as="a" header>
            CARE PLAN
          </Menu.Item>
        </div>

        <Menu.Menu position="right" style={{ marginRight: "5%" }}>
          <Menu.Item
            as={Link}
            name="login"
            active={activeItem === "login"}
            onClick={handleClick}
          >
            Login
          </Menu.Item>
          <Menu.Item
            name="signup"
            as={Link}
            active={activeItem === "signup"}
            onClick={handleClick}
            size="medium"
          />
          <Menu.Item style={{ marginRight: "5%" }}>
            <Icon className={"add to cart"} size="big" />
            <span
              style={{
                padding: "1%",
                borderRadius: "35%",
                height: "20px",
                width: "20px",
                position: "absolute",
                marginLeft: "42%",
                marginTop: "-45%",
                border: "1px solid grey",
                backgroundColor: "tomato",
                color: "white",
              }}
            >
              2
            </span>
          </Menu.Item>
        </Menu.Menu>
      </div>
    </Menu>
  );
}
