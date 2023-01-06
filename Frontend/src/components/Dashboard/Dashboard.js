/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { Image, Button } from "semantic-ui-react";
import { Image, Button } from "semantic-ui-react";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    if (user) {
      console.log(user);
    } else {
      navigate("/");
    }
  }, [user]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);
  const user = JSON.parse(localStorage.getItem("user"));
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    if (user) {
      console.log(user);
    } else {
      navigate("/");
    }
  }, [user]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  return (
    <div>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div
              style={{
                backgroundColor: "white",
                width: "25%",
                height: "75vh",
                borderRadius: "20px",
              }}
            >
              <Image
                avatar
                size="small"
                src="https://www.pngitem.com/pimgs/m/22-224000_profile-pic-dummy-png-transparent-png.png"
              />
              <h2>Welcome back ! {user?.name}</h2>
              <Button primary>Delete Account</Button>
            </div>
            <div style={{ width: "75%", justifyContent: "space-evenly" }}>
              <h2>welcome to the Pharma first {user?.email}</h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{ width: "80%",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid black",
                      width: "80%",
                      alignSelf: "center",
                      justifyContent: "flex-start",
                      height: "50vh",
                      borderRadius: "10px",
                    }}
                  >
                    <div style={{ alignContent: "flex-start" }}>
                      Full Name: {user?.name}
                    </div>
                    <hr />
                    <div>Email: {user?.email}</div>
                    <hr />
                    <div>Mobile: {user?.mobile}</div>
                    <hr />
                    <div>Country: {user?.country}</div>
                    <hr />
                    <div>Address: {user?.address}</div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Dashboard;
