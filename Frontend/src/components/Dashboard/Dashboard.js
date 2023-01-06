/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { Image, Button, Card, Breadcrumb } from "semantic-ui-react";

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

  return (
    <div>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          <Breadcrumb>
            <Breadcrumb.Section link href="/">
              Home
            </Breadcrumb.Section>
            <Breadcrumb.Divider>/</Breadcrumb.Divider>
            <Breadcrumb.Section link href="/editprofile">
              EditProfile
            </Breadcrumb.Section>
            <Breadcrumb.Divider>/</Breadcrumb.Divider>
            <Breadcrumb.Section active>Personal Information</Breadcrumb.Section>
          </Breadcrumb>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div
              style={{
                // backgroundColor: "red",
                width: "25%",
                height: "75vh",
                borderRadius: "20px",
                marginTop: 20,
                marginLeft: 30,
                justifyContent: "center",
              }}
            >
              <div>
                <Image
                  src="https://react.semantic-ui.com/images/wireframe/square-image.png"
                  avatar
                  centered
                  size="small"
                  style={{ marginLeft: 75 }}
                />
              </div>
              <div>
                <h3 style={{ textAlignLast: "center", padding: 20 }}>
                  {user?.name}
                </h3>
              </div>
              <div>
                <Button>Delete My Account</Button>
              </div>
            </div>

            <div
              style={{
                width: "75%",
                justifyContent: "space-evenly",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  flexDirection: "row",
                }}
              >
                <div style={{ width: "80%" }}>
                  <div
                    style={{
                      border: "1px solid black",
                      width: "80%",
                      alignSelf: "center",
                      justifyContent: "flex-start",
                      height: "56.9vh",
                      borderRadius: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginLeft: 10,
                        padding: 20,
                      }}
                    >
                      <div>Full Name : </div>
                      <div style={{ marginLeft: 20 }}>{user?.name}</div>
                    </div>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginLeft: 10,
                        padding: 20,
                      }}
                    >
                      <div>Email Id : </div>
                      <div style={{ marginLeft: 20 }}>{user?.email}</div>
                    </div>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginLeft: 10,
                        padding: 20,
                      }}
                    >
                      <div>Mobile No : </div>
                      <div style={{ marginLeft: 20 }}>{user?.mobile}</div>
                    </div>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginLeft: 10,
                        padding: 20,
                      }}
                    >
                      <div>Country : </div>
                      <div style={{ marginLeft: 20 }}>{user?.Country}</div>
                    </div>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        marginLeft: 10,
                        padding: 20,
                      }}
                    >
                      <div>Address : </div>
                      <div style={{ marginLeft: 20 }}>{user?.address}</div>
                    </div>
                    {/* <hr /> */}
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
