import React, { useEffect } from "react";
import {
  Icon,
  Label,
  Grid,
  Image,
  Container,
  Feed,
  Button,
  Card,
  Input,
} from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../Reducer/commonReducer";
import img from "../image/loader.gif";
export default function Cart() {
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
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column width={11}>
            <Card style={{ width: 750 }}>
              <Card.Content>
                <Card.Header>Items In Your Cart</Card.Header>
              </Card.Content>
              <Card.Content>
                <Feed>
                  <Feed.Event>
                    <Feed.Content>
                      <Grid>
                        <Grid.Row>
                          <Grid.Column width={12}>
                            <Feed.Summary>Item Name</Feed.Summary>
                          </Grid.Column>
                          <Grid.Column width={4}>
                            <Feed.Summary>Item Price</Feed.Summary>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column width={5}>
                            <Feed.Date>quantity</Feed.Date>
                          </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                          <Grid.Column width={11}>
                            <Button>
                              <Icon name="delete" size="small" />
                              Remove
                            </Button>
                          </Grid.Column>
                          <Grid.Column width={5}>
                            <Button>
                              <Icon name="add" size="small" />
                            </Button>
                            <Input
                              disabled
                              placeholder={"item quantity"}
                              style={{
                                width: 40,
                                color: "black",
                              }}
                            />
                            <Button>
                              <Icon name="minus" size="small" />
                            </Button>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Feed.Content>
                  </Feed.Event>
                </Feed>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={5}>
            <Grid.Column>
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
                                    icon="tags"
                                    iconPosition="left"
                                    placeholder="Enter Coupon"
                                    type="text"
                                  />
                                </Feed.Summary>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Feed.Content>
                      </Feed.Event>
                    </Feed>
                  </Card.Content>
                  <Button>Apply Coupon</Button>
                </Card>
              </Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header>Order Summary</Card.Header>
                </Card.Content>
                <Card.Content>
                  <Feed>
                    <Feed.Event>
                      <Feed.Content>
                        <Grid>
                          <Grid.Row>
                            <Grid.Column width={12}>
                              <Feed.Summary>Total Price(MRP):</Feed.Summary>
                            </Grid.Column>
                            <Grid.Column width={4}>
                              <Feed.Summary>1000</Feed.Summary>
                            </Grid.Column>
                          </Grid.Row>
                          <Grid.Row>
                            <Grid.Column width={12}>
                              <Feed.Summary>GST:</Feed.Summary>
                            </Grid.Column>
                            <Grid.Column width={4}>
                              <Feed.Summary>18%</Feed.Summary>
                            </Grid.Column>
                          </Grid.Row>
                          <Grid.Row>
                            <Grid.Column width={12}>
                              <Feed.Summary>Coupon Applied:</Feed.Summary>
                            </Grid.Column>
                            <Grid.Column width={4}>
                              <Feed.Summary>18%</Feed.Summary>
                            </Grid.Column>
                          </Grid.Row>
                          <Grid.Row>
                            <Grid.Column width={12}>
                              <Feed.Summary>To be paid:</Feed.Summary>
                            </Grid.Column>
                            <Grid.Column width={4}>
                              <Feed.Summary>1180</Feed.Summary>
                            </Grid.Column>
                          </Grid.Row>
                          <Grid.Row>
                            <Grid.Column width={9}>
                              Your Delivery Location
                            </Grid.Column>
                            <Grid.Column width={7}>
                              <Feed.Summary>
                                <Icon name="location arrow" />
                                {locationInfo.city}
                              </Feed.Summary>
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </Feed.Content>
                    </Feed.Event>
                  </Feed>
                </Card.Content>
                <Button>CheckOut</Button>
              </Card>
            </Grid.Column>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
