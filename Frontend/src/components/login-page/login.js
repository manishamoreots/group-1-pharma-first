import React from "react";
import { Button, Image, Modal, Form, Checkbox } from "semantic-ui-react";
import "./login.css";

const Login = ({ title }) => {
  return (
    <>
      <Modal
        size="small"
        // onClose={() => setOpen(false)}
        // onOpen={() => setOpen(true)}
        // open={open}
        trigger={<Button>{title}</Button>}
      >
        <Modal.Content image>
          <Image
            size="medium"
            src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600"
          />

          <Modal.Description>
            {title == "Login" ? (
              <>
                <div className="page-title">
                  <Modal.Header as="h1">{title}</Modal.Header>

                  <p className="first-para">
                    Get access to your orders, lab tests & doctor consultations
                  </p>
                </div>

                <Form>
                  <div className="input-field">
                    <Form.Field>
                      <input placeholder="Enter Email Id or Mobile Number" />
                    </Form.Field>
                  </div>

                  <Modal.Actions>
                    <div className="login-btn-class">
                      <Button className="login-btn">LOGIN</Button>
                    </div>

                    {/* <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => setOpen(false)} positive> Ok  </Button> */}
                  </Modal.Actions>

                  <div>
                    <p className="second-para">
                      By logging in, you agree to our Terms and Conditions &
                      Privacy Policy
                    </p>
                  </div>
                </Form>
              </>
            ) : (
              <>
                <Modal.Header as="h1" style={{paddingLeft:"1em"}}>{title}</Modal.Header>
                <Form className="signup-form">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Form.Input
                      fluid
                      className="signup-firstName"
                      label="First name"
                      placeholder="First name"
                    />
                    <Form.Input
                      fluid
                      className="signup-lasttName"
                      label="Last name"
                      placeholder="Last name"
                    />
                  </div>

                  <Form.Field
                    label="Mobile No"
                    control="input"
                    placeholder="Mobile Number"
                  />
                  <Form.TextArea
                    label="Address"
                    placeholder="Enter your address here"
                  />
                  <Form.Field>
                    <Checkbox label="I agree to the Terms and Conditions" />
                  </Form.Field>
                  <div className="signup-btn-class">
                    <Button className="signup-btn" size="medium">
                      SignUp
                    </Button>
                  </div>
                </Form>
              </>
            )}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default Login;
