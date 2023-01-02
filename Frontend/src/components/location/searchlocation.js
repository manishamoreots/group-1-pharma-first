import React from "react";
import { Button, Input, Menu } from "semantic-ui-react";


const SearchLocation = () => {
  return (
    <>
      <Menu secondary style={{justifyContent:"space-evenly"}}>
        <Menu.Menu position="left">
          <Menu.Item style={{ width: "25%" }}>
            <Input
              icon="map marker alternate"
              iconPosition="left"
              placeholder=""
              size="large"
            />
          </Menu.Item>
          <Menu.Item style={{ width: "50%" }}>
            <Input
              icon="search"
              placeholder="Search for Medicine and Health Product..."
              size="large"
            />
          </Menu.Item>

          <Menu.Item style={{paddingRight:"0"}}>
            <span style={{ width: "50%" , marginRight:"5%" }}>
              QUICK BUY! Get 25% off on medicines *
            </span>
            <Button
              size="large"
              style={{ background: "tomato", color: "white" }}
            >
              Quick order
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default SearchLocation;
