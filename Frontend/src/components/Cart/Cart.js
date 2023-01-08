/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  Icon,
  Grid,
  Container,
  Feed,
  Button,
  Card,
  Input,
  Item,
} from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  getCartItems,
  removeFromCart,
} from "../Reducer/cartReducer";
import Coupons from "./Coupons";
import Summary from "./Summery";
import EmptyCart from "./EmptyCart";
export default function Cart() {
  const dispatch = useDispatch();
  const { cartItem } = useSelector((state) => state.cart.data);
  useEffect(() => {
    dispatch(getCartItems());
    console.log(cartItem);
  }, []);
  return (
    <Container>
      {cartItem && cartItem.length <= 0 ? (
        <EmptyCart />
      ) : (
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={11}>
                <Card style={{ width: 750 }}>
                  <Card.Content>
                    <Card.Header style={{ textAlign: "center" }}>
                      Items In Your Cart
                    </Card.Header>
                  </Card.Content>
                  <Card.Content>
                    {cartItem.map((item) => (
                      <>
                        <Item.Group divided>
                          <Item
                            style={{
                              border: "1px solid black",
                              paddingLeft: 20,
                              paddingRight: 20,

                              //   margin: 20,
                            }}
                          >
                            <Item.Image
                              src={item.itemImage}
                              size="tiny"
                              style={{
                                paddingTop: 30,
                                paddingBottom: 20,

                                //   margin: 20,
                              }}
                            />
                            <Item.Content
                              style={{
                                paddingTop: 50,
                                paddingBottom: 10,

                                //   margin: 20,
                              }}
                            >
                              <Item.Header as="a">
                                {`${item.itemName}...`}
                              </Item.Header>
                              <Item.Meta>
                                <div>Price:{item.itemPrice}</div>
                              </Item.Meta>
                              <Item.Description>
                                {/* {paragraph} */}
                                Item Count: {item.count}
                                <Item.Extra>
                                  <Button.Group floated="right">
                                    <Button
                                      onClick={() => dispatch(addToCart(item))}
                                      style={{ width: 50 }}
                                    >
                                      <Icon name="add" size="small" />
                                    </Button>
                                    <Button
                                      onClick={() =>
                                        dispatch(removeFromCart(item))
                                      }
                                      style={{ width: 50, marginLeft: 20 }}
                                    >
                                      <Icon name="minus" size="small" />
                                    </Button>
                                  </Button.Group>
                                  {/* <Label>Limited</Label> */}
                                </Item.Extra>
                              </Item.Description>
                            </Item.Content>
                          </Item>
                        </Item.Group>
                      </>
                    ))}
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column width={5}>
                <Grid.Column>
                  <Coupons />
                  <Summary items={cartItem} />
                </Grid.Column>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      )}
    </Container>
  );
}
