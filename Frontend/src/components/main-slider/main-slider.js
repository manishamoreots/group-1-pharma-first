import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import { Image} from "semantic-ui-react";

const MainSlider = () => {
  const items = [
    {
      id: 1,
      Images:
        "https://onemg.gumlet.io/e25a84b6-579b-4dcb-8163-d356c0cf7652_1672311420.png?w=667&h=175&format=auto",
    },
    {
      id: 2,
      Images:
        "https://onemg.gumlet.io/a_ignore,w_842,h_200,c_fit,q_auto,f_auto/f709d501-c68b-403d-a694-9ba3f9bdf822.png",
    },

    {
      id: 3,
      Images:
        "https://onemg.gumlet.io/a_ignore,w_960,h_200,c_fit,q_auto,f_auto/61129b45-0cd6-4df1-9ae9-c23e9a370de5.png",
    },
    {
      id: 4,
      Images:
        "https://onemg.gumlet.io/a_ignore,w_842,h_200,c_fit,q_auto,f_auto/f709d501-c68b-403d-a694-9ba3f9bdf822.png",
    },
    {
      id: 5,
      Images:
        "https://onemg.gumlet.io/a_ignore,w_842,h_200,c_fit,q_auto,f_auto/290cbf8a-5123-4ad6-ac6e-26b0e9c37976.png",
    },
   
  ];
  return (
    <>
      <Carousel showThumbs={false} autoPlay interval="4000">
        {items.map((item) => {
          return (
            <>
              <img src={item.Images} alt="home silder"></img>
            </>
          );
        })}
      </Carousel>
    </>
  );
};

export default MainSlider;
