import React, { useEffect } from "react";
import { Input, Menu, Button } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../Reducer/commonReducer";

const Location = () => {
  const dispatch = useDispatch();
  const { locationInfo } = useSelector((state) => state.common.data);
  console.log(locationInfo);
  useEffect(() => {
    if (!locationInfo.city) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
  }, []);
  const successCallback = (position) => {
    const { latitude, longitude } = position.coords;
    dispatch(getLocation({ latitude, longitude }));
  };
  const errorCallback = (error) => {
    console.log(error);
  };

  return (
    <>
      <Menu secondary style={{ justifyContent: "space-evenly" }}>
        <Menu.Menu position="left">
          <Menu.Item style={{ width: "25%" }}>
            <Input
              type="text"
              icon="map marker alternate"
              iconPosition="left"
              placeholder="Current location "
              size="large"
              value={locationInfo.city}
            />
          </Menu.Item>
          <Menu.Item style={{ width: "50%" }}>
            <Input
              icon="search"
              placeholder="Search for Medicine and Health Product..."
              size="large"
            />
          </Menu.Item>

          <Menu.Item style={{ paddingRight: "0" }}>
            <span style={{ width: "50%", marginRight: "5%" }}>
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

export default Location;
