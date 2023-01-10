import React from "react";
import "./main-slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const MainSlider = () => {
  const items = [
    {
      id: 1,
      Images:
        "https://onemg.gumlet.io/322cab94-7475-46ed-9032-51a5d44b55d0_1663311778.png?w=842&h=200&format=auto",
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
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop interval={2000} showIndicators={false}>
        {items.map((item) => {
          return (
            <>
              <img src={item.Images} alt="slider"></img>
            </>
          );
        })}
      </Carousel>
    </>
  );
};

export default MainSlider;
