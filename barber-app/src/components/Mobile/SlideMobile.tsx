import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";





const images = [
    "/images/barber01.png",
    "/images/barber02.png",
    "/images/barber03.png",
  ];


  const SlideMobile = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <div className="custom-next-arrow">Next</div>,
        prevArrow: <div className="custom-prev-arrow">Prev</div>,
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
            <Box key={index} padding="2">
                <Image
                    src={image}
                    width={2145}
                    height={1864}
                    alt={`barber image ${index}`}
                />
            </Box>
            ))}
        </Slider>
    );
};

const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      );
}

  

export default SimpleSlider;