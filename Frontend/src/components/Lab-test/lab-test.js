import React from "react";
import "./labtest.css";
import { Icon, Grid, Container } from "semantic-ui-react";
import { Carousel } from "react-responsive-carousel";

function LabTest() {
  const items = [
    {
      id: 1,
      Images:
        "https://onemg.gumlet.io/e25a84b6-579b-4dcb-8163-d356c0cf7652_1672311420.png?w=667&h=175&format=auto",
    },
    {
      id: 2,
      Images:
        "https://onemg.gumlet.io/d2ba679e-cffd-4165-baa5-46033fe667f0_1672731597.jpg?w=842&h=200&format=auto",
    },

    {
      id: 3,
      Images:
        "https://onemg.gumlet.io/a_ignore,w_842,h_200,c_fit,q_auto,f_auto/c697f3c8-0c49-417c-9765-b89aba6e746e.png",
    },
    {
      id: 4,
      Images:
        "https://onemg.gumlet.io/9dea006c-9378-4b46-b0c9-def3da635a9c.png?w=431&h=200&format=auto",
    },
    {
      id: 5,
      Images:
        "https://onemg.gumlet.io/ca163b43-ce33-4440-b5c8-cb4d7ff58e43_1664853845.jpg?w=842&h=200&format=auto",
    },
  ];
  return (
    <>
      <Container>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <div className="carousel-conatiner">
                <Carousel
                  showThumbs={false}
                  autoPlay={true}
                  infiniteLoop
                  invented={2000}
                >
                  {items.map((item) => {
                    return (
                      <>
                        <img src={item.Images} alt="slider" height={"200px"} />
                      </>
                    );
                  })}
                </Carousel>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className="main-heading">
                Lab Test From The Comfort Of Your Home
              </div>
              <div class="sub-heading" style={{ alignItems: "center" }}>
                <span>
                  50,00,000+ lab tests booked | 20,00,000+ satisfied customers
                </span>
              </div>
              <div style={{ alignItems: "center", marginTop: "4%" }}>
                <Grid divided="vertically">
                  <Grid.Row columns={5}>
                    <Grid.Column>
                      <div style={{ borderRight: "1px solid #d8d8d8" }}>
                        {" "}
                        <img
                          style={{ height: "50px", width: "50px" }}
                          src="https://onemg.gumlet.io/Safe_38x38_labs_oe5ieq.png?format=auto"
                          alt="Hygienic"
                        />
                        <div className="column-heading">
                          <span>100% Safe & Hygienic</span>
                        </div>
                      </div>
                    </Grid.Column>
                    <Grid.Column>
                      <div style={{ borderRight: "1px solid #d8d8d8" }}>
                        {" "}
                        <img
                          style={{ height: "50px", width: "50px" }}
                          src="https://onemg.gumlet.io/new_color_images/Lab_delivery_2x.png?format=auto"
                          alt="home sample"
                        />
                        <div className="column-heading">
                          <span>Home Sample Pick Up</span>
                        </div>
                      </div>
                    </Grid.Column>
                    <Grid.Column>
                      <div style={{ borderRight: "1px solid #d8d8d8" }}>
                        {" "}
                        <img
                          style={{ height: "50px", width: "50px" }}
                          src="https://onemg.gumlet.io/new_color_images/Lab_online_report_2x.png?format=auto"
                          alt="view report"
                        />
                        <div className="column-heading">
                          <span>View Reports Online</span>
                        </div>
                      </div>
                    </Grid.Column>
                    <Grid.Column>
                      <div style={{ borderRight: "1px solid #d8d8d8" }}>
                        {" "}
                        <img
                          style={{ height: "50px", width: "50px" }}
                          src="https://onemg.gumlet.io/new_color_images/Lab_doctor_2x.png?format=auto"
                          alt="doctor consultation"
                        />
                        <div className="column-heading">
                          <span>Free Doctor Consultation</span>
                        </div>
                      </div>
                    </Grid.Column>
                    <Grid.Column>
                      <div>
                        {" "}
                        <img
                          style={{ height: "50px", width: "50px" }}
                          src="https://onemg.gumlet.io/new_color_images/Lab_offer_2x.png?format=auto"
                          alt="Best Prices"
                        />
                        <div className="column-heading">
                          <span>Best Prices Guaranteed</span>
                        </div>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid divided="vertically" >
          <div className="main-heading" style={{marginTop:"2%"}}>Popular lab tests & profiles</div>
          <Grid.Row
            columns={2}
            
          >
            <Grid.Column className="grid-class">
              <div class style={{ display: "flex" }}>
                <Icon className="home" size="big" />
                <span>
                  <h4 class="">HEALTH TEST AT YOUR HOME</h4>
                </span>
              </div>
              <div style={{ display: "flex" }}>
                <ul>
                  <li>Complete Blood Count</li>
                  <li>Diabetes Screening</li>
                  <li>COVID-RTPCR</li>
                </ul>

                <ul>
                  <li>Thyroid profile Total</li>
                  <li>Liver Function Test</li>
                  <li>Lipid Profile</li>
                </ul>
              </div>
            </Grid.Column>
            <Grid.Column style={{ borderLeft: "1px solid grey" }}>
              <div class style={{ display: "flex" }}>
                <Icon className="lab" size="big" />
                <span>
                  <h4 class="">VISIT A LAB NEAR YOU</h4>
                </span>
              </div>
              <div style={{ display: "flex" }}>
                <ul>
                  <li>USG Whole Abdomen</li>
                  <li>X - Ray Chest PA View</li>
                  <li>CT Scan (Head)</li>
                </ul>

                <ul>
                  <li>Electrocardiography</li>
                  <li>MRI Brain</li>
                  <li>MRI Cervical Spine</li>
                </ul>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
}

export default LabTest;
