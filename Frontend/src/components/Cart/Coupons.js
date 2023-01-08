import React, { useState } from "react";
import { Button, Card, Feed, Grid, Input } from "semantic-ui-react";
const couponArray = ["Rahul"];
const Coupons = () => {
  const [coupon, setCoupon] = useState("");
  const [view, setView] = useState(false);
  const applyCoupon = () => {
    const filter = couponArray.find((item) => item === coupon);
    filter ? setView(true) : setView(false);
    setCoupon("");
  };
  return (
    <Grid.Column>
      <Card>
        <Card.Content>
          <Card.Header>Add Coupon</Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Content>
                <Grid>
                  <Grid.Row>
                    <Grid.Column width={12}>
                      <Feed.Summary>
                        <Input
                          focus
                          value={coupon}
                          icon="tags"
                          onChange={(e, { value }) => setCoupon(value)}
                          iconPosition="left"
                          placeholder="Enter Coupon"
                          type="text"
                        />
                        {view ? <> {`Coupon ${coupon} apply `}</> : null}
                      </Feed.Summary>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
        <Button onClick={applyCoupon}>Apply Coupon</Button>
      </Card>
    </Grid.Column>
  );
};

export default Coupons;
