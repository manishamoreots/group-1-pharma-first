import React from "react";
import "./secondnavbar.css";
import { Button, Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MapModel from "../Modal/MapModel";

const SecondNavbar = () => {
  const { locationInfo } = useSelector((state) => state.common.data);
  return (
    <div>
      <Menu secondary>
        <Menu.Menu>
          <Menu.Item>
            <MapModel />
            <Input
              style={{ marginLeft: "10px" }}
              type="text"
              icon="map marker alternate"
              iconPosition="left"
              placeholder="Current location "
              size="large"
              value={locationInfo.city}
            />
          </Menu.Item>
          <Menu.Item>
            <Input
              style={{ width: "300px" }}
              icon="search"
              placeholder="Search for Medicine and Health Product..."
              size="large"
            />
          </Menu.Item>

          <Menu.Item style={{}}>
            <span style={{ width: "300px" }}>
              QUICK BUY! Get 25% off on medicines *
            </span>
            <Button
              size="large"
              style={{ background: "tomato", color: "white", width: "75%" }}
            >
              Quick order
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default SecondNavbar;
