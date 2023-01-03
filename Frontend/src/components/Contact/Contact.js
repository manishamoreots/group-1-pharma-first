import React from "react";
import {
  Form,
  Input,
  TextArea,
  Button,
  Select,
  Container,
  Image,
  Grid,
} from "semantic-ui-react";
import img from "../image/contact.webp";
const genderOptions = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

const Contact = () => (
  <Container>
    <h2 style={{ marginBottom: 40 }}>Contact Us</h2>
    <Grid>
      <Grid.Row>
        <Grid.Column width={8}>
          <Image src={img} size="large" />
        </Grid.Column>
        <Grid.Column width={8}>
          <Form>
            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                label="First name"
                placeholder="First name"
              />
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label="Last name"
                placeholder="Last name"
              />
              <Form.Field
                control={Select}
                options={genderOptions}
                label={{
                  children: "Gender",
                  htmlFor: "form-select-control-gender",
                }}
                placeholder="Gender"
                search
                searchInput={{ id: "form-select-control-gender" }}
              />
            </Form.Group>
            <Form.Field
              id="form-input-control-error-email"
              control={Input}
              label="Email"
              placeholder="arun@otssolutions.com"
            />
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Message"
              placeholder="Type Your Message here"
            />

            <Form.Field
              id="form-button-control-public"
              control={Button}
              content="Send Message"
              secondary
              // label="Label with htmlFor"
            />
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

export default Contact;