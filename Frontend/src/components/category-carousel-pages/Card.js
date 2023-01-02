import React from "react";
import "./Card.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, Image } from "semantic-ui-react";

const CardComponent = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const items = [
    {
      id: 1,
      description: "cipla",
      Images:
        "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/c2a0598f-483c-48ff-9783-71e402aa28d3.png",
    },
    {
      id: 2,
      description: "paracitamol",
      Images:
        "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ab1da5f4-c074-47d2-b278-a5fbd2c93f1f.png",
    },
    {
      id: 3,
      description: "Amtas m50",
      Images:
        "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/702457a8-ff7d-43a6-bd1d-6bcb278ce686.png",
    },
    {
      id: 4,
      description: "maftal spas",
      Images:
        "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/995e64ba-5bd9-42bc-8db6-5dc0b821c89d.png",
    },
    {
      id: 5,
      description: "cruzol",
      Images:
        "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/ba975795-98dc-4cd8-8b55-3c20230d70e3.png",
    },
    {
      id: 6,
      description: "mucor m60",
      Images:
        "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/e77d5099-d905-4462-ab9d-b51802e3739b.png",
    },
    {
      id: 7,
      description: "wicks",
      Images:
        "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/fa7ff8e9-f1f8-4a3e-9125-c9b36bcf38cd.png",
    },
    {
      id: 8,
      description: "kelon",
      Images:
        "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/4a788b46-97f3-460e-afb6-428368f779ee.png",
    },
    {
      id: 9,
      description: "wicks",
      Images:
        "https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/631e3dca-3d5b-49f8-832b-8341ec4784e7.png",
    },
  ];
  return (
    <>
      <div className="carousel-border">
        <Carousel responsive={responsive}>
          {items.map((item) => {
            return (
              <div className="carousel-card">
                <Card size="small">
                  <Image
                    style={{ padding: "15%" }}
                    src={item.Images}
                    wrapped
                    ui={false}
                  />
                  <Card.Description>{item.description}</Card.Description>
                </Card>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default CardComponent;
