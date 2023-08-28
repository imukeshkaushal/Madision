import React, { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import Slider from "react-slick";
import axios from "axios";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 200,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/home?populate=slider.image")
      .then((response) => {
        setApiData(response.data.data.attributes.slider);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  const [slider, setSlider] = useState("");


  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });


  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={"full"}
      overflow={"hidden"}
      backgroundColor={"white"}
    >

      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="none"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="20px" color="white" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="none"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="20px" color="white" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {apiData !== null ? (
          apiData.map((card, index) => (
            <Box
              key={index}
              height={"xl"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              backgroundImage={`url(http://localhost:1337${card.image.data.attributes.url})`}
            >
              <Container
                size="container.lg"
                height="600px"
                position="relative"
                m={0}
              >
                <Stack
                  spacing={6}
                  w={"full"}
                  maxW={"sm"}
                  position="relative"
                  top="50%"
                  left={["2%", "10%", "20%"]}
                  transform="translate(0, -50%)"
                >
                  <Heading
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    color={"white"}
                  >
                    {card.title}
                  </Heading>
                  <Text fontSize={{ base: "md", lg: "lg" }} color="white">
                    {card.text}
                  </Text>
                </Stack>
              </Container>
            </Box>
          ))
        ) : (
          // You can add a loading state or an empty state message here
          <p>Loading...</p>
        )}
      </Slider>
    </Box>
  );
}
