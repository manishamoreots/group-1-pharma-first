/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";
import {
  Image,
  Button,
  Card,
  Breadcrumb,
  Input,
  Icon,
  Container,
} from "semantic-ui-react";

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
        <Container>
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
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: 50,
            }}
          >
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
                        padding: 20,
                      }}
                    >
                      <div>
                        <Input
                          iconPosition="left"
                          placeholder={user?.name}
                          style={{ width: "65vh" }}
                          size="large"
                        >
                          <Icon name="user" />
                          <input />
                        </Input>
                      </div>
                    </div>
                    <hr />
                    <div
                      style={{
                        padding: 20,
                      }}
                    >
                      <div>
                        <Input
                          iconPosition="left"
                          placeholder={user?.email}
                          style={{ width: "65vh" }}
                          size="large"
                        >
                          <Icon name="at" />
                          <input />
                        </Input>
                      </div>
                    </div>
                    <hr />
                    <div
                      style={{
                        padding: 20,
                      }}
                    >
                      <div>
                        <Input
                          iconPosition="left"
                          placeholder={user?.mobile}
                          style={{ width: "65vh" }}
                          size="large"
                        >
                          <Icon name="phone" />
                          <input />
                        </Input>
                      </div>
                    </div>
                    <hr />
                    <div
                      style={{
                        padding: 20,
                      }}
                    >
                      <div>
                        <Input
                          iconPosition="left"
                          style={{ width: "65vh" }}
                          size="large"
                          placeholder={
                            user?.country
                              ? user?.country
                              : "Please Enter your Country"
                          }
                        >
                          <Icon name="globe" />
                          <input />
                        </Input>
                      </div>
                    </div>
                    <hr />
                    <div
                      style={{
                        padding: 20,
                      }}
                    >
                      <div>
                        <Input
                          iconPosition="left"
                          style={{ width: "65vh", multiline: true }}
                          size="large"
                          placeholder={
                            user?.address
                              ? user?.address
                              : "Please Enter Your Address"
                          }
                        >
                          <Icon name="location arrow" />
                          <input />
                        </Input>
                      </div>
                    </div>
                    <hr />

                    <div style={{ padding: 20 }}>
                      <Button>Edit Details</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};
export default Editprofile;
