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
      quote:
        "My first booking experience with 1mg was simple and hassle-free. Selected sample collection slot on their app and the technician arrived right on time in the morning. Very impressive",
      customerName: "Nikita",
    },
    {
      id: 2,
      Images:
        "https://onemg.gumlet.io/d2ba679e-cffd-4165-baa5-46033fe667f0_1672731597.jpg?w=842&h=200&format=auto",
      quote:
        "I regularly get tests done for my father, who is a diabetic patient. I like the convenience of home sample collection and quick delivery of test reports on my email.",
      customerName: "Vijay",
    },

    {
      id: 3,
      Images:
        "https://onemg.gumlet.io/a_ignore,w_842,h_200,c_fit,q_auto,f_auto/c697f3c8-0c49-417c-9765-b89aba6e746e.png",
      quote:
        "I was surprised to see the wide selection of labs and tests on 1mg. Now I can compare tests and packages based on prices and lab ratings and choose the best one for me and my family.",
      customerName: "Ashlesha",
    },
    {
      id: 4,
      Images:
        "https://onemg.gumlet.io/9dea006c-9378-4b46-b0c9-def3da635a9c.png?w=431&h=200&format=auto",
      quote:
        "I had to get an MRI done for my mother and a relative recommended 1mg. Booked the test online with a reputed lab near my home. Received a call from 1mg's radiology expert who helped us with test preparation instructions and appointment details. The experience inside lab was very good.",
      customerName: "Ajay",
    },
    {
      id: 5,
      Images:
        "https://onemg.gumlet.io/ca163b43-ce33-4440-b5c8-cb4d7ff58e43_1664853845.jpg?w=842&h=200&format=auto",
      quote:
        "I got my wife's pregnancy tests done from 1mg. A trained technical visited to collect samples and all reports were delivered on time before her doctor's appointment. Will surely choose 1mg for the upcoming tests.",
      customerName: "Pradip",
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
                  showArrows={false}
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
        <Grid divided="vertically">
          <span className="main-heading" style={{ marginTop: "2%" }}>
            Popular lab tests & profiles
          </span>
          <Grid.Row columns={2}>
            <Grid.Column>
              <div class style={{ display: "flex", marginTop: "2%" }}>
                <Icon className="home" size="big" />
                <p style={{ width: "75%", marginTop: "5px" }}>
                  <h4 class="span-class">HEALTH TEST AT YOUR HOME</h4>
                </p>
              </div>
              <div style={{ display: "flex", marginLeft: "2%" }}>
                <ul>
                  <li>Complete Blood Count</li>
                  <li>Diabetes Screening</li>
                  <li>COVID-RTPCR</li>
                </ul>
                <div style={{ marginLeft: "10%" }}>
                  <ul>
                    <li>Thyroid profile Total</li>
                    <li>Liver Function Test</li>
                    <li>Lipid Profile</li>
                  </ul>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div
                class
                style={{ display: "flex", marginLeft: "2%", marginTop: "2%" }}
              >
                <Icon className="lab" size="big" />
                <p style={{ width: "75%", marginTop: "5px" }}>
                  <h4 class="span-class">VISIT A LAB NEAR YOU</h4>
                </p>
              </div>
              <div style={{ display: "flex", marginLeft: "5%" }}>
                <ul className="ul-class">
                  <li>USG Whole Abdomen</li>
                  <li>X - Ray Chest PA View</li>
                  <li>CT Scan (Head)</li>
                </ul>
                <div style={{ marginLeft: "10%" }}>
                  <ul>
                    <li>Electrocardiography</li>
                    <li>MRI Brain</li>
                    <li>MRI Cervical Spine</li>
                  </ul>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <div className="feedback-container">
        <Container>
          <div className="main-heading">Our Happy Customers</div>
          <Carousel showThumbs={false} autoPlay={true} infiniteLoop>
            {items.map((item) => {
              return (
                <>
                  <div className="feedback">
                    {item.quote}
                    <p style={{ marginTop: "2%", color: "black" }}>
                      ~{item.customerName}
                    </p>
                  </div>
                </>
              );
            })}
          </Carousel>
        </Container>
      </div>
    </>
  );
}

export default LabTest;
