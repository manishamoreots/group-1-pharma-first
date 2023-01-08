import React from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
  Icon,
} from "semantic-ui-react";
import "./footer.css";
import Logo from "../image/logo.png";

export default function Footer() {
  return (
    <>
      <Segment
        inverted
        vertical
        style={{ margin: "2em 0em 0em", padding: "2em 0em" }}
        className="footer-container"
      >
        <Container textAlign="center">
          <Grid divided inverted stackable>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Know Us" />
              <List link inverted>
                <List.Item as="a">About Us</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Business Partnership</List.Item>
                <List.Item as="a">Careers</List.Item>
                <List.Item as="a">Become a Health Partner</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Our Policies" />
              <List link inverted>
                <List.Item as="a">Privacy Policy</List.Item>
                <List.Item as="a">Terms and Conditions</List.Item>
                <List.Item as="a">Return Policy</List.Item>
                <List.Item as="a">Editorial Policy</List.Item>
                <List.Item as="a">IP Policy</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Our Services" />
              <List link inverted>
                <List.Item as="a">Order Medicines</List.Item>
                <List.Item as="a">Book Lab Tests</List.Item>
                <List.Item as="a">Consult a Doctor</List.Item>
                <List.Item as="a">Ayurveda Articles</List.Item>
                <List.Item as="a">Care Plan</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header inverted as="h4" content="Connect" />
              <List link inverted>
                <List.Item as="a">Social Links</List.Item>
              </List>
              <List
                horizontal
                inverted
                divided
                link
                size="small"
                className="social-icons"
              >
                <Icon
                  className="facebook "
                  name="facebook f"
                  size="big"
                  circular
                />
                <Icon
                  className="instagram"
                  name="instagram"
                  size="big"
                  circular
                />
                <Icon className="twitter" name="twitter" size="big" circular />

                <Icon className="youtube" name="youtube" size="big" circular />
                <Icon
                  className="linkedin"
                  name="linkedin"
                  size="big"
                  circular
                />
              </List>
            </Grid.Column>
          </Grid>

          <Divider inverted section />
          <Image
            centered
            size="mini"
            src={Logo}
            style={{ width: "auto", height: 60 }}
          />
          <div className="style__copyright" style={{ margin: 0 }}>
            © 2023 <strong>Pharma First</strong> . All rights reserved. In
            compliance with Drugs and Cosmetics Act, 1940 and Drugs and
            Cosmetics Rules, 1945, we don't process requests for Schedule X and
            other habit forming drugs.
          </div>
        </Container>
      </Segment>
    </>
  );
}
