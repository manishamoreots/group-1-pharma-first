import React from "react";
import { Container, Grid, Image, Card } from "semantic-ui-react";
import MainSlider from "../main-slider/main-slider";

function LabTest() {
  return (
    <>
      <Container fluid>
        <Grid>
          <Grid.Row style={{ justifyContent: "center" }}>
            <Grid.Column width={6}>{<MainSlider />}</Grid.Column>
            <Grid.Column width={8}>
              <Grid.Row>
                <Grid.Column width={2}>
                  <Card>
                    <Card.Meta>
                      <Image
                        src="https://onemg.gumlet.io/image/upload/v1617169012/marketing/mqwi4hji0xmevi0leqxt.png"
                        size="small"
                        // ui={false}
                        wrapped
                      />
                    </Card.Meta>
                    <Card.Content>
                      <Card.Header>FREE Health Monitoring</Card.Header>

                      <Card.Description>
                        Daniel is a comedian living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra></Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Card>
                    <Card.Meta>
                      <Image
                        src="https://onemg.gumlet.io/image/upload/v1617169012/marketing/mqwi4hji0xmevi0leqxt.png"
                        size="small"
                        // ui={false}
                        wrapped
                      />
                    </Card.Meta>
                    <Card.Content>
                      <Card.Header>FREE Health Monitoring</Card.Header>

                      <Card.Description>
                        Daniel is a comedian living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra></Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Card>
                    <Card.Meta>
                      <Image
                        src="https://onemg.gumlet.io/image/upload/v1617169012/marketing/mqwi4hji0xmevi0leqxt.png"
                        size="small"
                        // ui={false}
                        wrapped
                      />
                    </Card.Meta>
                    <Card.Content>
                      <Card.Header>FREE Health Monitoring</Card.Header>

                      <Card.Description>
                        Daniel is a comedian living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra></Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
          {/* <Grid.Row style={{ justifyContent: "center" }}>
            <Grid.Column width={4}>
              <Card>
                <Card.Meta>
                  <Image
                    src="https://onemg.gumlet.io/image/upload/v1617169012/marketing/mqwi4hji0xmevi0leqxt.png"
                    size="small"
                    // ui={false}
                    wrapped
                  />
                </Card.Meta>
                <Card.Content>
                  <Card.Header>FREE Health Monitoring</Card.Header>

                  <Card.Description>
                    Daniel is a comedian living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra></Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card>
                <Card.Meta>
                  <Image
                    src="https://onemg.gumlet.io/image/upload/v1617169094/marketing/rciejxt8uupxvkdoztx1.png"
                    wrapped
                    // ui={false}
                    size="small"
                  />
                </Card.Meta>
                <Card.Content>
                  <Card.Header>Priority Processing</Card.Header>
                  <Card.Meta>Joined in 2016</Card.Meta>
                  <Card.Description>
                    Daniel is a comedian living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra></Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card>
                <Card.Meta>
                  <Image
                    src="https://onemg.gumlet.io/image/upload/v1617169138/marketing/q2xl4gwlyw55awctv1lk.png"
                    wrapped
                    size="small"
                  />
                </Card.Meta>

                <Card.Content>
                  <Card.Header>Premium Customer Support</Card.Header>
                  <Card.Meta>Joined in 2016</Card.Meta>
                  <Card.Description>
                    Daniel is a comedian living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra></Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column></Grid.Column>
          </Grid.Row> */}
        </Grid>
      </Container>
    </>
  );
}

export default LabTest;
