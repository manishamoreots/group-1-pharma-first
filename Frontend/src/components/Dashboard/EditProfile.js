/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import { Image, Button, Card, Breadcrumb, Input } from "semantic-ui-react";

const Editprofile = () => {
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
            <Breadcrumb.Section link href="/Dashboard">
              Personal Information
            </Breadcrumb.Section>
            <Breadcrumb.Divider>/</Breadcrumb.Divider>
            <Breadcrumb.Section active>EditProfile</Breadcrumb.Section>
          </Breadcrumb>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
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
                      //   border: "1px solid black",
                      width: "80%",
                      alignSelf: "center",
                      justifyContent: "flex-start",
                      height: "100vh",
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
                      <div style={{ marginLeft: 20 }}>
                        <Input value={user?.name} />
                      </div>
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
                      <div style={{ marginLeft: 20 }}>
                        <Input value={user?.email} />
                      </div>
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
                      <div style={{ marginLeft: 20 }}>
                        <Input value={user?.mobile} />
                      </div>
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
                      <div style={{ marginLeft: 20 }}>
                        <Input value={user?.country} />
                      </div>
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
                      <div style={{ marginLeft: 20 }}>
                        {" "}
                        <Input value={user?.address} />
                      </div>
                    </div>

                    <div>
                      <Button>Edit Details</Button>
                    </div>
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
export default Editprofile;
