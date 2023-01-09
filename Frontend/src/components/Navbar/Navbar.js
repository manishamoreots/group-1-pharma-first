/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Icon, Image, Menu, Label } from "semantic-ui-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../image/logo.png";
import "./navbar.css";
import LoginSignUpModal from "../Modal/LoginSignUpModal";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Reducer/authReducer";
import userLogo from "../image/userlogo.png";
import { getCartItems } from "../Reducer/cartReducer";
export default function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [activeItem, setActiveItem] = useState("homepage");
  const { cartItem } = useSelector((state) => state.cart.data);
  const searchParams = useLocation();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
    dispatch(getCartItems([]));
    navigate("/");
  };
  useEffect(() => {
    let cartItems = JSON.parse(localStorage.getItem("cartItem"));
    dispatch(getCartItems(cartItems));
  }, []);
  useEffect(() => {
    if (searchParams.pathname === "/") {
      setActiveItem("homepage");
    } else {
      setActiveItem(searchParams.pathname.slice(1));
    }
  }, [searchParams]);
  const style = {
    alignSelf: "center",
    cursor: "pointer",
  };

  const guestUser = (
    <>
      <Menu.Item position="right" className="signup" style={style}>
        <LoginSignUpModal title="Sign Up" btnType="Sign Up" />
      </Menu.Item>
      <Menu.Item className="login" style={style}>
        <LoginSignUpModal title="Login" btnType="Login" />
      </Menu.Item>
    </>
  );
  const authUser = (
    <>
      <Menu.Item
        position="right"
        style={style}
        name="dashboard"
        active={activeItem === "dashboard"}
      >
        <Image
          src={user ? (user.picture ? user.picture : userLogo) : userLogo}
          avatar
        />

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
          className="Home"
          exact
          to="/"
          name="homepage"
          active={activeItem === "homepage"}
          style={{ alignSelf: "center" }}
        >
          Home
        </Menu.Item>
        <Menu.Item
          as={Link}
          className="Labtest"
          exact
          to="/lab"
          name="lab"
          active={activeItem === "lab"}
          style={{ alignSelf: "center" }}
        >
          Lab Test
        </Menu.Item>
        <Menu.Item
          as={Link}
          className="Care"
          exact
          to="/care"
          name="care"
          active={activeItem === "care"}
          style={{ alignSelf: "center" }}
        >
          Care Plan
        </Menu.Item>
        <Menu.Item
          as={Link}
          exact
          to="/contact"
          className="Contact"
          name="contact"
          active={activeItem === "contact"}
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
          style={{ alignSelf: "center", marginRight: 30 }}
        >
          <Icon name="cart" color="black" size="large" />
          <Label
            floating
            style={{ top: -5, left: 45, backgroundColor: "tomato" }}
          >
            {user && cartItem ? cartItem.length : 0}
          </Label>
        </Menu.Item>
      </Menu>
    </>
  );
}
