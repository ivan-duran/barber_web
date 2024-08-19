import { Box, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const images = [
  "/images/barber01.png",
  "/images/barber02.png",
  "/images/barber03.png",
];

const CustomNextArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <IconButton
      aria-label="next"
      icon={<ChevronRightIcon />}
      onClick={onClick}
      position="absolute"
      top="50%"
      right="10px"
      transform="translateY(-50%)"
      zIndex="10"
      background="transparent"
      _hover={{ background: "transparent" }}
    />
  );
};

const CustomPrevArrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <IconButton
      aria-label="prev"
      icon={<ChevronLeftIcon />}
      onClick={onClick}
      position="absolute"
      top="50%"
      left="10px"
      transform="translateY(-50%)"
      zIndex="10"
      background="transparent"
      _hover={{ background: "transparent" }}
    />
  );
};

const SlideMobile = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow onClick={function (): void {
      throw new Error("Function not implemented.");
    } } />,
    prevArrow: <CustomPrevArrow onClick={function (): void {
      throw new Error("Function not implemented.");
    } } />,
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

export default SlideMobile;
